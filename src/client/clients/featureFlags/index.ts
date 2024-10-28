import type createClient from "openapi-fetch";
import {
  type Context,
  InMemStorageProvider,
  type Unleash,
  initialize,
} from "unleash-client";
import type { BaseApiClientParams } from "../../../types/index.js";
import { FEATURE_FLAGS } from "../../../types/index.js";
import BaseClient from "../../base-client.js";
import { DEFAULT_PROJECT_ID } from "./const.js";
import type { components, paths } from "./schema.js";
import { waitForConnection } from "./utils.js";

class FeatureFlags extends BaseClient<paths> {
  declare client: ReturnType<typeof createClient<paths>>;
  protected serviceName = FEATURE_FLAGS;

  private unleashClient: Unleash | null = null;
  public isConnected = false;

  constructor({ baseUrl, getTokenFn }: BaseApiClientParams) {
    super({ baseUrl, getTokenFn });
    const token = getTokenFn ? (getTokenFn(FEATURE_FLAGS) as string) : "";
    this.unleashClient = initialize({
      appName: this.serviceName,
      url: `${baseUrl}/api`,
      refreshInterval: 1000,
      customHeaders: {
        Authorization: token,
      },
      storageProvider: new InMemStorageProvider(),
    });
    this.unleashClient.on("error", console.error);
    this.unleashClient.on("synchronized", () => {
      this.isConnected = true;
    });
  }

  async isFlagEnabled(name: string, context?: Context) {
    await this.waitForConnection();
    return this.unleashClient?.isEnabled(name, context, () => false) ?? false;
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

  private async waitForConnection(everyMs = 10) {
    return waitForConnection(this, everyMs);
  }
}

export default FeatureFlags;
export type { Context as FeatureFlagsEvaluationContext };
