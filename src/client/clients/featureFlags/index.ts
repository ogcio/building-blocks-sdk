import type createClient from "openapi-fetch";
import type { Context } from "unleash-client";
import type { BaseApiClientParams } from "../../../types/index.js";
import { FEATURE_FLAGS } from "../../../types/index.js";
import BaseClient from "../../base-client.js";
import { DEFAULT_PROJECT_ID } from "./const.js";
import type { components, paths } from "./schema.js";

class FeatureFlags extends BaseClient<paths> {
  declare client: ReturnType<typeof createClient<paths>>;
  protected serviceName = FEATURE_FLAGS;

  private unleashConnectionOptions: {
    url: string | undefined;
    token: string;
  };

  constructor({ baseUrl, getTokenFn }: BaseApiClientParams) {
    super({ baseUrl, getTokenFn });
    const token = getTokenFn ? (getTokenFn(FEATURE_FLAGS) as string) : "";
    this.unleashConnectionOptions = { url: baseUrl, token };
  }

  async isFlagEnabled(name: string, context?: Context) {
    try {
      const { InMemStorageProvider, startUnleash } = await import(
        "unleash-client"
      );
      const client = await startUnleash({
        appName: this.serviceName,
        url: `${this.unleashConnectionOptions.url}/api`,
        refreshInterval: 1000,
        customHeaders: {
          Authorization: this.unleashConnectionOptions.token,
        },
        storageProvider: new InMemStorageProvider(),
      });
      return client.isEnabled(name, context, () => false);
    } catch {
      throw new Error(
        "unleash-client is not installed or not configured correctly",
      );
    }
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
          const { data, metadata, error } = this.formatResponse(response);
          return {
            data: data?.features as components["schemas"]["projectFeatureSchema"][],
            metadata,
            error,
          };
        },
        (reason) => this.formatError(reason),
      );
  }
}

export default FeatureFlags;
export type { Context as FeatureFlagsEvaluationContext };
