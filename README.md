# Building Blocks SDK - README

## Overview

The Building Blocks SDK is the `TypeScript` client for integrating with the various building blocks within the OGCIO ecosystem. It helps developers interact different modules in a streamlined way, providing a unified API for seamless integration.

## Please note

If you are using the package into a project using `webpack` for build and you are getting the an error similar to the following one during the build, please read [this](#next-build-error-resolution).

```
Module build failed: UnhandledSchemeError: Reading from "node:fs/promises" is not handled by plugins (Unhandled scheme).
```

## Features

- Proxy Client: Acts as a middleware to interact with various services via the SDK.
- Modular Design: Allows integration of different components (building blocks) to extend functionality as needed.
- Enables both authenticated and non-authenticated usage

### Usage

Install the package via:

```bash
npm install @ogcio/building-blocks-sdk
```

To initialise the SDK, give the desired configuration to `getBuildingBlockSDK`:

```typescript
const sdk = getBuildingBlockSDK({
  services: {
    upload: {
      baseUrl: "http://localhost:8008",
    },
  },
});
```

This snippet above creates an SDK for the upload API building block. The SDK accepts a configuration for each building block API.

At the present time available building blocks are:

- payments
- messaging
- upload
- profile
- scheduler
- analytics
- feature-flags

Please note that the type of the `sdk` variable only registers the building blocks that are present in the configuration. This is because the SDK does not create an instance for all available building blocks, even the ones not requested in the configuration.

### Authentication

Access to building-blocks api is granted through access token in the `Authorization` header.

Users can pass the `getTokenFn` function to the SDK. The SDK client will call this function when it needs an access token. The SDK will provide the service name of the service for which it is requesting the token:

```typescript
import getBuildingBlockSDK from "@ogcio/building-blocks-sdk";

const sdk = getBuildingBlockSDK({
  services: {
    upload: {
      baseUrl: "http://localhost:8008",
    },
  },
  getTokenFn: async (serviceName: SERVICE_NAME) => {
    if (serviceName === UPLOAD) {
      return "TOKEN_FOR_UPLOAD";
    }
  },
});
```

This approach allows users of this library to plug-in their preferred authentication mechanism as long as a string is returned by the `getTokenFn`.

### M2M Authentication

In order to use the library in your server applications you can install the peer dependency `@logto/node` via:

```bash
npm i @logto/node
```

and use the `getM2MTokenFn` utility function. This function accepts the M2M configuration parameters for each of the building-blocks api and returns a `getTokenFn` compliant function that will handle Logto m2m retrieval for you:

```typescript
import getBuildingBlockSDK, { getM2MTokenFn } from "@ogcio/building-blocks-sdk";

const sdk = getBuildingBlockSDK({
  services: {
    upload: {
      baseUrl: "http://localhost:8008",
    },
  },
  getTokenFn: await getM2MTokenFn({
    services: {
      upload: {
        getOrganizationTokenParams: {
          applicationId: "APPLICATION_ID",
          applicationSecret: "APPLICATION_SECRET",
          logtoOidcEndpoint: "http://localhost:3301/oidc",
          organizationId: "ogcio",
        },
      },
    },
  }),
});
```

Using the m2m utility function like this will cause the SDK to request all the scopes available for the building-block, scopes can be overridden when passed as parameter:

```typescript
import getBuildingBlockSDK, { getM2MTokenFn } from "@ogcio/building-blocks-sdk";

const sdk = getBuildingBlockSDK({
  services: {
    upload: {
      baseUrl: "http://localhost:8008",
    },
  },
  getTokenFn: await getM2MTokenFn({
    services: {
      upload: {
        getOrganizationTokenParams: {
          applicationId: "APPLICATION_ID",
          applicationSecret: "APPLICATION_SECRET",
          logtoOidcEndpoint: "http://localhost:3301/oidc",
          organizationId: "ogcio",
          scopes: ["custom:role:1", "custom:role:2"],
        },
      },
    },
  }),
});
```

## Development

### Requirements

- [Node.js LTS](https://nodejs.org/en/download/)
- [pnpm](https://pnpm.io/installation)

This project is built with the latest Node LTS, clone this repository and install the dependencies with:

```bash
pnpm install
```

The clients schemas are auto generated using open `openapi-typescript`.

you can update the json configuration clients for each client under: `src/clients-configuration/clients-configuration.json`,
then run:

```bash
pnpm run clients:update
```

to update the schemas. At this point you are ready to modify clients files and use the newly generated schemas

### Formatting and linting

The code is formatted and linted with [biome](https://biomejs.dev/). If you use `VS Code` you can install the `biome` extension to get suggestions and auto-fix on save ( Ref: https://biomejs.dev/guides/editors/first-party-extensions/)

To check the formatting and linting errors run:

```bash
pnpm run check:formatting
pnpm run check:linting
```

To fix the formatting and linting errors run:

```bash
pnpm run fix:formatting
pnpm run fix:linting
```

### Testing

The project uses `vitest` for testing. To run the tests:

```bash
pnpm test
```

## Feature Flags

### Pre-requisites

For local development, you should have the Feature Flags service running.
Refer to the [unleash](https://github.com/ogcio/unleash) repository for instructions on how to run the service.

### Usage

To use the Feature Flags service you will need:

- `baseUrl` A valid `Feature Flags` service URL. Use `http://localhost:4242` for local development.
- `token` A valid `Feature Flags` service token. Refer to [Client Tokens](https://docs.getunleash.io/reference/api-tokens-and-client-keys#client-tokens)
  for instructions on how to generate a token.

Initialize the SDK with the `featureFlags` service:

```typescript
const sdk = getBuildingBlockSDK({
  services: {
    featureFlags: {
      baseUrl,
    },
  },
  getTokenFn: () => Promise.resolve(token),
});
```

Use the `featureFlags` service to check if a feature is enabled (without any context):

```typescript
const isEnabled = await sdk.featureFlags.isFlagEnabled("feature-name");
```

Use the `featureFlags` service to check if a feature is enabled with context:

```typescript
const isEnabled = await sdk.featureFlags.isFlagEnabled("feature-name", {
  userId: "userId",
  sessionId: "sessionId",
});
```

_Note_: The `isFlagEnabled` is asynchronous because if the client is not connected yet, it will wait for the connection to be established before checking the flag. Once the client is connected, the flag will be checked synchronously. Only the first call made with the SDK will initiate a connection, all subsequent calls will use the connection already obtained.

### Next build error resolution

When `next build` is run, it performs a static analysis of the code and tries to retrieve the contents of all dependencies, including those imported dynamically.

IF any peer dependencies defined in the package.json (for example `unleash-client`) are not installed the build will fail.

To prevent this you can add this webpack configuration to your next configuration, to mark missing peer dependencies as an external package so they won't be included in the bundle.

```
// Example for unleash-client
...
webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push('unleash-client');
    }
    return config;
  },
...
```

You can safely remove any external dependency from the weback config once it has been installed.
