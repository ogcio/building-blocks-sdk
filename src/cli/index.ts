#!/usr/bin/env node
import { program } from "commander";
import checkClientsCommand from "./check-clients-command.js";
import updateClientsCommand from "./update-clients-command.js";

program
  .name("building-blocks-cli")
  .description("CLI with tools for managing the building blocks SDK")
  .version("0.0.1")
  .addCommand(updateClientsCommand)
  .addCommand(checkClientsCommand);

program.parseAsync(process.argv);
