import type {
  GetAccessTokenParams,
  GetOrganizationTokenParams,
  TokenResponseBody,
} from "../../types/index.js";

export const fetchToken = async (params: {
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

export const getAccessToken = async (params: GetAccessTokenParams) => {
  const tokenResponse = await fetchToken({
    ...params,
    specificBodyFields: { resource: params.resource },
  });
  return tokenResponse.access_token;
};

export const getOrganizationToken = async (
  params: GetOrganizationTokenParams,
) => {
  const { UserScope } = await importUserScopes();

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
  const { UserScope } = await import("@logto/node");
  return { UserScope };
};
