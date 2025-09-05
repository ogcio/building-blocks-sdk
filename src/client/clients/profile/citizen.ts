import type createClient from "openapi-fetch";
import type { Logger } from "../../../types/index.js";
import {
  formatError,
  formatResponse,
  throwIfEmpty,
} from "../../utils/client-utils.js";
import type { paths } from "./schema.js";

export class ProfileCitizen {
  constructor(
    private readonly client: ReturnType<typeof createClient<paths>>,
    private readonly serviceName: string,
    private readonly logger: Logger | undefined,
  ) {}

  async getLatestConsent(
    query: paths["/api/v1/citizens/consents/latest"]["get"]["parameters"]["query"],
  ) {
    return this.client
      .GET("/api/v1/citizens/consents/latest", {
        params: { query },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async submitConsent(
    body: NonNullable<
      paths["/api/v1/citizens/consents/"]["post"]["requestBody"]
    >["content"]["application/json"],
  ) {
    return this.client
      .POST("/api/v1/citizens/consents/", {
        body,
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async listConsents(
    query: paths["/api/v1/citizens/consents/"]["get"]["parameters"]["query"],
  ) {
    return this.client
      .GET("/api/v1/citizens/consents/", {
        params: { query },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async getCurrentConsentStatement(
    query: paths["/api/v1/citizens/consent-statements/current"]["get"]["parameters"]["query"],
  ) {
    return this.client
      .GET("/api/v1/citizens/consent-statements/current", {
        params: { query },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async getConsentStatement(id: string) {
    throwIfEmpty(id);
    return this.client
      .GET("/api/v1/citizens/consent-statements/{id}", {
        params: { path: { id } },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }
}
