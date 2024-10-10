import type { Middleware, createPathBasedClient } from "openapi-fetch";
import type createClient from "openapi-fetch";
import { UPLOAD } from "../../../types/index.js";
import BaseClient from "../../base-client.js";
import type { paths } from "./schema.js";

class Upload extends BaseClient {
  declare client: ReturnType<typeof createClient<paths>>;
  protected serviceName = UPLOAD;

  async getFilesMetadata() {
    const { error, data } = await this.client.GET("/api/v1/metadata/", {
      params: {
        query: {
          organizationId: "ogcio",
        },
      },
    });
    return { error, data: data?.data };
  }

  async authenticate() {
    const token = await this.getToken();
    this.token = token;
    const authMiddleware: Middleware = {
      async onRequest({ request }) {
        request.headers.set("Authorization", `Bearer ${token}`);
        return request;
      },
    };

    this.client.use(authMiddleware);
  }
}

export default Upload;
