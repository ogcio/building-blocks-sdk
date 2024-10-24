require("dotenv").config();
const unleash = require("unleash-server");

unleash.start({
  db: {
    user: "unleash",
    password: "unleash",
    host: "localhost",
    port: 5432,
    database: "db",
    ssl: false,
  },
  server: {
    enableRequestLogger: true,
    baseUriPath: "",
  },
  logLevel: "info",
});
