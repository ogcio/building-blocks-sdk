import FeatureFlags, {
  type FeatureFlagsExtraParams,
} from "./client/clients/featureFlags/index.js";
import Messaging from "./client/clients/messaging/index.js";
import Payments from "./client/clients/payments/index.js";
import Profile from "./client/clients/profile/index.js";
import Scheduler from "./client/clients/scheduler/index.js";
import Upload from "./client/clients/upload/index.js";

export type { BuildingBlocksSDK } from "./types/index.js";
export { default as getM2MTokenFn } from "./client/auth/index.js";

import type {
  BuildingBlockSDKParams,
  BuildingBlocksSDK,
} from "./types/index.js";

const getBuildingBlockSDK = (
  params: BuildingBlockSDKParams,
): BuildingBlocksSDK => {
  const { services, getTokenFn, ...restOfParams } = params;
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
      ...services.profile,
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
    featureFlags: new FeatureFlags({
      ...services.featureFlags,
      getTokenFn,
      ...(restOfParams as FeatureFlagsExtraParams),
    }),
  };
};

export default getBuildingBlockSDK;
