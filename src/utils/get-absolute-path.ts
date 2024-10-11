import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function getAbsolutePath(...relativeInputPath: string[]): string {
  return resolve(__dirname, "..", "..", ...relativeInputPath);
}

export default getAbsolutePath;
