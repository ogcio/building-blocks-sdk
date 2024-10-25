module.exports = {
  db: {
    user: "unleash",
    password: "unleash",
    host: "localhost",
    port: Number(process.env.PG_PORT || 5432),
    database: "unleash",
    ssl: false,
  },
  server: {
    enableRequestLogger: true,
    baseUriPath: "",
  },
  logLevel: "info",
};
