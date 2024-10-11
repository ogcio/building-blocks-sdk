import createClient, { type FetchResponse } from "openapi-fetch";
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
    if (response.data) {
      const dataEntries = Object.entries(response.data);
      // by docs the body should contain a "data"
      // properties with the response values
      const containsData = dataEntries.find((x) => x[0] === "data");
      const containsMetadata = dataEntries.find((x) => x[0] === "metadata");
      const output: { data?: ResponseJsonValue; metadata?: ResponseJsonValue } =
        {};
      if (containsMetadata) {
        output.metadata = containsMetadata[1] as ResponseJsonValue;
      }
      output.data = containsData
        ? (containsData[1] as ResponseJsonValue)
        : response.data;
      return output;
    }

    return { error: response.error };
  }

  protected formatError(reason: unknown): { error?: ResponseJsonValue } {
    return { error: reason as ResponseJsonValue };
  }
}

export default BaseClient;
