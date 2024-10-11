import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function getAbsolutePath(...relativeInputPath: string[]): string {
  return resolve(__dirname, "..", "..", ...relativeInputPath);
}

export default getAbsolutePath;
