import { readConfigurationFile } from "../../clients-configurations/read-configuration-file.js";
import type {
  GetAccessTokenParams,
  GetOrganizationTokenParams,
  M2MTokenFnConfig,
  SERVICE_NAME,
  TokenFunction,
  TokenResponseBody,
} from "../../types/index.js";
import getAbsolutePath from "../../utils/get-absolute-path.js";

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

const getAccessToken = async (
  params: GetAccessTokenParams,
  scopes: string[],
) => {
  const scopesToUse = params.scopes || scopes;

  const tokenResponse = await fetchToken({
    ...params,
    scopes: scopesToUse,
    specificBodyFields: { resource: params.resource },
  });
  return tokenResponse.access_token;
};

const getOrganizationToken = async (
  params: GetOrganizationTokenParams,
  scopes: string[],
) => {
  const logtoUserScopes = await importUserScopes();

  const { UserScope } = logtoUserScopes;

  const scopesToUse = params.scopes || scopes;

  const tokenResponse = await fetchToken({
    ...params,
    scopes: [
      ...scopesToUse,
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

const getM2MTokenFn = async (
  m2mTokenConfig: M2MTokenFnConfig,
): Promise<TokenFunction> => {
  const { services } = m2mTokenConfig;

  const configFile = await readConfigurationFile(
    getAbsolutePath("clients-configurations", "clients-configuration.json"),
  );

  const tokenFn = (serviceName: SERVICE_NAME) => {
    const serviceParams = services[serviceName];

    const scopes = configFile.buildingBlocks[serviceName];

    if (!serviceParams) {
      throw new Error(`Missing m2m config for ${serviceName}`);
    }

    const { getAccessTokenParams, getOrganizationTokenParams } = serviceParams;
    if (getAccessTokenParams) {
      return getAccessToken(getAccessTokenParams, scopes.citizenPermissions);
    }
    if (getOrganizationTokenParams) {
      return getOrganizationToken(
        getOrganizationTokenParams,
        scopes.publicServantPermissions,
      );
    }

    throw new Error(`wrong m2m config for ${serviceName}`);
  };
  return tokenFn;
};

export default getM2MTokenFn;
