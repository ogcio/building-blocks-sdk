import type createClient from "openapi-fetch";
import { PROFILE } from "../../../types/index.js";
import BaseClient from "../../base-client.js";
import type { paths } from "./schema.js";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const formatQueryResult = async (promise: Promise<any>) => {
  try {
    const result = await promise;
    return { data: result.data, error: result.error };
  } catch (error) {
    return { data: undefined, error };
  }
};

class Profile extends BaseClient {
  declare client: ReturnType<typeof createClient<paths>>;
  protected serviceName = PROFILE;

  async getAddresses() {
    return formatQueryResult(this.client.GET("/api/v1/addresses/"));
  }

  async getAddress(addressId: string) {
    return formatQueryResult(
      this.client.GET("/api/v1/addresses/{addressId}", {
        params: { path: { addressId } },
      }),
    );
  }

  async createAddress(
    data: paths["/api/v1/addresses/"]["post"]["requestBody"]["content"]["application/json"],
  ) {
    return formatQueryResult(
      this.client.POST("/api/v1/addresses/", {
        body: data,
      }),
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
    return formatQueryResult(
      this.client.PATCH("/api/v1/addresses/{addressId}", {
        params: { path: { addressId } },
        body: data,
      }),
    );
  }

  async updateAddress(
    addressId: string,
    data: paths["/api/v1/addresses/{addressId}"]["put"]["requestBody"]["content"]["application/json"],
  ) {
    return formatQueryResult(
      this.client.PUT("/api/v1/addresses/{addressId}", {
        params: { path: { addressId } },
        body: data,
      }),
    );
  }

  async deleteAddress(addressId: string) {
    return formatQueryResult(
      this.client.DELETE("/api/v1/addresses/{addressId}", {
        params: { path: { addressId } },
      }),
    );
  }

  async getEntitlements() {
    return formatQueryResult(this.client.GET("/api/v1/entitlements/"));
  }

  async getUser(userId: string) {
    return formatQueryResult(
      this.client.GET("/api/v1/users/{userId}", {
        params: { path: { userId } },
      }),
    );
  }

  async createUser(
    data: paths["/api/v1/users/"]["post"]["requestBody"]["content"]["application/json"],
  ) {
    return formatQueryResult(
      this.client.POST("/api/v1/users/", {
        body: data,
      }),
    );
  }

  async updateUser(
    userId: string,
    data: paths["/api/v1/users/{userId}"]["put"]["requestBody"]["content"]["application/json"],
  ) {
    return formatQueryResult(
      this.client.PUT("/api/v1/users/{userId}", {
        params: { path: { userId } },
        body: data,
      }),
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
    return formatQueryResult(
      this.client.PATCH("/api/v1/users/{userId}", {
        params: { path: { userId } },
        body: data,
      }),
    );
  }

  async findUser(
    query: paths["/api/v1/users/find"]["get"]["parameters"]["query"],
  ) {
    return formatQueryResult(
      this.client.GET("/api/v1/users/find", {
        params: {
          query,
        },
      }),
    );
  }

  async selectUsers(
    ids: paths["/api/v1/users/select"]["post"]["requestBody"]["content"]["application/json"]["ids"],
  ) {
    const res = await this.client.POST("/api/v1/users/select", {
      body: { ids },
    });

    return {
      data: res.data?.data,
      error: res.error,
    };
  }
}

export default Profile;
