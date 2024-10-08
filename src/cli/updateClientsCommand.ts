import fs from "node:fs";
import { resolve } from "node:path";
import { type Static, Type } from "@sinclair/typebox";
import { Value } from "@sinclair/typebox/value";
import { Command } from "commander";
import openapiTS, { astToString } from "openapi-typescript";
import { parse } from "yaml";

enum OpenAPIFileFormats {
  JSON = "json",
  YAML = "yaml",
}

export const ClientsConfigurationSchema = Type.Object({
  name: Type.String(),
  openApiDefinitionUrl: Type.String(),
  openApiDefinitionFormat: Type.Enum(OpenAPIFileFormats),
});

export type ClientsConfiguration = Static<typeof ClientsConfigurationSchema>;

export const ConfigurationFileSchema = Type.Object({
  buildingBlocks: Type.Array(ClientsConfigurationSchema),
});
export type ConfigurationFile = Static<typeof ConfigurationFileSchema>;

const CLIENTS_ROOT_FOLDER_PATH = "src/clients";

function getAbsolutePathFromOption(...relativeInputPath: string[]): string {
  return resolve(process.cwd(), ...relativeInputPath);
}

async function readConfigurationFile(
  configurationFilePath: string,
): Promise<ConfigurationFile> {
  const { default: rawConfigurationFile } = await import(
    configurationFilePath,
    {
      assert: {
        type: "json",
      },
    }
  );

  return Value.Parse(ConfigurationFileSchema, rawConfigurationFile);
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
}: { inputBuildingBlock: ClientsConfiguration }): Promise<{
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
}: { inputBuildingBlock: ClientsConfiguration }): Promise<void> {
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
  for (const inputBuilding of configurationFile.buildingBlocks) {
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
