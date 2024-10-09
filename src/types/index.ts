import type BaseClient from "../client/BaseClient.js";
import type Messaging from "../client/clients/messaging-api/index.js";
import type Payments from "../client/clients/payments-api/index.js";
import type Profile from "../client/clients/profile-api/index.js";
import type Scheduler from "../client/clients/scheduler-api/index.js";
import type Upload from "../client/clients/upload-api/index.js";

export enum RESOURCES {
  MESSAGING = "messaging",
  PAYMENTS = "payments",
  PROFILE = "profile",
  SCHEDULER = "scheduler",
  UPLOAD = "upload",
}

interface GetTokenBaseParams {
  logtoOidcEndpoint: string;
  applicationId: string;
  applicationSecret: string;
  scopes: string[];
}

export type TokenFunction = (
  serviceName: RESOURCES,
) => Promise<string> | string;

export type SDKClientParams = {
  baseUrl?: string;
  m2m?: {
    getOrganizationTokenParams?: GetOrganizationTokenParams;
    getAccessTokenParams?: GetAccessTokenParams;
  };
};

export type ApiClientParams = SDKClientParams & {
  serviceName: RESOURCES;
  getTokenFn?: TokenFunction;
};

export type SDK = {
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

export interface GetAccessTokenParams extends GetTokenBaseParams {
  resource: string;
}

export interface GetOrganizationTokenParams extends GetTokenBaseParams {
  organizationId: string;
}
