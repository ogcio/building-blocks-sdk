import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export function getAbsolutePath(...relativeInputPath: string[]): string {
  return resolve(__dirname, "..", "..", ...relativeInputPath);
}
