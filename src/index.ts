import BaseClient from "./client/BaseClient.js";
import UploadClient from "./client/clients/upload-api/index.js";
import type { BuildingBlockSDKParams } from "./types/index.js";

const buildClient = (params: BuildingBlockSDKParams) => {
  console.log("builder");

  for (const [service, config] of Object.entries(params.services)) {
    console.log({ service }, { config });
  }
  return null;
  //   return {
  //     upload: new UploadClient(),
  //   };
};

const BuildingBlockSDK = buildClient({
  services: {
    UPLOAD: {
      baseUrl: "http://localhost:8008",
      m2m: {
        getOrganizationTokenParams: {
          applicationId: "upl1wqp66oisjwcjyder9",
          applicationSecret: "uploader_local_secret",
          logtoOidcEndpoint: "http://localhost:3301/oidc",
          organizationId: "ogcio",
          scopes: ["upload:file:*"],
        },
      },
    },
  },
});

// this is the m2m example
// const sdk = new UploadClient({
//   baseUrl: "http://localhost:8008",
//   m2m: {
//     getOrganizationTokenParams: {
//       applicationId: "upl1wqp66oisjwcjyder9",
//       applicationSecret: "uploader_local_secret",
//       logtoOidcEndpoint: "http://localhost:3301/oidc",
//       organizationId: "ogcio",
//       scopes: ["upload:file:*"],
//     },
//   },
// });

// this the external token retrieval example
// const sdk = new UploadClient({
//   baseUrl: "http://localhost:8008",
//   getTokenFn: ((thevar: string) => () => {
//     return thevar;
//   })("thisVal"),
// });

// (async () => {
//   await sdk.authenticate();
//   const data = await sdk.getFilesMetadata();
//   console.log({ data });
// })();
