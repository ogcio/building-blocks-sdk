import type createClient from "openapi-fetch";
import { PAYMENTS } from "../../../types/index.js";
import BaseClient from "../../BaseClient.js";
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

class Payments extends BaseClient {
  declare client: ReturnType<typeof createClient<paths>>;
  protected serviceName = PAYMENTS;

  /**
   * PROVIDERS
   */
  async getProviders() {
    return formatQueryResult(this.client.GET("/api/v1/providers/"));
  }

  async getProviderById(
    providerId: paths["/api/v1/providers/{providerId}"]["get"]["parameters"]["path"]["providerId"],
  ) {
    return formatQueryResult(
      this.client.GET("/api/v1/providers/{providerId}", {
        params: {
          path: {
            providerId,
          },
        },
      }),
    );
  }

  async createProvider(
    data: paths["/api/v1/providers/"]["post"]["requestBody"]["content"]["application/json"],
  ) {
    return formatQueryResult(
      this.client.POST("/api/v1/providers/", {
        body: data,
      }),
    );
  }

  async updateProvider(
    providerId: paths["/api/v1/providers/{providerId}"]["put"]["parameters"]["path"]["providerId"],
    data: paths["/api/v1/providers/{providerId}"]["put"]["requestBody"]["content"]["application/json"],
  ) {
    return formatQueryResult(
      this.client.PUT("/api/v1/providers/{providerId}", {
        params: {
          path: {
            providerId,
          },
        },
        body: data,
      }),
    );
  }

  /**
   * PAYMENT REQUESTS
   */

  async getPaymentRequests(
    query: paths["/api/v1/requests/"]["get"]["parameters"]["query"],
  ) {
    return formatQueryResult(
      this.client.GET("/api/v1/requests/", {
        params: {
          query,
        },
      }),
    );
  }

  async getPaymentRequest(
    requestId: paths["/api/v1/requests/{requestId}"]["get"]["parameters"]["path"]["requestId"],
  ) {
    return formatQueryResult(
      this.client.GET("/api/v1/requests/{requestId}", {
        params: {
          path: {
            requestId,
          },
        },
      }),
    );
  }

  async getPaymentRequestTransactions(
    requestId: paths["/api/v1/requests/{requestId}/transactions"]["get"]["parameters"]["path"]["requestId"],
    query: paths["/api/v1/requests/{requestId}/transactions"]["get"]["parameters"]["query"],
  ) {
    return formatQueryResult(
      this.client.GET("/api/v1/requests/{requestId}/transactions", {
        params: {
          path: {
            requestId,
          },
          query,
        },
      }),
    );
  }

  async createPaymentRequest(
    data: paths["/api/v1/requests/"]["post"]["requestBody"]["content"]["application/json"],
  ) {
    return formatQueryResult(
      this.client.POST("/api/v1/requests/", {
        body: data,
      }),
    );
  }

  async getPaymentRequestPublicInfo(
    requestId: paths["/api/v1/requests/{requestId}/public-info"]["get"]["parameters"]["path"]["requestId"],
  ) {
    return formatQueryResult(
      this.client.GET("/api/v1/requests/{requestId}/public-info", {
        params: {
          path: {
            requestId,
          },
        },
      }),
    );
  }

  async updatePaymentRequest(
    data: paths["/api/v1/requests/"]["put"]["requestBody"]["content"]["application/json"],
  ) {
    return formatQueryResult(
      this.client.PUT("/api/v1/requests/", {
        body: data,
      }),
    );
  }

  async deletePaymentRequest(
    requestId: paths["/api/v1/requests/{requestId}"]["delete"]["parameters"]["path"]["requestId"],
  ) {
    return formatQueryResult(
      this.client.DELETE("/api/v1/requests/{requestId}", {
        params: {
          path: {
            requestId,
          },
        },
      }),
    );
  }

  /**
   * TRANSACTIONS
   */

  async getTransactions(
    query: paths["/api/v1/transactions/"]["get"]["parameters"]["query"],
  ) {
    return formatQueryResult(
      this.client.GET("/api/v1/transactions/", {
        params: {
          query,
        },
      }),
    );
  }

  async getTransactionDetails(transactionId: string) {
    return formatQueryResult(
      this.client.GET("/api/v1/transactions/{transactionId}", {
        params: {
          path: {
            transactionId,
          },
        },
      }),
    );
  }

  async updateTransaction(
    transactionId: paths["/api/v1/transactions/{transactionId}"]["patch"]["parameters"]["path"]["transactionId"],
    data: paths["/api/v1/transactions/{transactionId}"]["patch"]["requestBody"]["content"]["application/json"],
  ) {
    return formatQueryResult(
      this.client.PATCH("/api/v1/transactions/{transactionId}", {
        params: {
          path: {
            transactionId,
          },
        },
        body: data,
      }),
    );
  }

  async createTransaction(
    data: paths["/api/v1/transactions/"]["post"]["requestBody"]["content"]["application/json"],
  ) {
    return formatQueryResult(
      this.client.POST("/api/v1/transactions/", {
        body: data,
      }),
    );
  }

  async generatePaymentIntentId() {
    return formatQueryResult(
      this.client.GET("/api/v1/transactions/generatePaymentIntentId"),
    );
  }

  async getRealexPaymentObject(
    query: paths["/api/v1/realex/paymentObject"]["get"]["parameters"]["query"],
  ) {
    return formatQueryResult(
      this.client.GET("/api/v1/realex/paymentObject", {
        params: {
          query,
        },
      }),
    );
  }
  /**
   * Citizen
   */

  async getCitizenTransactions(
    query: paths["/api/v1/citizen/transactions"]["get"]["parameters"]["query"],
  ) {
    return formatQueryResult(
      this.client.GET("/api/v1/citizen/transactions", {
        params: {
          query,
        },
      }),
    );
  }

  async getCitizenTransactionDetails(transactionId: string) {
    return formatQueryResult(
      this.client.GET("/api/v1/citizen/transactions/{transactionId}", {
        params: {
          path: {
            transactionId,
          },
        },
      }),
    );
  }

  /**
   * TESTS - To remove once Logto has been fully integrated
   */

  async testCitizenAuth() {
    return formatQueryResult(this.client.GET("/api/v1/test/citizen", {}));
  }

  async testPublicServantAuth() {
    return formatQueryResult(this.client.GET("/api/v1/test/pub-ser", {}));
  }

  /**
   * AUDIT LOGS
   */

  async getAuditLogEvents(
    query: paths["/api/v1/auditLogs/"]["get"]["parameters"]["query"],
  ) {
    return formatQueryResult(
      this.client.GET("/api/v1/auditLogs/", {
        params: {
          query,
        },
      }),
    );
  }

  async getAuditLogDetails(
    auditLogId: paths["/api/v1/auditLogs/{auditLogId}"]["get"]["parameters"]["path"]["auditLogId"],
  ) {
    return formatQueryResult(
      this.client.GET("/api/v1/auditLogs/{auditLogId}", {
        params: {
          path: {
            auditLogId,
          },
        },
      }),
    );
  }

  async getAuditLogEventTypes() {
    return formatQueryResult(this.client.GET("/api/v1/auditLogs/event-types"));
  }
}

export default Payments;
