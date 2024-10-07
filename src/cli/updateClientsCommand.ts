import { Command } from "commander";

const updateClientsCommand = new Command("clients:update");
updateClientsCommand
  .description(
    "Parse a configuration file to update the info related to the clients",
  )
  .requiredOption(
    "-c, --configuration-file <configuration-path>",
    "Path of the configuration file to parse",
  )
  .action((options: { configurationPath: string }) => {
    console.log({ options });
  });

export default updateClientsCommand;
