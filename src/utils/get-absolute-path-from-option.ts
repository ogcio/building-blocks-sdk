import { resolve } from "node:path";

function getAbsolutePathFromOption(...relativeInputPath: string[]): string {
  return resolve(process.cwd(), ...relativeInputPath);
}

export default getAbsolutePathFromOption;
