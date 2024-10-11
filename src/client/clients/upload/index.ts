import type { Middleware } from "openapi-fetch";
import type createClient from "openapi-fetch";
import { UPLOAD } from "../../../types/index.js";
import BaseClient from "../../base-client.js";
import type { paths } from "./schema.js";

class Upload extends BaseClient<paths> {
  declare client: ReturnType<typeof createClient<paths>>;
  protected serviceName = UPLOAD;

  getFilesMetadata(organizationId: string) {
    return this.client
      .GET("/api/v1/metadata/", {
        params: {
          query: {
            organizationId,
          },
        },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async shareFile(fileId: string, userId: string) {
    return this.client
      .POST("/api/v1/permissions/", {
        body: { fileId, userId },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async removeFileSharing(fileId: string, userId: string) {
    return this.client
      .DELETE("/api/v1/permissions/", {
        body: { fileId, userId },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async getFile(id: string) {
    try {
      const {
        error,
        data,
        response: { headers, status },
      } = await this.client.GET("/api/v1/files/{id}", {
        params: { path: { id } },
        parseAs: "stream",
      });

      return {
        error,
        data,
        headers: Object.fromEntries(headers.entries()),
        status,
      };
    } catch (e) {
      return {
        error: e,
        data: null,
        headers: null,
        status: 500,
      };
    }
  }

  getSharedFilesForUser(userId: string) {
    this.client
      .GET("/api/v1/metadata/", {
        params: { query: { userId } },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async getFileMetadata(id: string) {
    this.client
      .GET("/api/v1/metadata/{id}", {
        params: { path: { id } },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async scheduleFileDeletion(id: string) {
    return this.client
      .DELETE("/api/v1/metadata/", {
        body: { fileId: id },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async uploadFile(file: File, expirationDate?: string) {
    const { error } = await this.client.POST("/api/v1/files/", {
      body: {
        file,
        expirationDate,
      },

      bodySerializer: (body: unknown) => {
        const pasrsed = body as { file: File; expirationDate: string };
        const formData = new FormData();
        if (pasrsed.expirationDate) {
          formData.set("expirationDate", pasrsed.expirationDate);
        }
        formData.set("file", pasrsed.file);
        return formData;
      },
    });

    return { error };
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
