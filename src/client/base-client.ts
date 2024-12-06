import createClient, { type Middleware } from "openapi-fetch";
import type { Logger, SERVICE_NAME, TokenFunction } from "../types/index.js";

export abstract class BaseClient<T extends {}> {
  private baseUrl?: string;
  private initialized;

  protected token?: string;
  protected getTokenFn?: TokenFunction;
  protected serviceName: SERVICE_NAME | undefined;
  protected logger?: Logger;

  protected client: ReturnType<typeof createClient<T>>;

  constructor({
    baseUrl,
    getTokenFn,
    logger,
  }: {
    baseUrl: string;
    getTokenFn?: TokenFunction;
    logger?: Logger;
  }) {
    this.initialized = false;
    if (baseUrl) {
      this.baseUrl = baseUrl;
      this.initialized = true;
    }

    if (getTokenFn) {
      this.getTokenFn = getTokenFn;
    }
    this.logger = logger;
    this.token = undefined;
    this.client = createClient<T>({ baseUrl: this.baseUrl });
    const authMiddleware: Middleware = {
      onRequest: async ({ request }) => {
        if (!this.token && this.getTokenFn) {
          this.token = await this.getTokenFn(this.serviceName as SERVICE_NAME);
        }

        if (this.logger) {
          const clonedRequest = request.clone();
          this.logger.debug(
            { body: await clonedRequest.json(), url: clonedRequest.url },
            `${this.serviceName} - executing request`,
          );
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
}
