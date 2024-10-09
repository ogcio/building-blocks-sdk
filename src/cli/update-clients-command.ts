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
  const downloadedFileContent = await getOpenApiDefinitionFileContent(
    inputBuildingBlock.openApiDefinitionUrl,
  );
  const openApiParsed =
    inputBuildingBlock.openApiDefinitionFormat === OpenAPIFileFormats.JSON
      ? JSON.parse(downloadedFileContent)
      : parse(downloadedFileContent);

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

  return {
    fileContent: stringifiedOpenApi,
    filePath: storedDefinitionFilePath,
    buildingBlockFolder: serviceFolderPath,
    fileBackup: storeFilesWithBackup({
      oldPath: oldFilePath,
      latestVersionContent: stringifiedOpenApi,
      latestVersionPath: storedDefinitionFilePath,
    }),
  };
}

async function storeSchema({
  openApiDefinitionContent,
  buildingBlockFolder,
}: {
  openApiDefinitionContent: string;
  buildingBlockFolder: string;
}): Promise<FileBackup> {
  const parser = await openapiTS(openApiDefinitionContent);
  const parsedSchema = astToString(parser);
  const schemaFilePath = getAbsolutePathFromOption(
    buildingBlockFolder,
    "schema.ts",
  );
  const oldPath = getAbsolutePathFromOption(
    buildingBlockFolder,
    "old-schema.ts",
  );

  return storeFilesWithBackup({
    oldPath,
    latestVersionContent: parsedSchema,
    latestVersionPath: schemaFilePath,
  });
}

async function processBuildingBlock({
  inputBuildingBlock,
}: { inputBuildingBlock: ConfigurationBuildingBlock }): Promise<void> {
  let schemaFileBackup: FileBackup = {
    oldPath: null,
    newPath: null,
  };
  let storedDefinition = null;
  try {
    storedDefinition = await storeOpenApiDefinitionFile({
      inputBuildingBlock,
    });
    schemaFileBackup = await storeSchema({
      openApiDefinitionContent: storedDefinition.fileContent,
      buildingBlockFolder: storedDefinition.buildingBlockFolder,
    });

    deleteOldFiles(storedDefinition.fileBackup, schemaFileBackup);
  } catch (e) {
    restoreOldFiles(
      storedDefinition?.fileBackup ?? { newPath: null, oldPath: null },
      schemaFileBackup,
    );

    throw e;
  }
}

async function updateClients({
  configurationFilePath,
}: { configurationFilePath: string }): Promise<void> {
  const configurationFile = await readConfigurationFile(configurationFilePath);

  const promises: Promise<void>[] = [];
  for (const inputBuilding of Object.values(configurationFile.buildingBlocks)) {
    promises.push(processBuildingBlock({ inputBuildingBlock: inputBuilding }));
  }

  await Promise.all(promises);
}

function deleteOldFiles(...backedUpFiles: FileBackup[]): void {
  for (const backedUp of backedUpFiles) {
    try {
      // if an old version has been backupped
      // but all went fine, delete it
      if (backedUp.oldPath) {
        fs.unlinkSync(backedUp.oldPath);
      }
    } catch (e) {
      console.log(`Error deleting ${backedUp.oldPath}`, e);
    }
  }
}

function restoreOldFiles(...backedUpFiles: FileBackup[]): void {
  for (const backedUp of backedUpFiles) {
    try {
      // if the new file has been saved
      // and something went wrong
      // delete it
      if (backedUp.newPath) {
        fs.unlinkSync(backedUp.newPath);
      }
      if (backedUp.oldPath) {
        // if a backup is available and the
        // new file has been written
        // revert it
        if (backedUp.newPath) {
          fs.copyFileSync(backedUp.oldPath, backedUp.newPath);
        }
        fs.unlinkSync(backedUp.oldPath);
      }
    } catch (e) {
      console.log(`Error restoring ${backedUp.newPath}`, e);
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
  .action(async (options: { configurationFilePath: string }) => {
    await updateClients(options);
  });

export default updateClientsCommand;
