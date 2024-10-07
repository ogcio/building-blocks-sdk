import BaseClient from "./BaseClient.js";
import UploadClient from "./clients/upload/index.js";

// this is the m2m example
const sdk = new UploadClient({
  baseUrl: "http://localhost:8008",
  m2m: {
    getOrganizationTokenParams: {
      applicationId: "applicationId",
      applicationSecret: "applicationSecret",
      logtoOidcEndpoint: "http://localhost:3301/oidc",
      organizationId: "organizationId",
      scopes: ["upload:file:*"],
    },
  },
});

// this the external token retrieval example
// const sdk = new UploadClient({
//   baseUrl: "http://localhost:8008",
//   getTokenFn: ((thevar: string) => () => {
//     return thevar;
//   })("thisVal"),
// });

(async () => {
  await sdk.authenticate();
  const data = await sdk.getFilesMetadata();
  console.log({ data });
})();
