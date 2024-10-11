import createClient, {} from "openapi-fetch";
import type {
  ApiClientParams,
  SERVICE_NAME,
  TokenFunction,
} from "../types/index.js";

abstract class BaseClient<T extends {}> {
  private baseUrl?: string;
  private initialized;

  protected token?: string;
  protected getTokenFn?: TokenFunction;
  protected serviceName: SERVICE_NAME | undefined;

  protected client: ReturnType<typeof createClient<T>>;

  constructor({ baseUrl, getTokenFn }: ApiClientParams) {
    this.initialized = false;
    if (baseUrl) {
      this.baseUrl = baseUrl;
      this.initialized = true;
    }

    if (getTokenFn) {
      this.getTokenFn = getTokenFn;
    }

    this.token = undefined;
    this.client = createClient<T>({ baseUrl: this.baseUrl });
  }

  protected async getToken() {
    if (this.getTokenFn) {
      const token = await this.getTokenFn(this.serviceName as SERVICE_NAME);
      this.token = token;
    }

    return this.token;
  }

  public isInitialized() {
    return this.initialized;
  }
}

export default BaseClient;
