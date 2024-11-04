import type createClient from "openapi-fetch";
import { PROFILE } from "../../../types/index.js";
import { BaseClient } from "../../base-client.js";
import type { paths } from "./schema.js";

export class Profile extends BaseClient<paths> {
  protected declare client: ReturnType<typeof createClient<paths>>;
  protected serviceName = PROFILE;

  async getAddresses() {
    return this.client.GET("/api/v1/addresses/").then(
      (response) => this.formatResponse(response),
      (reason) => this.formatError(reason),
    );
  }

  async getAddress(addressId: string) {
    return this.client
      .GET("/api/v1/addresses/{addressId}", {
        params: { path: { addressId } },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async createAddress(
    data: paths["/api/v1/addresses/"]["post"]["requestBody"]["content"]["application/json"],
  ) {
    return this.client
      .POST("/api/v1/addresses/", {
        body: data,
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async patchAddress(
    addressId: string,
    data: NonNullable<
      paths["/api/v1/addresses/{addressId}"]["patch"]["requestBody"]
    >["content"]["application/json"],
  ) {
    if (!data || Object.keys(data).length === 0) {
      return;
    }
    return this.client
      .PATCH("/api/v1/addresses/{addressId}", {
        params: { path: { addressId } },
        body: data,
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async updateAddress(
    addressId: string,
    data: paths["/api/v1/addresses/{addressId}"]["put"]["requestBody"]["content"]["application/json"],
  ) {
    return this.client
      .PUT("/api/v1/addresses/{addressId}", {
        params: { path: { addressId } },
        body: data,
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async deleteAddress(addressId: string) {
    return this.client
      .DELETE("/api/v1/addresses/{addressId}", {
        params: { path: { addressId } },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async getEntitlements() {
    return this.client.GET("/api/v1/entitlements/").then(
      (response) => this.formatResponse(response),
      (reason) => this.formatError(reason),
    );
  }

  async getUser(userId: string) {
    return this.client
      .GET("/api/v1/users/{userId}", {
        params: { path: { userId } },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async createUser(
    data: paths["/api/v1/users/"]["post"]["requestBody"]["content"]["application/json"],
  ) {
    return this.client
      .POST("/api/v1/users/", {
        body: data,
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async updateUser(
    userId: string,
    data: paths["/api/v1/users/{userId}"]["put"]["requestBody"]["content"]["application/json"],
  ) {
    return this.client
      .PUT("/api/v1/users/{userId}", {
        params: { path: { userId } },
        body: data,
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async patchUser(
    userId: string,
    data?: NonNullable<
      paths["/api/v1/users/{userId}"]["patch"]["requestBody"]
    >["content"]["application/json"],
  ) {
    if (!data || Object.keys(data).length === 0) {
      return;
    }
    return this.client
      .PATCH("/api/v1/users/{userId}", {
        params: { path: { userId } },
        body: data,
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async findUser(
    query: paths["/api/v1/users/find"]["get"]["parameters"]["query"],
  ) {
    return this.client
      .GET("/api/v1/users/find", {
        params: {
          query,
        },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async selectUsers(
    ids: paths["/api/v1/users/select"]["post"]["requestBody"]["content"]["application/json"]["ids"],
  ) {
    return this.client
      .POST("/api/v1/users/select", {
        body: { ids },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }
}
