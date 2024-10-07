#!/usr/bin/env node
import { Command, program } from "commander";
import updateClientsCommand from "./updateClientsCommand.js";

program
  .name("building-blocks-cli")
  .description("CLI with tools for managing the building blocks SDK")
  .version("0.0.1")
  .addCommand(updateClientsCommand);

program.parse(process.argv);
