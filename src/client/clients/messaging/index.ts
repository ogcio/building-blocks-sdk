import createError from "http-errors";
import type createClient from "openapi-fetch";
import { MESSAGING } from "../../../types/index.js";
import { BaseClient } from "../../base-client.js";
import {
  type PaginationParams,
  formatError,
  formatResponse,
  preparePaginationParams,
  throwIfEmpty,
} from "../../utils/client-utils.js";
import type { paths } from "./schema.js";

export class Messaging extends BaseClient<paths> {
  protected declare client: ReturnType<typeof createClient<paths>>;
  protected serviceName = MESSAGING;

  /**
   *
   * @param filter If no user id is set, it returns the messages for
   * the logged in profile and for the linked accounts, if set, only
   * for the specific profile id
   * @returns List of delivered messages
   */
  async getMessagesForUser(
    filter?: {
      isSeen?: boolean;
      search?: string;
      userId?: string;
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
            recipientUserId: filter?.userId,
            status: "delivered",
            isSeen,
            search: filter?.search,
          },
        },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async getMessagesForOrganisation(
    organisationId: string,
    filter?: PaginationParams,
  ) {
    throwIfEmpty(organisationId);
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
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async getMessage(
    messageId: paths["/api/v1/messages/{messageId}"]["get"]["parameters"]["path"]["messageId"],
  ) {
    throwIfEmpty(messageId);
    return this.client
      .GET("/api/v1/messages/{messageId}", {
        params: { path: { messageId } },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
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
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async getTemplates(
    filter?: paths["/api/v1/templates/"]["get"]["parameters"]["query"],
  ) {
    return this.client
      .GET("/api/v1/templates/", {
        params: {
          query: {
            ...preparePaginationParams(filter),
            search: filter?.search,
          },
        },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async getTemplate(
    templateId: paths["/api/v1/templates/{templateId}"]["get"]["parameters"]["path"]["templateId"],
  ) {
    throwIfEmpty(templateId);
    return this.client
      .GET("/api/v1/templates/{templateId}", {
        params: {
          path: {
            templateId,
          },
        },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
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

    const values = [message.subject, message.plainText];

    if (message.excerpt) {
      values.push(message.excerpt);
    }

    if (message.richText) {
      values.push(message.richText);
    }

    const textVariables = new Set<string>();
    for (const text of values) {
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
      excerpt: message.excerpt
        ? keys.reduce(interpolator, message.excerpt)
        : undefined,
      richText: message.richText
        ? keys.reduce(interpolator, message.richText)
        : undefined,
      plainText: keys.reduce(interpolator, message.plainText),
      language: message.language,
    };
  }

  async createTemplate(
    body: paths["/api/v1/templates/"]["post"]["requestBody"]["content"]["application/json"],
  ) {
    return this.client.POST("/api/v1/templates/", { body }).then(
      (response) => formatResponse(response, this.serviceName, this.logger),
      (reason) => formatError(reason, this.serviceName, this.logger),
    );
  }

  async updateTemplate(
    templateId: paths["/api/v1/templates/{templateId}"]["put"]["parameters"]["path"]["templateId"],
    body: paths["/api/v1/templates/{templateId}"]["put"]["requestBody"]["content"]["application/json"],
  ) {
    throwIfEmpty(templateId);
    return this.client
      .PUT("/api/v1/templates/{templateId}", {
        params: { path: { templateId } },
        body,
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async deleteTemplate(
    templateId: paths["/api/v1/templates/{templateId}"]["delete"]["parameters"]["path"]["templateId"],
  ) {
    throwIfEmpty(templateId);
    return this.client
      .DELETE("/api/v1/templates/{templateId}", {
        params: { path: { templateId } },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async getEmailProviders(
    params?: Omit<
      paths["/api/v1/providers/"]["get"]["parameters"]["query"],
      "type"
    >,
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
    throwIfEmpty(providerId);
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

  async createEmailProvider(
    provider: Omit<
      NonNullable<
        paths["/api/v1/providers/"]["post"]["requestBody"]["content"]["application/json"]
      >,
      "type"
    >,
  ) {
    return this.client
      .POST("/api/v1/providers/", {
        body: {
          type: "email",
          ...provider,
        },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async updateEmailProvider(
    provider: Omit<
      NonNullable<
        paths["/api/v1/providers/{providerId}"]["put"]["requestBody"]["content"]["application/json"]
      >,
      "type"
    >,
  ) {
    throwIfEmpty(provider.id);
    return this.client
      .PUT("/api/v1/providers/{providerId}", {
        params: { path: { providerId: provider.id } },
        body: {
          type: "email",
          ...provider,
        },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async deleteEmailProvider(providerId: string) {
    throwIfEmpty(providerId);
    return this.client
      .DELETE("/api/v1/providers/{providerId}", {
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        params: { path: { providerId }, query: { type: "email" } as any },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async getMessageEvents(
    params: paths["/api/v1/message-events/"]["get"]["parameters"]["query"],
  ) {
    return this.client
      .GET("/api/v1/message-events/", {
        params: {
          query: {
            ...params,
            ...preparePaginationParams(params),
          },
        },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async getMessageEvent(
    eventId: paths["/api/v1/message-events/{eventId}"]["get"]["parameters"]["path"]["eventId"],
  ) {
    throwIfEmpty(eventId);
    return this.client
      .GET("/api/v1/message-events/{eventId}", {
        params: { path: { eventId } },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async seeMessage(messageId: string) {
    throwIfEmpty(messageId);
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
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async unseeMessage(messageId: string) {
    throwIfEmpty(messageId);
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
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  newInterpolator(interpolations: Record<string, string>) {
    return function replacer(acc: string, key: string) {
      return acc.replaceAll(`{{${key}}}`, interpolations[key]);
    };
  }
}
