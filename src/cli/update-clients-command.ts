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

const CLIENTS_ROOT_FOLDER_PATH = "src/clients";

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
}: { inputBuildingBlock: ConfigurationBuildingBlock }): Promise<{
  filePath: string;
  fileContent: string;
  buildingBlockFolder: string;
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
  // TODO Add the following logic: backup the old file if exists, so to restore in case of error
  fs.writeFileSync(storedDefinitionFilePath, stringifiedOpenApi);

  return {
    fileContent: stringifiedOpenApi,
    filePath: storedDefinitionFilePath,
    buildingBlockFolder: serviceFolderPath,
  };
}

async function storeSchema({
  openApiDefinitionContent,
  buildingBlockFolder,
}: { openApiDefinitionContent: string; buildingBlockFolder: string }): Promise<{
  schemaFilePath: string;
}> {
  const parser = await openapiTS(openApiDefinitionContent);
  const parsedSchema = astToString(parser);
  const schemaFilePath = getAbsolutePathFromOption(
    buildingBlockFolder,
    "schema.d.ts",
  );
  // TODO Add the following logic: backup the old file if exists, so to restore in case of error
  fs.writeFileSync(schemaFilePath, parsedSchema);

  return { schemaFilePath };
}

async function processBuildingBlock({
  inputBuildingBlock,
}: { inputBuildingBlock: ConfigurationBuildingBlock }): Promise<void> {
  const storedDefinition = await storeOpenApiDefinitionFile({
    inputBuildingBlock,
  });

  await storeSchema({
    openApiDefinitionContent: storedDefinition.fileContent,
    buildingBlockFolder: storedDefinition.buildingBlockFolder,
  });
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
