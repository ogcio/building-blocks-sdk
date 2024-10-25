require("dotenv").config();
const unleash = require("unleash-server");
const config = require("./config");

unleash.start(config);
