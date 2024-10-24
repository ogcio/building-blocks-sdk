import { getOpenApiDefinitionFileContent } from "./cli-utils.js";

const assert = require("assert");

global.fetch = vi
  .fn()
  .mockResolvedValue(createFetchResponse("https://example.com"));

function createFetchResponse(data: string) {
  return {
    json: () => new Promise((resolve) => resolve(data)),
    text: () => new Promise((resolve) => resolve(data)),
  };
}

test("cli-utils module", async () => {
  const url = "https://example.com";
  const text = await getOpenApiDefinitionFileContent(url);
  assert.strictEqual(text, url);
});
