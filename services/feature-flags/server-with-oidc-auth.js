require("dotenv").config();
const unleash = require("unleash-server");
const oidcAuthHook = require("./oidc-auth-hook");
const config = require("./config");

unleash.start({
  ...config,
  authentication: {
    type: "custom",
    customAuthHandler: oidcAuthHook,
  },
});
