import createError from "http-errors";
import type createClient from "openapi-fetch";
import {
  type Logger,
  PROFILE,
  type TokenFunction,
} from "../../../types/index.js";
import { BaseClient } from "../../base-client.js";
import {
  formatError,
  formatResponse,
  throwIfEmpty,
} from "../../utils/client-utils.js";
import { ProfileCitizen } from "./citizen.js";
import { ProfileOrganisation } from "./organisation.js";
import type { paths } from "./schema.js";
export class Profile extends BaseClient<paths> {
  protected declare client: ReturnType<typeof createClient<paths>>;
  protected serviceName = PROFILE;
  public readonly citizen: ProfileCitizen;
  public readonly organisation: ProfileOrganisation;

  constructor(params: {
    baseUrl: string;
    getTokenFn?: TokenFunction;
    logger?: Logger;
  }) {
    super(params);
    this.citizen = new ProfileCitizen(this.client);
    this.organisation = new ProfileOrganisation(this.client);
  }

  async getProfile(profileId: string, privateDetails = false) {
    throwIfEmpty(profileId);
    const query = {
      privateDetails: (privateDetails ? "true" : "false") as "true" | "false",
    };
    return this.client
      .GET("/api/v1/profiles/{profileId}", {
        params: { path: { profileId }, query },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async createProfile(
    data: NonNullable<
      NonNullable<
        paths["/api/v1/profiles/import-profiles"]["post"]["requestBody"]
      >["content"]["application/json"]["profiles"]
    >[number],
    privateDetails = false,
  ) {
    const query = {
      privateDetails: (privateDetails ? "true" : "false") as "true" | "false",
    };
    return this.client
      .POST("/api/v1/profiles/import-profiles", {
        body: { profiles: [data] },
        params: { query },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async updateProfile(
    profileId: string,
    data: NonNullable<
      paths["/api/v1/profiles/{profileId}"]["put"]["requestBody"]
    >["content"]["application/json"],
    organizationId?: string,
  ) {
    throwIfEmpty(profileId);

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

  async patchProfile(
    profileId: string,
    data?: NonNullable<
      paths["/api/v1/profiles/{profileId}"]["patch"]["requestBody"]
    >["content"]["application/json"],
    organizationId?: string,
  ) {
    throwIfEmpty(profileId);

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

  async selectProfiles(
    ids: paths["/api/v1/profiles/select-profiles"]["get"]["parameters"]["query"]["ids"],
  ) {
    for (const id of ids) {
      throwIfEmpty(id);
    }
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

  async listProfilesPost(params: {
    query: paths["/api/v1/profiles/"]["post"]["parameters"]["query"];
    body: paths["/api/v1/profiles/"]["post"]["requestBody"]["content"]["application/json"];
  }) {
    return this.client
      .POST("/api/v1/profiles/", {
        params: {
          query: params.query,
        },
        body: params.body,
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async importProfiles(
    toImport: {
      file?: File;
      records?: NonNullable<
        paths["/api/v1/profiles/import-profiles"]["post"]["requestBody"]
      >["content"]["application/json"]["profiles"];
    },
    privateDetails = false,
    onlyPrivateDetails = false,
    importType: "ppsn-only" | "full" = "full",
  ) {
    const query = {
      privateDetails: (privateDetails ? "true" : "false") as "true" | "false",
      onlyPrivateDetails: (onlyPrivateDetails ? "true" : "false") as
        | "true"
        | "false",
      importType,
    };
    if (toImport.file) {
      const { data, error } = await this.client.POST(
        "/api/v1/profiles/import-profiles",
        {
          body: {
            file: toImport.file,
          },
          params: { query },
          bodySerializer: (body: unknown) => {
            const parsed = body as { file?: File } | undefined;
            if (!parsed || !parsed.file) {
              throw createError.BadRequest("File is missing!");
            }
            const formData = new FormData();
            formData.set("file", parsed.file);
            return formData;
          },
        },
      );
      return { data, error };
    }

    return this.client
      .POST("/api/v1/profiles/imports/", {
        body: { profiles: toImport.records },
        params: { query },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async importPPSNOnlyProfiles(
    ppsnOnlyProfiles: NonNullable<
      paths["/api/v1/profiles/import-profiles"]["post"]["requestBody"]
    >["content"]["application/json"]["ppsnOnlyProfiles"],
    privateDetails = false,
    onlyPrivateDetails = false,
  ) {
    const query = {
      privateDetails: (privateDetails ? "true" : "false") as "true" | "false",
      onlyPrivateDetails: (onlyPrivateDetails ? "true" : "false") as
        | "true"
        | "false",
      importType: "ppsn-only" as const,
    };

    return this.client
      .POST("/api/v1/profiles/import-profiles", {
        body: { ppsnOnlyProfiles },
        params: { query },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async downloadProfilesCsvTemplate() {
    return this.client
      .GET("/api/v1/profiles/imports/template", {
        parseAs: "blob",
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async listProfileImports(
    query: paths["/api/v1/profiles/imports/"]["get"]["parameters"]["query"],
  ) {
    return this.client
      .GET("/api/v1/profiles/imports/", {
        params: { query },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async getProfileImport(
    importId: paths["/api/v1/profiles/imports/{importId}"]["get"]["parameters"]["path"]["importId"],
  ) {
    throwIfEmpty(importId);
    return this.client
      .GET("/api/v1/profiles/imports/{importId}", {
        params: { path: { importId } },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async getOrganisation(
    organisationId: paths["/api/v1/organisations/{organisationId}"]["get"]["parameters"]["path"]["organisationId"],
  ) {
    throwIfEmpty(organisationId);
    return this.client.GET("/api/v1/organisations/{organisationId}", {
      params: { path: { organisationId } },
    });
  }
}
