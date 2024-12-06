import type { Analytics, AnalyticsOptions } from "@ogcio/analytics-sdk";

import type { FeatureFlags } from "../client/clients/featureFlags/index.js";
import type { Journey } from "../client/clients/journey/index.js";
import type { Messaging } from "../client/clients/messaging/index.js";
import type { Payments } from "../client/clients/payments/index.js";
import type { Profile } from "../client/clients/profile/index.js";
import type { Scheduler } from "../client/clients/scheduler/index.js";
import type { Upload } from "../client/clients/upload/index.js";

const ANALYTICS = "analytics" as const;
const MESSAGING = "messaging" as const;
const PAYMENTS = "payments" as const;
const PROFILE = "profile" as const;
const SCHEDULER = "scheduler" as const;
const UPLOAD = "upload" as const;
const FEATURE_FLAGS = "featureFlags" as const;
const JOURNEY = "journey" as const;

type SERVICE_NAME =
  | typeof ANALYTICS
  | typeof MESSAGING
  | typeof PAYMENTS
  | typeof PROFILE
  | typeof SCHEDULER
  | typeof UPLOAD
  | typeof FEATURE_FLAGS
  | typeof JOURNEY;

interface AnalyticsConfig extends AnalyticsOptions {}

interface ServiceBaseConfig {
  baseUrl: string;
}

interface MessagingConfig extends ServiceBaseConfig {}
interface PaymentsConfig extends ServiceBaseConfig {}
interface ProfileConfig extends ServiceBaseConfig {}
interface SchedulerConfig extends ServiceBaseConfig {}
interface UploadConfig extends ServiceBaseConfig {}
interface FeatureFlagsConfig extends ServiceBaseConfig {}
interface JourneyConfig extends ServiceBaseConfig {}

interface Services {
  analytics?: AnalyticsConfig;
  messaging?: MessagingConfig;
  payments?: PaymentsConfig;
  profile?: ProfileConfig;
  scheduler?: SchedulerConfig;
  upload?: UploadConfig;
  featureFlags?: FeatureFlagsConfig;
  journey?: JourneyConfig;
}

type TokenFunction = (serviceName: SERVICE_NAME) => Promise<string>;

interface TokenResponseBody {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
}

interface GetTokenBaseParams {
  logtoOidcEndpoint: string;
  applicationId: string;
  applicationSecret: string;
  scopes?: string[];
}

interface GetAccessTokenParams extends GetTokenBaseParams {
  resource: string;
}

interface GetOrganizationTokenParams extends GetTokenBaseParams {
  organizationId: string;
}

type M2MParams = {
  getOrganizationTokenParams?: GetOrganizationTokenParams;
  getAccessTokenParams?: GetAccessTokenParams;
};

type M2MTokenFnConfig = {
  services: {
    [key in SERVICE_NAME]?: M2MParams;
  };
};

interface LogFn {
  <T extends object>(obj: T, msg?: string, ...args: unknown[]): void;
  (obj: unknown, msg?: string, ...args: unknown[]): void;
  (msg: string, ...args: unknown[]): void;
}

export type Logger = {
  fatal: LogFn;
  error: LogFn;
  warn: LogFn;
  info: LogFn;
  debug: LogFn;
  trace: LogFn;
  silent: LogFn;
};

interface BuildingBlockSDKParams {
  services: Services;
  getTokenFn: TokenFunction;
  logger?: Logger;
}

interface BuildingBlocksSDK {
  analytics: Analytics;
  messaging: Messaging;
  payments: Payments;
  profile: Profile;
  scheduler: Scheduler;
  upload: Upload;
  featureFlags: FeatureFlags;
  journey: Journey;
}

export {
  ANALYTICS,
  MESSAGING,
  PAYMENTS,
  PROFILE,
  SCHEDULER,
  UPLOAD,
  FEATURE_FLAGS,
  JOURNEY,
};

export type {
  BuildingBlockSDKParams,
  BuildingBlocksSDK,
  Analytics,
  AnalyticsConfig,
  Messaging,
  MessagingConfig,
  Payments,
  PaymentsConfig,
  Profile,
  ProfileConfig,
  Scheduler,
  SchedulerConfig,
  Upload,
  UploadConfig,
  FeatureFlags,
  FeatureFlagsConfig,
  Journey,
  JourneyConfig,
  Services,
  TokenFunction,
  SERVICE_NAME,
  TokenResponseBody,
  GetTokenBaseParams,
  GetAccessTokenParams,
  GetOrganizationTokenParams,
  M2MParams,
  M2MTokenFnConfig,
};
