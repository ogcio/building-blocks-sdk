import createError from "http-errors";
import type createClient from "openapi-fetch";
import { MESSAGING } from "../../../types/index.js";
import { BaseClient } from "../../base-client.js";
import {
  type PaginationParams,
  formatError,
  formatResponse,
  preparePaginationParams,
  toStringOrUndefined,
} from "../../utils/client-utils.js";
import type { paths } from "./schema.js";

export class Messaging extends BaseClient<paths> {
  protected declare client: ReturnType<typeof createClient<paths>>;
  protected serviceName = MESSAGING;

  async getMessagesForUser(
    userId: string,
    filter?: {
      isSeen?: boolean;
      search?: string;
    } & PaginationParams,
  ) {
    const isSeen =
      filter?.isSeen === undefined
        ? undefined
        : filter.isSeen
          ? "true"
          : "false";
    return this.client
      .GET("/api/v1/messages/", {
        params: {
          query: {
            ...preparePaginationParams(filter),
            recipientUserId: userId,
            status: "delivered",
            isSeen,
            search: filter?.search,
          },
        },
      })
      .then(
        (response) => formatResponse(response),
        (reason) => formatError(reason),
      );
  }

  async getMessagesForOrganisation(
    organisationId: string,
    filter?: PaginationParams,
  ) {
    return this.client
      .GET("/api/v1/messages/", {
        params: {
          query: {
            ...preparePaginationParams(filter),
            organisationId,
          },
        },
      })
      .then(
        (response) => formatResponse(response),
        (reason) => formatError(reason),
      );
  }

  async getMessage(
    messageId: paths["/api/v1/messages/{messageId}"]["get"]["parameters"]["path"]["messageId"],
  ) {
    return this.client
      .GET("/api/v1/messages/{messageId}", {
        params: { path: { messageId } },
      })
      .then(
        (response) => formatResponse(response),
        (reason) => formatError(reason),
      );
  }

  async send(
    body: paths["/api/v1/messages/"]["post"]["requestBody"]["content"]["application/json"],
  ) {
    return this.client
      .POST("/api/v1/messages/", {
        body,
      })
      .then(
        (response) => formatResponse(response),
        (reason) => formatError(reason),
      );
  }

  async getTemplates(filter?: PaginationParams) {
    return this.client
      .GET("/api/v1/templates/", {
        params: {
          query: {
            ...preparePaginationParams(filter),
          },
        },
      })
      .then(
        (response) => formatResponse(response),
        (reason) => formatError(reason),
      );
  }

  async getTemplate(
    templateId: paths["/api/v1/templates/{templateId}"]["get"]["parameters"]["path"]["templateId"],
  ) {
    return this.client
      .GET("/api/v1/templates/{templateId}", {
        params: {
          path: {
            templateId,
          },
        },
      })
      .then(
        (response) => formatResponse(response),
        (reason) => formatError(reason),
      );
  }

  async buildMessage(
    messages: paths["/api/v1/messages/"]["post"]["requestBody"]["content"]["application/json"]["message"][],
    language: string,
    vars: Record<string, string | null | undefined>,
  ) {
    if (language.length === 0) {
      throw createError.BadRequest("no language provided");
    }

    const message = messages.find((m) => m.language === language);

    if (!message) {
      throw createError.NotFound(`template not found for language ${language}`);
    }

    const illegalValueKeys: string[] = [];
    const keys = Object.keys(vars);
    for (const key of keys) {
      if (vars[key] === null || vars[key] === undefined) {
        illegalValueKeys.push(key);
      }
    }

    if (illegalValueKeys.length) {
      throw createError.BadRequest(
        `illegal empty variables ${illegalValueKeys.join(", ")}`,
      );
    }

    // No null | undefined at this point
    const interpolator = this.newInterpolator(vars as Record<string, string>);

    const textVariables = new Set<string>();
    for (const text of [
      message.subject,
      message.excerpt,
      message.richText,
      message.plainText,
    ]) {
      (text.match(/[^{{]+(?=}})/g) || []).forEach(
        textVariables.add,
        textVariables,
      );
    }

    // Check all content if there's any unhandled vars.
    const illegalVariables: string[] = [];
    for (const val of textVariables) {
      if (!keys.some((key) => key === val)) {
        illegalVariables.push(val);
      }
    }

    if (illegalVariables.length) {
      throw createError.BadRequest(
        `illegal template variables ${illegalVariables.join(", ")}`,
      );
    }

    return {
      threadName: message.threadName,
      subject: keys.reduce(interpolator, message.subject),
      excerpt: keys.reduce(interpolator, message.excerpt),
      richText: keys.reduce(interpolator, message.richText),
      plainText: keys.reduce(interpolator, message.plainText),
      language: message.language,
    };
  }

  async createTemplate(
    body: paths["/api/v1/templates/"]["post"]["requestBody"]["content"]["application/json"],
  ) {
    return this.client.POST("/api/v1/templates/", { body }).then(
      (response) => formatResponse(response),
      (reason) => formatError(reason),
    );
  }

  async updateTemplate(
    templateId: paths["/api/v1/templates/{templateId}"]["put"]["parameters"]["path"]["templateId"],
    body: paths["/api/v1/templates/{templateId}"]["put"]["requestBody"]["content"]["application/json"],
  ) {
    return this.client
      .PUT("/api/v1/templates/{templateId}", {
        params: { path: { templateId } },
        body,
      })
      .then(
        (response) => formatResponse(response),
        (reason) => formatError(reason),
      );
  }

  async deleteTemplate(
    templateId: paths["/api/v1/templates/{templateId}"]["delete"]["parameters"]["path"]["templateId"],
  ) {
    return this.client
      .DELETE("/api/v1/templates/{templateId}", {
        params: { path: { templateId } },
      })
      .then(
        (response) => formatResponse(response),
        (reason) => formatError(reason),
      );
  }

  async getEmailProviders(
    params?: {
      primary?: boolean;
    } & PaginationParams,
  ) {
    const { primary } = params || {};
    const { error, data } = await this.client.GET("/api/v1/providers/", {
      params: {
        query: {
          type: "email",
          ...preparePaginationParams(params),
          primary:
            primary !== undefined ? (primary ? "true" : "false") : undefined,
        },
      },
    });

    return {
      error,
      data: data?.data
        .filter((item: { type?: string }) => item.type === "email")
        .map(
          (item: { id: string; providerName: string; isPrimary: boolean }) => ({
            id: item.id,
            providerName: item.providerName,
            isPrimary: item.isPrimary,
          }),
        ),
    };
  }

  async getEmailProvider(providerId: string) {
    const { data, error } = await this.client.GET(
      "/api/v1/providers/{providerId}",
      {
        params: { path: { providerId }, query: { type: "email" } },
      },
    );

    if (data?.data.type === "email") {
      return { data: data.data };
    }

    return { error };
  }

  async createEmailProvider(provider: {
    providerName: string;
    isPrimary: boolean;
    smtpHost: string;
    smtpPort: number;
    username: string;
    password: string;
    throttle?: number;
    fromAddress: string;
    ssl: boolean;
  }) {
    return this.client
      .POST("/api/v1/providers/", {
        body: {
          type: "email",
          ...provider,
        },
      })
      .then(
        (response) => formatResponse(response),
        (reason) => formatError(reason),
      );
  }

  async updateEmailProvider(provider: {
    id: string;
    providerName: string;
    isPrimary: boolean;
    smtpHost: string;
    smtpPort: number;
    username: string;
    password: string;
    throttle?: number;
    fromAddress: string;
    ssl: boolean;
  }) {
    return this.client
      .PUT("/api/v1/providers/{providerId}", {
        params: { path: { providerId: provider.id } },
        body: {
          type: "email",
          ...provider,
        },
      })
      .then(
        (response) => formatResponse(response),
        (reason) => formatError(reason),
      );
  }

  async deleteEmailProvider(providerId: string) {
    return this.client
      .DELETE("/api/v1/providers/{providerId}", {
        params: { path: { providerId } },
      })
      .then(
        (response) => formatResponse(response),
        (reason) => formatError(reason),
      );
  }

  async getSmsProviders(
    params?: {
      primary?: boolean;
    } & PaginationParams,
  ) {
    const { primary } = params || {};
    const { error, data } = await this.client.GET("/api/v1/providers/", {
      params: {
        query: {
          type: "sms",
          ...preparePaginationParams(params),
          primary:
            primary !== undefined ? (primary ? "true" : "false") : undefined,
        },
      },
    });

    return {
      error,
      data: data?.data
        .filter((item: { type?: string }) => item.type === "sms")
        .map(
          (item: { id: string; providerName: string; isPrimary: boolean }) => ({
            id: item.id,
            providerName: item.providerName,
            isPrimary: item.isPrimary,
          }),
        ),
    };
  }

  async getSmsProvider(providerId: string) {
    const { data, error } = await this.client.GET(
      "/api/v1/providers/{providerId}",
      {
        params: { path: { providerId }, query: { type: "sms" } },
      },
    );

    // Let's do some type plumbing for the implementor
    if (data?.data.type === "sms") {
      return { data: data.data };
    }

    // Can we throw or return a new NotFoundError here?
    return { error };
  }

  async updateSmsProvider(provider: {
    id: string;
    providerName: string;
    isPrimary: boolean;
    // Union other config types
    config: {
      type: "AWS";
      accessKey: string;
      secretAccessKey: string;
      region: string;
    };
  }) {
    return this.client
      .PUT("/api/v1/providers/{providerId}", {
        params: { path: { providerId: provider.id } },
        body: {
          type: "sms",
          ...provider,
        },
      })
      .then(
        (response) => formatResponse(response),
        (reason) => formatError(reason),
      );
  }

  async createSmsProvider(provider: {
    providerName: string;
    isPrimary: boolean;
    // Union other config types
    config: {
      type: "AWS";
      accessKey: string;
      secretAccessKey: string;
      region: string;
    };
  }) {
    return this.client
      .POST("/api/v1/providers/", {
        body: {
          type: "sms",
          ...provider,
        },
      })
      .then(
        (response) => formatResponse(response),
        (reason) => formatError(reason),
      );
  }

  async deleteSmsProvider(providerId: string) {
    return this.client
      .DELETE("/api/v1/providers/{providerId}", {
        params: { path: { providerId } },
      })
      .then(
        (response) => formatResponse(response),
        (reason) => formatError(reason),
      );
  }

  async importUsers(toImport: { file?: File; records?: object[] }) {
    if (toImport.file) {
      const { data, error } = await this.client.POST("/api/v1/user-imports/", {
        body: {
          file: toImport.file,
        },
        bodySerializer: (body: unknown) => {
          const parsed = body as { file?: File } | undefined;
          if (!parsed || !parsed.file) {
            throw createError.BadRequest("File is missing!");
          }
          const formData = new FormData();
          formData.set("file", parsed.file);
          return formData;
        },
      });
      return { data: data?.data, error };
    }

    return this.client
      .POST("/api/v1/user-imports/", {
        body: toImport.records,
      })
      .then(
        (response) => formatResponse(response),
        (reason) => formatError(reason),
      );
  }

  async downloadUsersCsvTemplate() {
    return this.client
      .GET("/api/v1/user-imports/template-download", {
        parseAs: "blob",
      })
      .then(
        (response) => formatResponse(response),
        (reason) => formatError(reason),
      );
  }

  async getUsersImports(
    pagination: { limit: number; offset: number } = { limit: 100, offset: 0 },
  ) {
    return this.client
      .GET("/api/v1/user-imports/", {
        params: {
          query: {
            limit: toStringOrUndefined(pagination?.limit),
            offset: toStringOrUndefined(pagination?.offset),
          },
        },
      })
      .then(
        (response) => formatResponse(response),
        (reason) => formatError(reason),
      );
  }

  async getUsersImport(importId: string, includeUsersData?: boolean) {
    const includeImportedData =
      typeof includeUsersData === "undefined"
        ? undefined
        : includeUsersData
          ? "true"
          : "false";
    return this.client
      .GET("/api/v1/user-imports/{importId}", {
        params: {
          path: { importId },
          query: {
            includeImportedData,
          },
        },
      })
      .then(
        (response) => formatResponse(response),
        (reason) => formatError(reason),
      );
  }

  async getUsersForImport(importId: string, activeOnly: boolean) {
    return this.client
      .GET("/api/v1/users/", {
        params: { query: { importId, activeOnly: String(activeOnly) } },
      })
      .then(
        (response) => formatResponse(response),
        (reason) => formatError(reason),
      );
  }

  async getOrganisationsSettings(filter?: PaginationParams) {
    return this.client
      .GET("/api/v1/organisation-settings/", {
        params: {
          query: {
            ...preparePaginationParams(filter),
          },
        },
      })
      .then(
        (response) => formatResponse(response),
        (reason) => formatError(reason),
      );
  }

  async getOrganisationSettings(organisationSettingId: string) {
    return this.client
      .GET("/api/v1/organisation-settings/{organisationSettingId}", {
        params: { path: { organisationSettingId } },
      })
      .then(
        (response) => formatResponse(response),
        (reason) => formatError(reason),
      );
  }

  async updateOrganisationSettings(
    organisationSettingId: string,
    body: paths["/api/v1/organisation-settings/{organisationSettingId}"]["patch"]["requestBody"]["content"]["application/json"],
  ) {
    return this.client
      .PATCH("/api/v1/organisation-settings/{organisationSettingId}", {
        body,
        params: { path: { organisationSettingId } },
      })
      .then(
        (response) => formatResponse(response),
        (reason) => formatError(reason),
      );
  }

  async getMessageEvents(params: { search?: string } & PaginationParams) {
    return this.client
      .GET("/api/v1/message-events/", {
        params: {
          query: { search: params.search, ...preparePaginationParams(params) },
        },
      })
      .then(
        (response) => formatResponse(response),
        (reason) => formatError(reason),
      );
  }

  async getMessageEvent(eventId: string) {
    return this.client
      .GET("/api/v1/message-events/{eventId}", {
        params: { path: { eventId } },
      })
      .then(
        (response) => formatResponse(response),
        (reason) => formatError(reason),
      );
  }

  async getUsers(
    query?: paths["/api/v1/users/"]["get"]["parameters"]["query"],
  ) {
    return this.client
      .GET("/api/v1/users/", {
        params: {
          query: { ...query, ...preparePaginationParams(query) },
        },
      })
      .then(
        (response) => formatResponse(response),
        (reason) => formatError(reason),
      );
  }

  async getUser(
    userId: paths["/api/v1/users/{userId}"]["get"]["parameters"]["path"]["userId"],
    activeOnly: boolean,
  ) {
    return this.client
      .GET("/api/v1/users/{userId}", {
        params: {
          path: {
            userId,
          },
          query: {
            activeOnly: toStringOrUndefined(activeOnly),
          },
        },
      })
      .then(
        (response) => formatResponse(response),
        (reason) => formatError(reason),
      );
  }

  async seeMessage(messageId: string) {
    return this.client
      .PUT("/api/v1/message-actions/{messageId}", {
        params: {
          path: {
            messageId,
          },
        },
        body: {
          messageId,
          isSeen: true,
        },
      })
      .then(
        (response) => formatResponse(response),
        (reason) => formatError(reason),
      );
  }

  async unseeMessage(messageId: string) {
    return this.client
      .PUT("/api/v1/message-actions/{messageId}", {
        params: {
          path: {
            messageId,
          },
        },
        body: {
          messageId,
          isSeen: false,
        },
      })
      .then(
        (response) => formatResponse(response),
        (reason) => formatError(reason),
      );
  }

  newInterpolator(interpolations: Record<string, string>) {
    return function replacer(acc: string, key: string) {
      return acc.replaceAll(`{{${key}}}`, interpolations[key]);
    };
  }
}
