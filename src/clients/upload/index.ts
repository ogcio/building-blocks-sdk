import type { Middleware } from "openapi-fetch";
import BaseClient from "../../BaseClient.js";

class UploadClient extends BaseClient {
  public async listFiles() {}

  async healthcheck() {
    const { data, error } = await this.client.GET("/health");

    return { error, data: data };
  }

  async getFilesMetadata() {
    const { error, data } = await this.client.GET(
      "/api/v1/metadata/?organizationId=ogcio",
    );
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

export default UploadClient;
