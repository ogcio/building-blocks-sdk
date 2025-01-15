import type createClient from "openapi-fetch";
import { PROFILE } from "../../../types/index.js";
import { BaseClient } from "../../base-client.js";
import { formatError, formatResponse } from "../../utils/client-utils.js";
import type { paths } from "./schema.js";
export class Profile extends BaseClient<paths> {
  protected declare client: ReturnType<typeof createClient<paths>>;
  protected serviceName = PROFILE;

  /**
   * @deprecated Use getProfile() instead of getUser()
   */
  async getUser(profileId: string) {
    console.warn("Warning: getUser() is deprecated. Use getProfile() instead.");
    return this.getProfile(profileId);
  }

  async getProfile(profileId: string) {
    return this.client
      .GET("/api/v1/profiles/{profileId}", {
        params: { path: { profileId } },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  /**
   * @deprecated Use getProfile() instead of getUser()
   */
  async createUser(
    data: NonNullable<
      paths["/api/v1/profiles/import-profiles"]["post"]["requestBody"]
    >["content"]["application/json"],
  ) {
    console.warn(
      "Warning: createUser() is deprecated. Use createProfile() instead.",
    );
    return this.createProfile(data);
  }

  async createProfile(
    data: NonNullable<
      paths["/api/v1/profiles/import-profiles"]["post"]["requestBody"]
    >["content"]["application/json"],
  ) {
    return this.client
      .POST("/api/v1/profiles/import-profiles", {
        body: data,
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  /**
   * @deprecated Use getProfile() instead of getUser()
   */
  async updateUser(
    profileId: string,
    data: NonNullable<
      paths["/api/v1/profiles/{profileId}"]["put"]["requestBody"]
    >["content"]["application/json"],
    organizationId?: string,
  ) {
    console.warn(
      "Warning: updateUser() is deprecated. Use updateProfile() instead.",
    );
    return this.updateProfile(profileId, data, organizationId);
  }

  async updateProfile(
    profileId: string,
    data: NonNullable<
      paths["/api/v1/profiles/{profileId}"]["put"]["requestBody"]
    >["content"]["application/json"],
    organizationId?: string,
  ) {
    return this.client
      .PUT("/api/v1/profiles/{profileId}", {
        params: { path: { profileId }, query: { organizationId } },
        body: data,
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  /**
   * @deprecated Use getProfile() instead of getUser()
   */
  async patchUser(
    profileId: string,
    data: NonNullable<
      paths["/api/v1/profiles/{profileId}"]["put"]["requestBody"]
    >["content"]["application/json"],
    organizationId?: string,
  ) {
    console.warn(
      "Warning: patchUser() is deprecated. Use patchProfile() instead.",
    );
    return this.patchProfile(profileId, data, organizationId);
  }

  async patchProfile(
    profileId: string,
    data?: NonNullable<
      paths["/api/v1/profiles/{profileId}"]["patch"]["requestBody"]
    >["content"]["application/json"],
    organizationId?: string,
  ) {
    if (!data || Object.keys(data).length === 0) {
      return;
    }
    return this.client
      .PATCH("/api/v1/profiles/{profileId}", {
        params: { path: { profileId }, query: { organizationId } },
        body: data,
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  /**
   * @deprecated Use getProfile() instead of getUser()
   */
  async findUser(
    query: paths["/api/v1/profiles/find-profile"]["get"]["parameters"]["query"],
  ) {
    console.warn(
      "Warning: findUser() is deprecated. Use findProfile() instead.",
    );
    return this.findProfile(query);
  }

  async findProfile(
    query: paths["/api/v1/profiles/find-profile"]["get"]["parameters"]["query"],
  ) {
    return this.client
      .GET("/api/v1/profiles/find-profile", {
        params: {
          query,
        },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  /**
   * @deprecated Use getProfile() instead of getUser()
   */
  async selectUsers(
    ids: paths["/api/v1/profiles/select-profiles"]["get"]["parameters"]["query"]["ids"],
  ) {
    console.warn(
      "Warning: selectUsers() is deprecated. Use selectProfiles() instead.",
    );
    return this.selectProfiles(ids);
  }

  async selectProfiles(
    ids: paths["/api/v1/profiles/select-profiles"]["get"]["parameters"]["query"]["ids"],
  ) {
    return this.client
      .GET("/api/v1/profiles/select-profiles", {
        params: {
          query: {
            ids,
          },
        },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async listProfiles(
    query: paths["/api/v1/profiles/"]["get"]["parameters"]["query"],
  ) {
    return this.client
      .GET("/api/v1/profiles/", {
        params: {
          query,
        },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }
}
