import fs from "node:fs";

export const CLIENTS_ROOT_FOLDER_PATH = "src/client/clients";
export const OPEN_API_DEFINITION_FILE_NAME = "open-api-definition.json";
export const OLD_OPEN_API_DEFINITION_FILE_NAME = "old-open-api-definition.json";
export const SCHEMA_FILE_NAME = "schema.ts";
export const OLD_SCHEMA_FILE_NAME = "old-schema.ts";

export async function getOpenApiDefinitionFileContent(
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
    `The configuration-file-path is not a valid file path nor url, or it is not reachable: ${filePath}`,
  );
}
