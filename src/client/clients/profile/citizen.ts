import type createClient from "openapi-fetch";
import type { paths } from "./schema.js";

export class ProfileCitizen {
  constructor(
    private readonly client: ReturnType<typeof createClient<paths>>,
  ) {}

  async getLatestConsent(
    query: paths["/api/v1/citizens/consents/latest"]["get"]["parameters"]["query"],
  ) {
    return this.client.GET("/api/v1/citizens/consents/latest", {
      params: { query },
    });
  }

  async submitConsent(
    body: NonNullable<
      paths["/api/v1/citizens/consents/"]["post"]["requestBody"]
    >["content"]["application/json"],
  ) {
    return this.client.POST("/api/v1/citizens/consents/", {
      body,
    });
  }

  async listConsents(
    query: paths["/api/v1/citizens/consents/"]["get"]["parameters"]["query"],
  ) {
    return this.client.GET("/api/v1/citizens/consents/", {
      params: { query },
    });
  }

  async getLatestConsentStatement(
    query: paths["/api/v1/citizens/consent-statements/latest"]["get"]["parameters"]["query"],
  ) {
    return this.client.GET("/api/v1/citizens/consent-statements/latest", {
      params: { query },
    });
  }
}
