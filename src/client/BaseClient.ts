import { UserScope } from "@logto/node";
import createClient from "openapi-fetch";
import type {
  ApiClientParams,
  GetAccessTokenParams,
  GetOrganizationTokenParams,
  TokenResponseBody,
} from "../types/index.js";

abstract class BaseClient {
  protected token?: string;
  private baseUrl: string;
  protected getTokenFn?: (...args: unknown[]) => string | Promise<string>;

  protected client: ReturnType<typeof createClient>;

  private readonly getOrganizationTokenParams?: GetOrganizationTokenParams;
  private readonly getAccessTokenParams?: GetAccessTokenParams;

  constructor({
    baseUrl,
    m2m,
    // getTokenFn,
  }: ApiClientParams) {
    this.baseUrl = baseUrl;
    if (m2m) {
      const { getAccessTokenParams, getOrganizationTokenParams } = m2m;
      if (getOrganizationTokenParams) {
        this.getOrganizationTokenParams = getOrganizationTokenParams;
      }

      if (getAccessTokenParams) {
        this.getAccessTokenParams = getAccessTokenParams;
      }
    }
    // if (getTokenFn) {
    //   this.getTokenFn = getTokenFn;
    // }
    this.token = undefined;
    this.client = createClient({ baseUrl: this.baseUrl });
  }

  private async fetchToken(params: {
    logtoOidcEndpoint: string;
    applicationId: string;
    applicationSecret: string;
    scopes: string[];
    specificBodyFields: { [x: string]: string };
  }) {
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
      //   throw httpErrors.unauthorized(JSON.stringify(await response.json()));
      throw new Error("Unauthorized");
    }

    return response.json() as Promise<TokenResponseBody>;
  }

  private async getAccessToken() {
    const params = this.getAccessTokenParams as GetAccessTokenParams;
    const tokenResponse = await this.fetchToken({
      ...params,
      specificBodyFields: { resource: params.resource },
    });
    //TODO store here
    this.token = tokenResponse.access_token;
    return tokenResponse.access_token;
  }

  private async getOrganizationToken() {
    const params = this
      .getOrganizationTokenParams as GetOrganizationTokenParams;

    const tokenResponse = await this.fetchToken({
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
    //TODO store here
    this.token = tokenResponse.access_token;
    return tokenResponse.access_token;
  }

  public logConfig() {
    console.log(this.getOrganizationTokenParams);
  }

  protected async getToken() {
    let token = "";
    if (this.getOrganizationTokenParams) {
      token = await this.getOrganizationToken();
    } else if (this.getAccessTokenParams) {
      token = await this.getAccessToken();
    } else if (this.getTokenFn) {
      token = await this.getTokenFn();
    }
    this.token = token;

    return this.token;
  }
}

export default BaseClient;
