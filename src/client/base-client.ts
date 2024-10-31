import createClient, {
  type Middleware,
  type FetchResponse,
} from "openapi-fetch";
import type {
  BaseApiClientParams,
  SERVICE_NAME,
  TokenFunction,
} from "../types/index.js";
import type { DataResponseValue } from "./utils/client-utils.js";

abstract class BaseClient<T extends {}> {
  private baseUrl?: string;
  private initialized;

  protected token?: string;
  protected getTokenFn?: TokenFunction;
  protected serviceName: SERVICE_NAME | undefined;

  protected client: ReturnType<typeof createClient<T>>;

  constructor({ baseUrl, getTokenFn }: BaseApiClientParams) {
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

  public deleteToken() {
    this.token = undefined;
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

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  protected formatResponse<G extends Record<string | number, any>, O>(
    response: FetchResponse<G, O, "application/json">,
  ): DataResponseValue<G, O> {
    let outputData = undefined;
    let outputMetadata = undefined;
    if (!response) {
      return {} as DataResponseValue<G, O>;
    }
    if (response.data) {
      const dataEntries = Object.entries(response.data);
      // by docs the body should contain a "data"
      // properties with the response values
      const containsData = dataEntries.find((x) => x[0] === "data");
      const containsMetadata = dataEntries.find((x) => x[0] === "metadata");

      if (containsMetadata) {
        outputMetadata = containsMetadata[1];
      }
      outputData = containsData ? containsData[1] : response.data;
    }

    return {
      data: outputData,
      metadata: outputMetadata,
      error: response.error,
    } as unknown as DataResponseValue<G, O>;
  }

  protected formatError<G, O>(reason: unknown): DataResponseValue<G, O> {
    return { error: reason } as unknown as DataResponseValue<G, O>;
  }
}

export default BaseClient;
