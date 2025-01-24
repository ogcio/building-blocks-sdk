import type createClient from "openapi-fetch";
import { UPLOAD } from "../../../types/index.js";
import { BaseClient } from "../../base-client.js";
import {
  ensureStringIsNotEmpty,
  formatError,
  formatResponse,
} from "../../utils/client-utils.js";
import type { paths } from "./schema.js";

export class Upload extends BaseClient<paths> {
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
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async getFile(id: string) {
    ensureStringIsNotEmpty(id);
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

  getSharedFilesForUser(userId: string, organizationId?: string) {
    ensureStringIsNotEmpty(userId);
    return this.client
      .GET("/api/v1/metadata/", {
        params: { query: { userId, organizationId } },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  getFileMetadata(id: string, organizationId?: string) {
    ensureStringIsNotEmpty(id);
    return this.client
      .GET("/api/v1/metadata/{id}", {
        params: { path: { id, organizationId } },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  scheduleFileDeletion(id: string) {
    ensureStringIsNotEmpty(id);
    return this.client
      .DELETE("/api/v1/metadata/", {
        body: { fileId: id },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  getFileSharings(id: string) {
    ensureStringIsNotEmpty(id);
    return this.client
      .GET("/api/v1/permissions/", {
        params: {
          query: {
            fileId: id,
          },
        },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  shareFile(fileId: string, userId: string) {
    ensureStringIsNotEmpty(fileId);
    ensureStringIsNotEmpty(userId);
    return this.client
      .POST("/api/v1/permissions/", {
        body: { fileId, userId },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  removeFileSharing(fileId: string, userId: string) {
    ensureStringIsNotEmpty(userId);
    ensureStringIsNotEmpty(fileId);
    return this.client
      .DELETE("/api/v1/permissions/", {
        body: { fileId, userId },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async uploadFile(
    file: File,
    expirationDate?: string,
  ): Promise<{
    error?: {
      code: string;
      detail: string;
      requestId: string;
      name: string;
      validation?: unknown;
      validationContext?: string;
    };
    data?: { uploadId?: string };
  }> {
    const { error, data } = await this.client.POST("/api/v1/files/", {
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

    return { error, data: { uploadId: data?.data.id } };
  }
}
