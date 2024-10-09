import Messaging from "./client/clients/messaging/index.js";
import Payments from "./client/clients/payments/index.js";
import Profile from "./client/clients/profile/index.js";
import Scheduler from "./client/clients/scheduler/index.js";
import Upload from "./client/clients/upload/index.js";

import {
  type BuildingBlockSDKParams,
  RESOURCES,
  type SDK,
  type SDKClientParams,
  type TokenFunction,
} from "./types/index.js";

const buildClient = ({
  params,
  serviceName,
  getTokenFn,
}: {
  params?: SDKClientParams;
  serviceName: RESOURCES;
  getTokenFn?: TokenFunction;
}) => {
  switch (serviceName) {
    case RESOURCES.MESSAGING: {
      return new Messaging({
        ...params,
        serviceName: RESOURCES.MESSAGING,
        getTokenFn,
      });
    }
    case RESOURCES.PAYMENTS: {
      return new Payments({
        ...params,
        serviceName: RESOURCES.PAYMENTS,
        getTokenFn,
      });
    }
    case RESOURCES.PROFILE: {
      return new Profile({
        ...params,
        serviceName: RESOURCES.PROFILE,
        getTokenFn,
      });
    }
    case RESOURCES.SCHEDULER: {
      return new Scheduler({
        ...params,
        serviceName: RESOURCES.SCHEDULER,
        getTokenFn,
      });
    }
    case RESOURCES.UPLOAD: {
      return new Upload({
        ...params,
        serviceName: RESOURCES.UPLOAD,
        getTokenFn,
      });
    }
    default: {
      const _exaustiveCheck: never = serviceName;
      throw new Error(`Unexpected client required: ${_exaustiveCheck}`);
    }
  }
};

const buildSDK = (params: BuildingBlockSDKParams) => {
  const { services, getTokenFn } = params;

  const sdk: SDK = {
    messaging: new Messaging({
      ...services.messaging,
      serviceName: RESOURCES.MESSAGING,
      getTokenFn,
    }),
    payments: new Payments({
      ...services.payments,
      serviceName: RESOURCES.PAYMENTS,
      getTokenFn,
    }),
    profile: new Profile({
      ...services.payments,
      serviceName: RESOURCES.PAYMENTS,
      getTokenFn,
    }),
    scheduler: new Scheduler({
      ...services.scheduler,
      serviceName: RESOURCES.PROFILE,
      getTokenFn,
    }),
    upload: new Upload({
      ...services.upload,
      serviceName: RESOURCES.UPLOAD,
      getTokenFn,
    }),
  };

  return sdk;
};

const sdk = buildSDK({
  services: {
    upload: {
      baseUrl: "http://localhost:8008",
    },
  },
  getTokenFn: async (serviceName: string) => {
    console.log("authenticating", serviceName);
    return "token";
  },
});

(async () => {
  await sdk.upload.authenticate();
  const data = await sdk.upload.getFilesMetadata();
  console.log({ data });
})();
