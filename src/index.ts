import { Analytics } from "@ogcio/analytics-sdk";
import { FeatureFlags } from "./client/clients/featureFlags/index.js";

import { Messaging } from "./client/clients/messaging/index.js";
import { Payments } from "./client/clients/payments/index.js";
import { Profile } from "./client/clients/profile/index.js";
import { Scheduler } from "./client/clients/scheduler/index.js";
import { Upload } from "./client/clients/upload/index.js";
export { getM2MTokenFn } from "./client/auth/index.js";

import type {
  AnalyticsConfig,
  BuildingBlockSDKParams,
  BuildingBlocksSDK,
  FeatureFlagsConfig,
  MessagingConfig,
  PaymentsConfig,
  ProfileConfig,
  SchedulerConfig,
  Services,
  TokenFunction,
  UploadConfig,
} from "./types/index.js";

// Create type that only includes services that are defined in params
type DefinedServices<T extends BuildingBlockSDKParams> = {
  [K in keyof BuildingBlocksSDK as K extends keyof T["services"]
    ? T["services"][K] extends undefined
      ? never
      : K
    : never]: BuildingBlocksSDK[K];
};

const createService = <K extends keyof Services>(
  ServiceClass: new (
    config: (
      | AnalyticsConfig
      | MessagingConfig
      | PaymentsConfig
      | ProfileConfig
      | SchedulerConfig
      | UploadConfig
      | FeatureFlagsConfig
    ) & { getTokenFn: TokenFunction },
  ) => BuildingBlocksSDK[K],
  config: Services[K] | undefined,
  getTokenFn: TokenFunction,
): BuildingBlocksSDK[K] | undefined => {
  if (!config) return undefined;
  return new ServiceClass({ ...config, getTokenFn });
};

export const getBuildingBlockSDK = <T extends BuildingBlockSDKParams>(
  params: T,
): DefinedServices<T> => {
  const { services, getTokenFn } = params;

  const sdk = {
    analytics: createService(Analytics, services.analytics, getTokenFn),
    messaging: createService(Messaging, services.messaging, getTokenFn),
    payments: createService(Payments, services.payments, getTokenFn),
    profile: createService(Profile, services.profile, getTokenFn),
    scheduler: createService(Scheduler, services.scheduler, getTokenFn),
    upload: createService(Upload, services.upload, getTokenFn),
    featureFlags: createService(
      FeatureFlags,
      services.featureFlags,
      getTokenFn,
    ),
  };

  // Remove undefined services
  return Object.fromEntries(
    Object.entries(sdk).filter(([_, value]) => value !== undefined),
  ) as DefinedServices<T>;
};
