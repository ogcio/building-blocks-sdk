import fs from "node:fs";
import { resolve } from "node:path";
import { Command } from "commander";
import openapiTS, { astToString } from "openapi-typescript";
import { parse } from "yaml";
import {
  CLIENTS_ROOT_FOLDER_PATH,
  OPEN_API_DEFINITION_FILE_NAME,
  getAbsolutePathFromOption,
  getOpenApiDefinitionFileContent,
} from "./cli-utils.js";
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

async function getLatestDefinitionFile({
  inputBuildingBlock,
}: {
  inputBuildingBlock: ConfigurationBuildingBlock;
}): Promise<unknown> {
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

  return openApiParsed;
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
    "schema.ts",
  );
  const oldPath = getAbsolutePathFromOption(
    buildingBlockFolder,
    "old-schema.ts",
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

async function isBuildingBlockOutdated({
  inputBuildingBlock,
}: {
  inputBuildingBlock: ConfigurationBuildingBlock;
}): Promise<boolean> {
  const storedDefinition = null;
  log(`${inputBuildingBlock.name} - Processing`);
  try {
    const latestDefinition = await getLatestDefinitionFile({
      inputBuildingBlock,
    });

    const serviceFolderPath = getAbsolutePathFromOption(
      CLIENTS_ROOT_FOLDER_PATH,
      inputBuildingBlock.name,
    );
    const definitionFilePath = getAbsolutePathFromOption(
      serviceFolderPath,
      OPEN_API_DEFINITION_FILE_NAME,
    );

    if (
      !fs.existsSync(serviceFolderPath) ||
      !fs.existsSync(definitionFilePath)
    ) {
      return true;
    }
  } catch (e) {
    log(`${inputBuildingBlock.name} - Error While Processing`);
    throw e;
  }
  log(`${inputBuildingBlock.name} - Processed`);
}

function log(message: string, ...params: unknown[]): void {
  if (params.length === 0) {
    console.log(`Check Clients: ${message}`);
    return;
  }
  console.log(`Check Clients: ${message}`, params);
}
async function checkClients({
  configurationFilePath,
}: { configurationFilePath: string }): Promise<void> {
  const configurationFile = await readConfigurationFile(configurationFilePath);
  log("Configuration file read");

  const promises: Promise<boolean>[] = [];
  for (const inputBuilding of Object.values(configurationFile.buildingBlocks)) {
    promises.push(
      isBuildingBlockOutdated({ inputBuildingBlock: inputBuilding }),
    );
  }

  await Promise.all(promises);
}
const checkClientsCommand = new Command("clients:check");
checkClientsCommand
  .description(
    "Parse a configuration file to check if the clients need to be updated",
  )
  .requiredOption(
    "-c, --configuration-file-path <configuration-path>",
    "Path of the configuration file to parse",
    (value: string) => getAbsolutePathFromOption(value),
  )
  .action(async (options: { configurationFilePath: string }) => {
    log("Started!");
    await checkClients(options);
    log("Ended!");
  });

export default checkClientsCommand;
