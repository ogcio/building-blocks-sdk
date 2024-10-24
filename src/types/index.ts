import type FeatureFlags from "~/client/clients/featureFlags/index.js";
import type Messaging from "../client/clients/messaging/index.js";
import type Payments from "../client/clients/payments/index.js";
import type Profile from "../client/clients/profile/index.js";
import type Scheduler from "../client/clients/scheduler/index.js";
import type Upload from "../client/clients/upload/index.js";

export const MESSAGING = "messaging" as const;
export const PAYMENTS = "payments" as const;
export const PROFILE = "profile" as const;
export const SCHEDULER = "scheduler" as const;
export const UPLOAD = "upload" as const;
export const FEATURE_FLAGS = "featureFlags" as const;

export type SERVICE_NAME =
  | typeof MESSAGING
  | typeof PAYMENTS
  | typeof PROFILE
  | typeof SCHEDULER
  | typeof UPLOAD
  | typeof FEATURE_FLAGS;

export type TokenFunction = (
  serviceName: SERVICE_NAME,
) => Promise<string> | string;

export type M2MParams = {
  getOrganizationTokenParams?: GetOrganizationTokenParams;
  getAccessTokenParams?: GetAccessTokenParams;
};

export type M2MTokenFnConfig = {
  services: {
    [key in SERVICE_NAME]?: M2MParams;
  };
};

export type SDKClientParams = {
  baseUrl?: string;
};

export type ApiClientParams = SDKClientParams & {
  getTokenFn?: TokenFunction;
};

type ServiceClients = {
  messaging: Messaging;
  payments: Payments;
  profile: Profile;
  scheduler: Scheduler;
  upload: Upload;
  featureFlags: FeatureFlags;
};

export type BuildingBlocksSDK = {
  [key in keyof ServiceClients]: ServiceClients[key];
};

export type BuildingBlockSDKParams = {
  services: {
    [key in keyof ServiceClients]?: SDKClientParams;
  };
  getTokenFn?: TokenFunction;
};

export interface TokenResponseBody {
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

export interface GetAccessTokenParams extends GetTokenBaseParams {
  resource: string;
}

export interface GetOrganizationTokenParams extends GetTokenBaseParams {
  organizationId: string;
}
