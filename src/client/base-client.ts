import createClient, {
  type Middleware,
  type FetchResponse,
} from "openapi-fetch";
import type {
  ApiClientParams,
  SERVICE_NAME,
  TokenFunction,
} from "../types/index.js";
import type { ResponseJsonValue } from "./utils/client-utils.js";

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
    const authMiddleware: Middleware = {
      onRequest: async ({ request }) => {
        if (!this.token && this.getTokenFn) {
          this.token = await this.getTokenFn(this.serviceName as SERVICE_NAME);
        }

        if (this.token) {
          request.headers.set("Authorization", `Bearer ${this.token}`);
        }
        return request;
      },
    };

    this.client.use(authMiddleware);
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

  protected formatResponse<T, O>(
    response: FetchResponse<T, O, "application/json">,
  ): {
    data?: ResponseJsonValue;
    metadata?: ResponseJsonValue;
    error?: ResponseJsonValue;
  } {
    let outputData = undefined;
    let outputMetadata = undefined;
    if (response.data) {
      const dataEntries = Object.entries(response.data);
      // by docs the body should contain a "data"
      // properties with the response values
      const containsData = dataEntries.find((x) => x[0] === "data");
      const containsMetadata = dataEntries.find((x) => x[0] === "metadata");

      if (containsMetadata) {
        outputMetadata = containsMetadata[1] as ResponseJsonValue;
      }
      outputData = containsData
        ? (containsData[1] as ResponseJsonValue)
        : response.data;
    }

    return {
      data: outputData,
      metadata: outputMetadata,
      error: response.error,
    };
  }

  protected formatError(reason: unknown): { error?: ResponseJsonValue } {
    return { error: reason as ResponseJsonValue };
  }
}

export default BaseClient;
