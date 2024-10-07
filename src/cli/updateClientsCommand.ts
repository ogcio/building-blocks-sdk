import { resolve } from "node:path";
import { Command } from "commander";

import { type Static, Type } from "@sinclair/typebox";
import { Value } from "@sinclair/typebox/value";
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
// Define a schema for a User object

const getAbsolutePathFromOption = (relativeInputPath: string): string =>
  resolve(process.cwd(), relativeInputPath);

async function updateClients({
  configurationFilePath,
}: { configurationFilePath: string }): Promise<void> {
  const { default: rawConfigurationFile } = await import(
    configurationFilePath,
    {
      assert: {
        type: "json",
      },
    }
  );

  const parsedConfiguration = Value.Parse(
    ConfigurationFileSchema,
    rawConfigurationFile,
  );
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
