import Messaging from "./client/clients/messaging-api/index.js";
import Payments from "./client/clients/payments-api/index.js";
import Profile from "./client/clients/profile-api/index.js";
import Scheduler from "./client/clients/scheduler-api/index.js";
import Upload from "./client/clients/upload-api/index.js";

import type {
  BuildingBlockSDKParams,
  BuildingBlocksSDK,
} from "./types/index.js";

const getBuildingBlockSDK = (
  params: BuildingBlockSDKParams,
): BuildingBlocksSDK => {
  const { services, getTokenFn } = params;
  return {
    messaging: new Messaging({
      ...services.messaging,
      getTokenFn,
    }),
    payments: new Payments({
      ...services.payments,
      getTokenFn,
    }),
    profile: new Profile({
      ...services.payments,
      getTokenFn,
    }),
    scheduler: new Scheduler({
      ...services.scheduler,
      getTokenFn,
    }),
    upload: new Upload({
      ...services.upload,
      getTokenFn,
    }),
  };
};

export default getBuildingBlockSDK;
