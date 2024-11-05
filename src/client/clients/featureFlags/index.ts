import type createClient from "openapi-fetch";
import type { BaseApiClientParams } from "../../../types/index.js";
import { FEATURE_FLAGS } from "../../../types/index.js";
import { BaseClient } from "../../base-client.js";
import { formatError, formatResponse } from "../../utils/client-utils.js";
import { DEFAULT_PROJECT_ID } from "./const.js";
import type { components, paths } from "./schema.js";

export class FeatureFlags extends BaseClient<paths> {
  declare client: ReturnType<typeof createClient<paths>>;
  protected serviceName = FEATURE_FLAGS;

  private unleashConnectionOptions: {
    url: string | undefined;
    token?: string;
  };

  constructor({ baseUrl, getTokenFn }: BaseApiClientParams) {
    super({ baseUrl, getTokenFn });
    this.unleashConnectionOptions = { url: baseUrl };
  }

  private async getUnleashItems() {
    try {
      const { startUnleash, InMemStorageProvider } = await import(
        "unleash-client"
      );

      return { startUnleash, InMemStorageProvider };
    } catch {
      throw new Error(
        "unleash-client is not installed or not configured correctly",
      );
    }
  }

  private async initializeConnection() {
    if (this.getTokenFn && !this.unleashConnectionOptions.token) {
      this.unleashConnectionOptions.token = await this.getTokenFn(
        this.serviceName,
      );
    }
  }

  // biome-ignore lint/suspicious/noExplicitAny: We cannot import the types from the unleash-client package
  async isFlagEnabled(name: string, context?: any) {
    await this.initializeConnection();
    const unleashItems = await this.getUnleashItems();
    const client = await unleashItems.startUnleash({
      appName: this.serviceName,
      url: `${this.unleashConnectionOptions.url}/api`,
      refreshInterval: 1000,
      customHeaders: {
        Authorization: this.unleashConnectionOptions.token ?? "",
      },
      storageProvider: new unleashItems.InMemStorageProvider(),
    });
    return client.isEnabled(name, context, () => false);
  }

  async getFeatureFlags(projectId = DEFAULT_PROJECT_ID) {
    return await this.client
      .GET("/api/admin/projects/{projectId}/features", {
        params: {
          path: {
            projectId,
          },
        },
      })
      .then(
        (response) => {
          // @ts-expect-error: TODO: fix me
          const { data, metadata, error } = formatResponse(response);
          return {
            data: data?.features as components["schemas"]["projectFeatureSchema"][],
            metadata,
            error,
          };
        },
        (reason) => formatError(reason),
      );
  }
}
