import type {
  GetAccessTokenParams,
  GetOrganizationTokenParams,
  M2MTokenFnConfig,
  RESOURCES,
  TokenFunction,
  TokenResponseBody,
} from "../../types/index.js";

const fetchToken = async (params: {
  logtoOidcEndpoint: string;
  applicationId: string;
  applicationSecret: string;
  scopes: string[];
  specificBodyFields: { [x: string]: string };
}) => {
  const body = {
    ...params.specificBodyFields,
    scope: params.scopes.join(" "),
    grant_type: "client_credentials",
  };
  const logtoOidcEndpoint = params.logtoOidcEndpoint.endsWith("/")
    ? params.logtoOidcEndpoint
    : `${params.logtoOidcEndpoint}/`;
  const response = await fetch(`${logtoOidcEndpoint}token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(
        `${params.applicationId}:${params.applicationSecret}`,
      ).toString("base64")}`,
    },
    body: new URLSearchParams(body).toString(),
  });

  if (response.status !== 200) {
    throw new Error("Unauthorized");
  }

  return response.json() as Promise<TokenResponseBody>;
};

const getAccessToken = async (params: GetAccessTokenParams) => {
  const tokenResponse = await fetchToken({
    ...params,
    specificBodyFields: { resource: params.resource },
  });
  return tokenResponse.access_token;
};

const getOrganizationToken = async (params: GetOrganizationTokenParams) => {
  const logtoUserScopes = await importUserScopes();

  const { UserScope } = logtoUserScopes;

  const tokenResponse = await fetchToken({
    ...params,
    scopes: [
      ...params.scopes,
      UserScope.OrganizationRoles,
      UserScope.Organizations,
    ],
    specificBodyFields: {
      organization_id: params.organizationId,
    },
  });
  return tokenResponse.access_token;
};

const importUserScopes = async () => {
  try {
    const { UserScope } = await import("@logto/node");

    return { UserScope };
  } catch {
    throw new Error("@logto/node package is not installed!");
  }
};

const getM2MTokenFn = (m2mTokenConfig: M2MTokenFnConfig): TokenFunction => {
  const { services } = m2mTokenConfig;

  const tokenFn = async (serviceName: RESOURCES) => {
    const serviceParams = services[serviceName];

    if (serviceParams) {
      const { getAccessTokenParams, getOrganizationTokenParams } =
        serviceParams;
      if (getAccessTokenParams) {
        return await getAccessToken(getAccessTokenParams);
      }
      if (getOrganizationTokenParams) {
        return await getOrganizationToken(getOrganizationTokenParams);
      }
    }

    throw new Error(`Missing m2m config for ${serviceName}`);
  };
  return tokenFn;
};

export default getM2MTokenFn;
