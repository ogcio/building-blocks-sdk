import { resolve } from "node:path";

const __dirname = import.meta.dirname;

function getAbsolutePath(...relativeInputPath: string[]): string {
  return resolve(__dirname, "..", "..", ...relativeInputPath);
}

export default getAbsolutePath;
