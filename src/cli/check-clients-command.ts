import fs from "node:fs";
import { Command } from "commander";
import { stringify as stableStringify } from "safe-stable-stringify";
import { parse } from "yaml";
import {
  type ConfigurationBuildingBlock,
  OpenAPIFileFormats,
  readConfigurationFile,
} from "../clients-configurations/read-configuration-file.js";
import {
  CLIENTS_ROOT_FOLDER_PATH,
  OPEN_API_DEFINITION_FILE_NAME,
  getAbsolutePathFromOption,
  getOpenApiDefinitionFileContent,
} from "./cli-utils.js";

/**
 * This command, starting from a json configuration file,
 * downloads the open-API definition file,
 * parse it and compare it with the already existent one
 */

function stringify(input: unknown): string {
  stableStringify.configure({ deterministic: true });

  const stringified = stableStringify(input);
  if (!stringified) {
    throw new Error("Invalid item to stringify!");
  }

  return stringified;
}

async function getLatestDefinitionFileContent({
  inputBuildingBlock,
}: {
  inputBuildingBlock: ConfigurationBuildingBlock;
}): Promise<string> {
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
  return stringify(openApiParsed);
}

async function isBuildingBlockOutdated({
  inputBuildingBlock,
}: {
  inputBuildingBlock: ConfigurationBuildingBlock;
}): Promise<boolean> {
  log(`${inputBuildingBlock.name} - Processing`);
  try {
    const latestDefinition = await getLatestDefinitionFileContent({
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

    const storedFile = fs.readFileSync(definitionFilePath, {
      encoding: "utf-8",
    });

    const stringifiedStored = stringify(JSON.parse(storedFile));

    const isOutdated = stringifiedStored !== latestDefinition;
    log(
      `${inputBuildingBlock.name} - Processed. Building Block is ${isOutdated ? "OUTDATED!" : "not outdated"}`,
    );

    return isOutdated;
  } catch (e) {
    log(`${inputBuildingBlock.name} - Error While Processing`);
    throw e;
  }
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

  const bbStatuses = await Promise.all(promises);
  const outdated = bbStatuses.filter((bb) => bb === true);
  if (outdated.length) {
    throw new Error(
      `The following building blocks are outdated: ${outdated.join(", ")}`,
    );
  }

  log("All the building blocks are updated!");
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
  });

export default checkClientsCommand;
