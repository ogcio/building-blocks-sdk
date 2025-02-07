import createClient, { type Middleware } from "openapi-fetch";
import type { Logger, SERVICE_NAME, TokenFunction } from "../types/index.js";
import {
  getNumberValueFromObject,
  parseJwtToken,
} from "./utils/client-utils.js";

export abstract class BaseClient<T extends {}> {
  private baseUrl?: string;
  private initialized;
  private tokenExpiryThresholdMs = 5000;
  protected token?: string;
  protected tokenExpiryCheckTime = Number.POSITIVE_INFINITY;

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
        if (
          (!this.token || Date.now() >= this.tokenExpiryCheckTime) &&
          this.getTokenFn
        ) {
          this.token = await this.getTokenFn(this.serviceName as SERVICE_NAME);

          try {
            const { payload } = parseJwtToken(this.token);
            const expires = getNumberValueFromObject(payload, "exp");
            this.tokenExpiryCheckTime = expires - this.tokenExpiryThresholdMs;
          } catch (err) {
            if (this.logger) {
              this.logger.warn(err, "failed to set tokenExpiryCheckTime");
            }
          }
        }

        if (this.logger) {
          const clonedRequest = request.clone();
          let requestBody = null;
          try {
            requestBody = await clonedRequest.json();
          } catch (_e) {
            requestBody = clonedRequest.body;
          }
          this.logger.trace(
            { body: requestBody, url: clonedRequest.url },
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
    this.tokenExpiryCheckTime = Number.POSITIVE_INFINITY;
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

  public hasValidToken() {
    return this.token !== undefined;
  }
}
