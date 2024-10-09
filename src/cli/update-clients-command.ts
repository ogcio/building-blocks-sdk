import fs from "node:fs";
import { resolve } from "node:path";
import { Command } from "commander";
import openapiTS, { astToString, error } from "openapi-typescript";
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
  openApiDefinitionFileBackup,
}: {
  inputBuildingBlock: ConfigurationBuildingBlock;
  openApiDefinitionFileBackup: FileBackup;
}): Promise<{
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
  if (fs.existsSync(storedDefinitionFilePath)) {
    openApiDefinitionFileBackup.oldPath = getAbsolutePathFromOption(
      serviceFolderPath,
      "old-open-api-definition.json",
    );
    fs.copyFileSync(
      storedDefinitionFilePath,
      openApiDefinitionFileBackup.oldPath,
    );
  }
  fs.writeFileSync(storedDefinitionFilePath, stringifiedOpenApi);
  openApiDefinitionFileBackup.newPath = storedDefinitionFilePath;

  return {
    fileContent: stringifiedOpenApi,
    filePath: storedDefinitionFilePath,
    buildingBlockFolder: serviceFolderPath,
  };
}

async function storeSchema({
  openApiDefinitionContent,
  buildingBlockFolder,
  schemaFileBackup,
}: {
  openApiDefinitionContent: string;
  buildingBlockFolder: string;
  schemaFileBackup: FileBackup;
}): Promise<{
  schemaFilePath: string;
}> {
  const parser = await openapiTS(openApiDefinitionContent);
  const parsedSchema = astToString(parser);
  const schemaFilePath = getAbsolutePathFromOption(
    buildingBlockFolder,
    "schema.ts",
  );
  if (fs.existsSync(schemaFilePath)) {
    schemaFileBackup.oldPath = getAbsolutePathFromOption(
      buildingBlockFolder,
      "old-schema.ts",
    );
    fs.copyFileSync(schemaFilePath, schemaFileBackup.oldPath);
  }
  fs.writeFileSync(schemaFilePath, parsedSchema);
  schemaFileBackup.newPath = schemaFilePath;

  return { schemaFilePath };
}

async function processBuildingBlock({
  inputBuildingBlock,
}: { inputBuildingBlock: ConfigurationBuildingBlock }): Promise<void> {
  const openApiDefinitionFileBackup: FileBackup = {
    oldPath: null,
    newPath: null,
  };
  const schemaFileBackup: FileBackup = {
    oldPath: null,
    newPath: null,
  };
  try {
    const storedDefinition = await storeOpenApiDefinitionFile({
      inputBuildingBlock,
      openApiDefinitionFileBackup,
    });
    await storeSchema({
      openApiDefinitionContent: storedDefinition.fileContent,
      buildingBlockFolder: storedDefinition.buildingBlockFolder,
      schemaFileBackup,
    });

    deleteOldFiles(openApiDefinitionFileBackup, schemaFileBackup);
  } catch (e) {
    restoreOldFiles(openApiDefinitionFileBackup, schemaFileBackup);

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
      if (backedUp.newPath) {
        fs.unlinkSync(backedUp.newPath);
      }
      if (backedUp.oldPath) {
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
