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
  protected tokenExpiryCheckTime = Number.NEGATIVE_INFINITY;
  private refreshLock: Promise<string | undefined> | undefined;
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
        await this.refreshToken();

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
    this.tokenExpiryCheckTime = Number.NEGATIVE_INFINITY;
  }

  protected async getToken() {
    if (!this.getTokenFn) {
      return this.token;
    }

    this.token = await this.getTokenFn(this.serviceName as SERVICE_NAME);
    try {
      const { payload } = parseJwtToken(this.token);
      const expires = getNumberValueFromObject(payload, "exp");
      this.tokenExpiryCheckTime =
        this.toMilliseconds(expires) - this.tokenExpiryThresholdMs;
    } catch (err) {
      this.deleteToken();
      throw err;
    }

    return this.token;
  }

  public isInitialized() {
    return this.initialized;
  }

  public hasValidToken() {
    return this.token !== undefined && !this.isTokenExpired();
  }

  private toMilliseconds(timestamp: number) {
    // If timestamp is in seconds (length is 10), convert to milliseconds
    // If already in milliseconds (length is 13), return as is
    return timestamp.toString().length === 10 ? timestamp * 1000 : timestamp;
  }

  private isTokenExpired() {
    return this.toMilliseconds(Date.now()) >= this.tokenExpiryCheckTime;
  }

  private async performRefreshToken(): Promise<string | undefined> {
    if (this.hasValidToken()) {
      return this.token;
    }

    return this.getToken();
  }

  public async refreshToken(): Promise<string | undefined> {
    if (this.refreshLock) return this.refreshLock;

    if (this.hasValidToken()) return this.token;
    let token: string | undefined;
    try {
      this.refreshLock = this.performRefreshToken();
      token = await this.refreshLock;
    } finally {
      this.refreshLock = undefined;
    }

    return token;
  }
}
