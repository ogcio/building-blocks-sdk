import fs from "node:fs";
import { resolve } from "node:path";
import { Command } from "commander";
import openapiTS, { astToString } from "openapi-typescript";
import { parse } from "yaml";
import {
  CLIENTS_ROOT_FOLDER_PATH,
  OLD_OPEN_API_DEFINITION_FILE_NAME,
  OLD_SCHEMA_FILE_NAME,
  OPEN_API_DEFINITION_FILE_NAME,
  SCHEMA_FILE_NAME,
  getAbsolutePathFromOption,
  getOpenApiDefinitionFileContent,
} from "./cli-utils.js";
import {
  type ConfigurationBuildingBlock,
  OpenAPIFileFormats,
  readConfigurationFile,
} from "../clients-configurations/read-configuration-file.js";

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

function log(message: string, ...params: unknown[]): void {
  if (params.length === 0) {
    console.log(`Update Clients: ${message}`);
    return;
  }
  console.log(`Update Clients: ${message}`, params);
}

async function storeOpenApiDefinitionFile({
  inputBuildingBlock,
  dryRun,
}: {
  inputBuildingBlock: ConfigurationBuildingBlock;
  dryRun: boolean;
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

  if (!fs.existsSync(serviceFolderPath) && !dryRun) {
    fs.mkdirSync(serviceFolderPath, { recursive: true });
  }

  const stringifiedOpenApi = JSON.stringify(openApiParsed, null, 2);
  const storedDefinitionFilePath = getAbsolutePathFromOption(
    serviceFolderPath,
    OPEN_API_DEFINITION_FILE_NAME,
  );
  const oldFilePath = getAbsolutePathFromOption(
    serviceFolderPath,
    OLD_OPEN_API_DEFINITION_FILE_NAME,
  );

  log(`${inputBuildingBlock.name} - Storing Open API definition file`);
  let fileBackup: FileBackup = { newPath: null, oldPath: null };
  if (!dryRun) {
    fileBackup = storeFilesWithBackup({
      oldPath: oldFilePath,
      latestVersionContent: stringifiedOpenApi,
      latestVersionPath: storedDefinitionFilePath,
    });
  }
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
  dryRun,
}: {
  openApiDefinitionContent: string;
  buildingBlockFolder: string;
  inputBuildingBlock: ConfigurationBuildingBlock;
  dryRun: boolean;
}): Promise<FileBackup> {
  log(`${inputBuildingBlock.name} - Creating TS Schema`);
  const parser = await openapiTS(openApiDefinitionContent);
  const parsedSchema = astToString(parser);
  log(`${inputBuildingBlock.name} - TS Schema created`);
  const schemaFilePath = getAbsolutePathFromOption(
    buildingBlockFolder,
    SCHEMA_FILE_NAME,
  );
  const oldPath = getAbsolutePathFromOption(
    buildingBlockFolder,
    OLD_SCHEMA_FILE_NAME,
  );

  log(`${inputBuildingBlock.name} - Storing TS Schema`);
  let fileBackup: FileBackup = { newPath: null, oldPath: null };
  if (!dryRun) {
    fileBackup = storeFilesWithBackup({
      oldPath,
      latestVersionContent: parsedSchema,
      latestVersionPath: schemaFilePath,
    });
  }
  log(`${inputBuildingBlock.name} - TS Schema stored`);

  return fileBackup;
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

async function processBuildingBlock({
  inputBuildingBlock,
  dryRun,
}: {
  inputBuildingBlock: ConfigurationBuildingBlock;
  dryRun: boolean;
}): Promise<void> {
  let schemaFileBackup: FileBackup = {
    oldPath: null,
    newPath: null,
  };
  let storedDefinition = null;
  log(`${inputBuildingBlock.name} - Processing`);
  try {
    storedDefinition = await storeOpenApiDefinitionFile({
      inputBuildingBlock,
      dryRun,
    });
    schemaFileBackup = await storeSchema({
      inputBuildingBlock,
      openApiDefinitionContent: storedDefinition.fileContent,
      buildingBlockFolder: storedDefinition.buildingBlockFolder,
      dryRun,
    });

    log(`${inputBuildingBlock.name} - Deleting backup files`);
    if (!dryRun) {
      deleteOldFiles(
        inputBuildingBlock.name,
        storedDefinition.fileBackup,
        schemaFileBackup,
      );
    }
  } catch (e) {
    log(
      `${inputBuildingBlock.name} - Error While Processing, restoring backups`,
    );
    if (!dryRun) {
      restoreOldFiles(
        inputBuildingBlock.name,
        storedDefinition?.fileBackup ?? { newPath: null, oldPath: null },
        schemaFileBackup,
      );
    }

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
    promises.push(
      processBuildingBlock({ inputBuildingBlock: inputBuilding, dryRun }),
    );
  }

  await Promise.all(promises);
}

const updateClientsCommand = new Command("clients:update");
updateClientsCommand
  .description(
    "Parse a configuration file to update the info related to the clients",
  )
  .requiredOption(
    "-c, --configuration-file-path <configuration-path>",
    "Path of the configuration file to parse",
    (value: string) => getAbsolutePathFromOption(value),
  )
  .option("--dry-run", "Simulate the command without executing it")
  .action(
    async (options: { configurationFilePath: string; dryRun?: boolean }) => {
      log("Started!");
      if (options.dryRun) {
        log(
          "Alert. I am running dry! Changes will be logged only, not applied!",
        );
      }
      await updateClients(options);
      log("Ended!");
    },
  );

export default updateClientsCommand;
