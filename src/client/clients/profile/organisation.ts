import type createClient from "openapi-fetch";
import type { Logger } from "../../../types/index.js";
import {
  formatError,
  formatResponse,
  throwIfEmpty,
} from "../../utils/client-utils.js";
import type { paths } from "./schema.js";

export class ProfileOrganisation {
  constructor(
    private readonly client: ReturnType<typeof createClient<paths>>,
    private readonly serviceName: string,
    private readonly logger: Logger | undefined,
  ) {}

  async getCurrentConsentStatement(
    query: paths["/api/v1/organisations/consent-statements/current"]["get"]["parameters"]["query"],
  ) {
    return this.client
      .GET("/api/v1/organisations/consent-statements/current", {
        params: { query },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async createConsentStatement(
    data: NonNullable<
      paths["/api/v1/organisations/consent-statements/"]["post"]["requestBody"]
    >["content"]["application/json"],
  ) {
    return this.client
      .POST("/api/v1/organisations/consent-statements/", {
        body: data,
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async updateConsentStatement(
    id: string,
    data: NonNullable<
      paths["/api/v1/organisations/consent-statements/{id}"]["put"]["requestBody"]
    >["content"]["application/json"],
  ) {
    throwIfEmpty(id);

    return this.client
      .PUT("/api/v1/organisations/consent-statements/{id}", {
        params: { path: { id } },
        body: data,
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async listConsentStatements(
    query: paths["/api/v1/organisations/consent-statements/"]["get"]["parameters"]["query"],
  ) {
    return this.client
      .GET("/api/v1/organisations/consent-statements/", {
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
      .GET("/api/v1/organisations/consent-statements/{id}", {
        params: { path: { id } },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async disableConsentStatement(id: string) {
    throwIfEmpty(id);

    return this.client
      .PATCH("/api/v1/organisations/consent-statements/{id}/disable", {
        params: { path: { id } },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async listConsents(
    query: paths["/api/v1/organisations/consents/"]["get"]["parameters"]["query"],
  ) {
    return this.client
      .GET("/api/v1/organisations/consents/", {
        params: { query },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async listLatestConsents(
    query: paths["/api/v1/organisations/consents/latest"]["get"]["parameters"]["query"],
  ) {
    return this.client
      .GET("/api/v1/organisations/consents/latest", {
        params: { query },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }
}
