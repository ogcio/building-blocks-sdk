import { resolve } from "node:path";

function getAbsolutePath(...relativeInputPath: string[]): string {
  return resolve(process.cwd(), ...relativeInputPath);
}

export default getAbsolutePath;
