import createClient from "openapi-fetch";
import type {
  ApiClientParams,
  GetAccessTokenParams,
  GetOrganizationTokenParams,
  RESOURCES,
  TokenFunction,
} from "../types/index.js";
import { getAccessToken, getOrganizationToken } from "./auth/index.js";

abstract class BaseClient {
  protected token?: string;
  private baseUrl: string;
  protected getTokenFn?: TokenFunction;
  private serviceName: RESOURCES;

  protected client: ReturnType<typeof createClient>;

  private readonly getOrganizationTokenParams?: GetOrganizationTokenParams;
  private readonly getAccessTokenParams?: GetAccessTokenParams;

  constructor({ baseUrl, m2m, getTokenFn, serviceName }: ApiClientParams) {
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
    this.serviceName = serviceName;
    if (getTokenFn) {
      this.getTokenFn = getTokenFn;
    }
    this.token = undefined;
    this.client = createClient({ baseUrl: this.baseUrl });
  }

  protected async getToken() {
    let token = "";
    if (this.getOrganizationTokenParams) {
      token = await getOrganizationToken(this.getOrganizationTokenParams);
    } else if (this.getAccessTokenParams) {
      token = await getAccessToken(this.getAccessTokenParams);
    } else if (this.getTokenFn) {
      token = await this.getTokenFn(this.serviceName);
    }
    this.token = token;

    return this.token;
  }
}

export default BaseClient;
