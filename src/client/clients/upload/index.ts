import type createClient from "openapi-fetch";
import { UPLOAD } from "../../../types/index.js";
import BaseClient from "../../base-client.js";
import type { paths } from "./schema.js";

class Upload extends BaseClient<paths> {
  protected declare client: ReturnType<typeof createClient<paths>>;
  protected serviceName = UPLOAD;

  getFilesMetadata({
    organizationId,
    userId,
  }: {
    organizationId?: string;
    userId?: string;
  }) {
    return this.client
      .GET("/api/v1/metadata/", {
        params: {
          query: {
            organizationId,
            userId,
          },
        },
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
    return this.client
      .GET("/api/v1/metadata/", {
        params: { query: { userId } },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  getFileMetadata(id: string) {
    return this.client
      .GET("/api/v1/metadata/{id}", {
        params: { path: { id } },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  scheduleFileDeletion(id: string) {
    return this.client
      .DELETE("/api/v1/metadata/", {
        body: { fileId: id },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  getFileSharings(id: string) {
    return this.client
      .GET("/api/v1/permissions/", {
        params: {
          query: {
            fileId: id,
          },
        },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  shareFile(fileId: string, userId: string) {
    return this.client
      .POST("/api/v1/permissions/", {
        body: { fileId, userId },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  removeFileSharing(fileId: string, userId: string) {
    return this.client
      .DELETE("/api/v1/permissions/", {
        body: { fileId, userId },
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
}

export default Upload;
