export enum RESOURCES {
  MESSAGING = "MESSAGING",
  PAYMENTS = "PAYMENTS",
  PROFILE = "PROFILE",
  SCHEDULER = "SCHEDULER",
  UPLOAD = "UPLOAD",
}

interface GetTokenBaseParams {
  logtoOidcEndpoint: string;
  applicationId: string;
  applicationSecret: string;
  scopes: string[];
}

export type ApiClientParams = {
  baseUrl: string;
  m2m?: {
    getOrganizationTokenParams?: GetOrganizationTokenParams;
    getAccessTokenParams?: GetAccessTokenParams;
  };
};

export type BuildingBlockSDKParams = {
  services: {
    [key in RESOURCES]?: ApiClientParams;
  };
  //   getTokenFn?: (serviceName: string) => string | Promise<string>;
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
