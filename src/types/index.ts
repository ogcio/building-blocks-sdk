import type Messaging from "../client/clients/messaging/index.js";
import type Payments from "../client/clients/payments/index.js";
import type Profile from "../client/clients/profile/index.js";
import type Scheduler from "../client/clients/scheduler/index.js";
import type Upload from "../client/clients/upload/index.js";

export enum RESOURCES {
  MESSAGING = "messaging",
  PAYMENTS = "payments",
  PROFILE = "profile",
  SCHEDULER = "scheduler",
  UPLOAD = "upload",
}

export type TokenFunction = (
  serviceName: RESOURCES,
) => Promise<string> | string;

export type M2MParams = {
  getOrganizationTokenParams?: GetOrganizationTokenParams;
  getAccessTokenParams?: GetAccessTokenParams;
};

export type M2MTokenFnConfig = {
  services: {
    [key in RESOURCES]?: M2MParams;
  };
};

export type SDKClientParams = {
  baseUrl?: string;
};

export type ApiClientParams = SDKClientParams & {
  getTokenFn: TokenFunction;
};

export type BuildingBlocksSDK = {
  [RESOURCES.MESSAGING]: Messaging;
  [RESOURCES.PAYMENTS]: Payments;
  [RESOURCES.PROFILE]: Profile;
  [RESOURCES.SCHEDULER]: Scheduler;
  [RESOURCES.UPLOAD]: Upload;
};

export type BuildingBlockSDKParams = {
  services: {
    [key in RESOURCES]?: SDKClientParams;
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
  scopes: string[];
}

export interface GetAccessTokenParams extends GetTokenBaseParams {
  resource: string;
}

export interface GetOrganizationTokenParams extends GetTokenBaseParams {
  organizationId: string;
}
