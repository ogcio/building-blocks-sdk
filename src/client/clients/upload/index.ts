import type createClient from "openapi-fetch";
import { UPLOAD } from "../../../types/index.js";
import { BaseClient } from "../../base-client.js";
import {
  formatError,
  formatResponse,
  throwIfEmpty,
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
    throwIfEmpty(id);
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
    throwIfEmpty(userId);
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
    throwIfEmpty(id);
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
    throwIfEmpty(id);
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
    throwIfEmpty(id);
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
    throwIfEmpty(fileId);
    throwIfEmpty(userId);
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
    throwIfEmpty(userId);
    throwIfEmpty(fileId);
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
    options?: { timeoutMs?: number },
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
    const timeoutMs = options?.timeoutMs ?? 60000; // default 60s
    try {
      const { error, data } = await this.client.POST("/api/v1/files/", {
        body: {
          file,
          expirationDate,
        },
        signal: AbortSignal.timeout(timeoutMs),
        bodySerializer: (body: unknown) => {
          const parsed = body as { file: File; expirationDate?: string };
          const formData = new FormData();
          if (parsed.expirationDate) {
            formData.set("expirationDate", parsed.expirationDate);
          }
          formData.set("file", parsed.file);
          return formData;
        },
      });

      return { error, data: { uploadId: data?.data.id } };
    } catch (e: unknown) {
      const err = e as Error & { name?: string };
      if (err?.name === "AbortError") {
        return {
          error: {
            name: "TimeoutError",
            detail: "Upload aborted after reaching timeout",
            requestId: "",
            code: "TIMEOUT_ERROR",
          },
        };
      }
      throw err;
    }
  }
}
