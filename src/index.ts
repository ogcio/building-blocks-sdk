import { Analytics } from "@ogcio/analytics-sdk";
import { FeatureFlags } from "./client/clients/featureFlags/index.js";

import { Journey } from "./client/clients/journey/index.js";
import { Messaging } from "./client/clients/messaging/index.js";
import { Payments } from "./client/clients/payments/index.js";
import { Profile } from "./client/clients/profile/index.js";
import { Scheduler } from "./client/clients/scheduler/index.js";
import { Upload } from "./client/clients/upload/index.js";
export { getM2MTokenFn } from "./client/auth/index.js";

import type {
  BuildingBlockSDKParams,
  BuildingBlocksSDK,
  Logger,
  Services,
  TokenFunction,
} from "./types/index.js";

export type { TokenFunction, BuildingBlocksSDK } from "./types/index.js";

// Create type that only includes services that are defined in params
export type DefinedServices<T extends BuildingBlockSDKParams> = {
  [K in keyof BuildingBlocksSDK as K extends keyof T["services"]
    ? T["services"][K] extends undefined
      ? never
      : K
    : never]: BuildingBlocksSDK[K];
};

const createService = <K extends keyof Services>(
  ServiceClass: new (
    config: Services[K] & {
      getTokenFn: TokenFunction;
      logger?: Logger;
      language?: string;
    },
  ) => BuildingBlocksSDK[K],
  config: Services[K] | undefined,
  getTokenFn: TokenFunction,
  logger?: Logger,
  language?: string,
): BuildingBlocksSDK[K] | undefined => {
  if (!config) return undefined;
  return new ServiceClass({ ...config, getTokenFn, logger, language });
};

export const getBuildingBlockSDK = <T extends BuildingBlockSDKParams>(
  params: T,
): DefinedServices<T> => {
  const { services, getTokenFn, logger, language } = params;

  const sdk = {
    analytics: createService(
      Analytics,
      services.analytics,
      getTokenFn,
      logger,
      language,
    ),
    messaging: createService(
      Messaging,
      services.messaging,
      getTokenFn,
      logger,
      language,
    ),
    payments: createService(
      Payments,
      services.payments,
      getTokenFn,
      logger,
      language,
    ),
    profile: createService(
      Profile,
      services.profile,
      getTokenFn,
      logger,
      language,
    ),
    scheduler: createService(
      Scheduler,
      services.scheduler,
      getTokenFn,
      logger,
      language,
    ),
    upload: createService(
      Upload,
      services.upload,
      getTokenFn,
      logger,
      language,
    ),
    featureFlags: createService(
      FeatureFlags,
      services.featureFlags,
      getTokenFn,
      logger,
      language,
    ),
    journey: createService(
      Journey,
      services.journey,
      getTokenFn,
      logger,
      language,
    ),
  };

  // Remove undefined services
  return Object.fromEntries(
    Object.entries(sdk).filter(([_, value]) => value !== undefined),
  ) as DefinedServices<T>;
};
