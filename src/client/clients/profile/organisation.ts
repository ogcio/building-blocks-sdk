import type createClient from "openapi-fetch";
import type { paths } from "./schema.js";

export class ProfileOrganisation {
  constructor(
    private readonly client: ReturnType<typeof createClient<paths>>,
  ) {}

  async getLatestConsentStatement(
    query: paths["/api/v1/organisations/consent-statements/latest"]["get"]["parameters"]["query"],
  ) {
    return this.client.GET("/api/v1/organisations/consent-statements/latest", {
      params: { query },
    });
  }
}
