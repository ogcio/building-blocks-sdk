import { type Static, Type } from "@sinclair/typebox";
import { Value } from "@sinclair/typebox/value";

export enum OpenAPIFileFormats {
  JSON = "json",
  YAML = "yaml",
}

const ConfigurationBuildingBlockSchema = Type.Object({
  name: Type.String(),
  openApiDefinitionUrl: Type.String(),
  openApiDefinitionFormat: Type.Enum(OpenAPIFileFormats),
  citizenPermissions: Type.Array(Type.String(), { default: [] }),
  publicServantPermissions: Type.Array(Type.String(), { default: [] }),
});

export type ConfigurationBuildingBlock = Static<
  typeof ConfigurationBuildingBlockSchema
>;

const InputFileSchema = Type.Object({
  buildingBlocks: Type.Array(ConfigurationBuildingBlockSchema),
});

type ConfigurationFile = {
  buildingBlocks: { [x: string]: ConfigurationBuildingBlock };
};

export async function readConfigurationFile(
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

  const parsedFile = Value.Parse(InputFileSchema, rawConfigurationFile);

  // Why do not directly create an object where the service name
  // is the key in the configuration file instead of an array?
  // To avoid having unexpected behaviours on naming
  // e.g. Adding a "messaging-api" entry could return
  // "messagingApi" when parsing
  const outputFile: ConfigurationFile = { buildingBlocks: {} };
  for (const parsedBlock of parsedFile.buildingBlocks) {
    outputFile.buildingBlocks[parsedBlock.name] = parsedBlock;
  }

  return outputFile;
}
