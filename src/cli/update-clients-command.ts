import fs from "node:fs";
import { resolve } from "node:path";
import { Command } from "commander";
import openapiTS, { astToString } from "openapi-typescript";
import { parse } from "yaml";
import {
  type ConfigurationBuildingBlock,
  OpenAPIFileFormats,
  readConfigurationFile,
} from "./clients-configurations/read-configuration-file.js";

/**
 * This command, starting from a json configuration file,
 * downloads the open-API definition file,
 * stores it in a folder with the building block name,
 * then creates the Typescript schema and stores it in the same folder
 */

type FileBackup = {
  oldPath: string | null;
  newPath: string | null;
};

const CLIENTS_ROOT_FOLDER_PATH = "src/client/clients";

function getAbsolutePathFromOption(...relativeInputPath: string[]): string {
  return resolve(process.cwd(), ...relativeInputPath);
}

async function getOpenApiDefinitionFileContent(
  filePath: string,
): Promise<string> {
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, "utf-8");
  }

  try {
    const url = new URL(filePath);
    const response = await fetch(url);
    return response.text();
  } catch {}

  throw new Error(
    "The configuration-file-path is not a valid file path nor url",
  );
}

async function storeOpenApiDefinitionFile({
  inputBuildingBlock,
}: {
  inputBuildingBlock: ConfigurationBuildingBlock;
}): Promise<{
  filePath: string;
  fileContent: string;
  buildingBlockFolder: string;
  fileBackup: FileBackup;
}> {
  log(`${inputBuildingBlock.name} - Downloading Open API definition file`);
  const downloadedFileContent = await getOpenApiDefinitionFileContent(
    inputBuildingBlock.openApiDefinitionUrl,
  );
  log(`${inputBuildingBlock.name} - Open API definition file downloaded`);
  const openApiParsed =
    inputBuildingBlock.openApiDefinitionFormat === OpenAPIFileFormats.JSON
      ? JSON.parse(downloadedFileContent)
      : parse(downloadedFileContent);
  log(`${inputBuildingBlock.name} - Open API definition file parsed`);

  const serviceFolderPath = getAbsolutePathFromOption(
    CLIENTS_ROOT_FOLDER_PATH,
    inputBuildingBlock.name,
  );

  if (!fs.existsSync(serviceFolderPath)) {
    fs.mkdirSync(serviceFolderPath, { recursive: true });
  }

  const stringifiedOpenApi = JSON.stringify(openApiParsed, null, 2);
  const storedDefinitionFilePath = getAbsolutePathFromOption(
    serviceFolderPath,
    "open-api-definition.json",
  );
  const oldFilePath = getAbsolutePathFromOption(
    serviceFolderPath,
    "old-open-api-definition.json",
  );

  log(`${inputBuildingBlock.name} - Storing Open API definition file`);
  const fileBackup = storeFilesWithBackup({
    oldPath: oldFilePath,
    latestVersionContent: stringifiedOpenApi,
    latestVersionPath: storedDefinitionFilePath,
  });
  log(
    `${inputBuildingBlock.name} - Open API definition file stored!`,
    fileBackup,
  );
  return {
    fileContent: stringifiedOpenApi,
    filePath: storedDefinitionFilePath,
    buildingBlockFolder: serviceFolderPath,
    fileBackup,
  };
}

async function storeSchema({
  openApiDefinitionContent,
  buildingBlockFolder,
  inputBuildingBlock,
}: {
  openApiDefinitionContent: string;
  buildingBlockFolder: string;
  inputBuildingBlock: ConfigurationBuildingBlock;
}): Promise<FileBackup> {
  log(`${inputBuildingBlock.name} - Creating TS Schema`);
  const parser = await openapiTS(openApiDefinitionContent);
  const parsedSchema = astToString(parser);
  log(`${inputBuildingBlock.name} - TS Schema created`);
  const schemaFilePath = getAbsolutePathFromOption(
    buildingBlockFolder,
    "schema.ts",
  );
  const oldPath = getAbsolutePathFromOption(
    buildingBlockFolder,
    "old-schema.ts",
  );

  log(`${inputBuildingBlock.name} - Storing TS Schema`);
  const fileBackup = storeFilesWithBackup({
    oldPath,
    latestVersionContent: parsedSchema,
    latestVersionPath: schemaFilePath,
  });
  log(`${inputBuildingBlock.name} - TS Schema stored`);

  return fileBackup;
}

async function processBuildingBlock({
  inputBuildingBlock,
}: { inputBuildingBlock: ConfigurationBuildingBlock }): Promise<void> {
  let schemaFileBackup: FileBackup = {
    oldPath: null,
    newPath: null,
  };
  let storedDefinition = null;
  log(`${inputBuildingBlock.name} - Processing`);
  try {
    storedDefinition = await storeOpenApiDefinitionFile({
      inputBuildingBlock,
    });
    schemaFileBackup = await storeSchema({
      inputBuildingBlock,
      openApiDefinitionContent: storedDefinition.fileContent,
      buildingBlockFolder: storedDefinition.buildingBlockFolder,
    });

    log(`${inputBuildingBlock.name} - Deleting backup files`);
    deleteOldFiles(
      inputBuildingBlock.name,
      storedDefinition.fileBackup,
      schemaFileBackup,
    );
  } catch (e) {
    restoreOldFiles(
      inputBuildingBlock.name,
      storedDefinition?.fileBackup ?? { newPath: null, oldPath: null },
      schemaFileBackup,
    );

    log(`${inputBuildingBlock.name} - Error While Processing`);
    throw e;
  }
  log(`${inputBuildingBlock.name} - Processed`);
}

async function updateClients({
  configurationFilePath,
  dryRun,
}: { configurationFilePath: string; dryRun?: boolean }): Promise<void> {
  dryRun = dryRun ?? false;
  const configurationFile = await readConfigurationFile(configurationFilePath);
  log("Configuration file read");

  const promises: Promise<void>[] = [];
  for (const inputBuilding of Object.values(configurationFile.buildingBlocks)) {
    promises.push(processBuildingBlock({ inputBuildingBlock: inputBuilding }));
  }

  await Promise.all(promises);
}

function deleteOldFiles(
  buildingBlockName: string,
  ...backedUpFiles: FileBackup[]
): void {
  for (const backedUp of backedUpFiles) {
    try {
      // if an old version has been backupped
      // but all went fine, delete it
      if (backedUp.oldPath) {
        fs.unlinkSync(backedUp.oldPath);
      }
    } catch (e) {
      log(`${buildingBlockName} - Error deleting ${backedUp.oldPath}`, e);
    }
  }
}

function restoreOldFiles(
  buildingBlockName: string,
  ...backedUpFiles: FileBackup[]
): void {
  for (const backedUp of backedUpFiles) {
    try {
      if (backedUp.oldPath) {
        // if a backup is available and the
        // new file has been written
        // revert it
        if (backedUp.newPath) {
          fs.copyFileSync(backedUp.oldPath, backedUp.newPath);
        }
        fs.unlinkSync(backedUp.oldPath);
      } else if (backedUp.newPath) {
        // if the new file has been saved
        // and something went wrong
        // delete it
        fs.unlinkSync(backedUp.newPath);
      }
    } catch (e) {
      log(`${buildingBlockName} - Error restoring ${backedUp.newPath}`, e);
    }
  }
}

function storeFilesWithBackup({
  oldPath,
  latestVersionPath,
  latestVersionContent,
}: {
  oldPath: string;
  latestVersionPath: string;
  latestVersionContent: string;
}): FileBackup {
  const output: FileBackup = { newPath: null, oldPath: null };
  // if the file already exists
  // backup it
  if (fs.existsSync(latestVersionPath)) {
    output.oldPath = oldPath;
    fs.copyFileSync(latestVersionPath, oldPath);
  }
  // write the new file
  fs.writeFileSync(latestVersionPath, latestVersionContent);
  output.newPath = latestVersionPath;

  return output;
}

function log(message: string, ...params: unknown[]): void {
  if (params.length === 0) {
    console.log(`Update Clients: ${message}`);
    return;
  }
  console.log(`Update Clients: ${message}`, params);
}

const updateClientsCommand = new Command("clients:update");
updateClientsCommand
  .description(
    "Parse a configuration file to update the info related to the clients",
  )
  .requiredOption(
    "-c, --configuration-file-path <configuration-path>",
    "Path of the configuration file to parse",
    (value: string) => {
      // Coerce the string into an array of numbers
      return getAbsolutePathFromOption(value);
    },
  )
  .option("--dry-run", "Simulate the command without executing it")
  .action(
    async (options: { configurationFilePath: string; dryRun?: boolean }) => {
      log("Started!");
      await updateClients(options);
      log("Ended!");
    },
  );

export default updateClientsCommand;
