import type createClient from "openapi-fetch";
import { FEATURE_FLAGS } from "../../../types/index.js";
import BaseClient from "../../base-client.js";
import type { paths } from "./schema.js";

class FeatureFlags extends BaseClient<paths> {
  declare client: ReturnType<typeof createClient<paths>>;
  protected serviceName = FEATURE_FLAGS;

  async getFeatureFlags() {
    return await this.client.GET("/api/admin/projects").then(
      (response) => {
        return this.formatResponse(response);
      },
      (reason) => {
        console.dir(reason, { depth: null });
        return this.formatError(reason);
      },
    );
  }
}

export default FeatureFlags;
