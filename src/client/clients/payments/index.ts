import type createClient from "openapi-fetch";
import { PAYMENTS } from "../../../types/index.js";
import BaseClient from "../../base-client.js";
import type { paths } from "./schema.js";

class Payments extends BaseClient<paths> {
  protected declare client: ReturnType<typeof createClient<paths>>;
  protected serviceName = PAYMENTS;

  /**
   * PROVIDERS
   */
  async getProviders() {
    return this.client.GET("/api/v1/providers/").then(
      (response) => this.formatResponse(response),
      (reason) => this.formatError(reason),
    );
  }

  async getProviderById(
    providerId: paths["/api/v1/providers/{providerId}"]["get"]["parameters"]["path"]["providerId"],
  ) {
    return this.client
      .GET("/api/v1/providers/{providerId}", {
        params: {
          path: {
            providerId,
          },
        },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async createProvider(
    data: paths["/api/v1/providers/"]["post"]["requestBody"]["content"]["application/json"],
  ) {
    return this.client
      .POST("/api/v1/providers/", {
        body: data,
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async updateProvider(
    providerId: paths["/api/v1/providers/{providerId}"]["put"]["parameters"]["path"]["providerId"],
    data: paths["/api/v1/providers/{providerId}"]["put"]["requestBody"]["content"]["application/json"],
  ) {
    return this.client
      .PUT("/api/v1/providers/{providerId}", {
        params: {
          path: {
            providerId,
          },
        },
        body: data,
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  /**
   * PAYMENT REQUESTS
   */

  async getPaymentRequests(
    query: paths["/api/v1/requests/"]["get"]["parameters"]["query"],
  ) {
    return this.client
      .GET("/api/v1/requests/", {
        params: {
          query,
        },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async getPaymentRequest(
    requestId: paths["/api/v1/requests/{requestId}"]["get"]["parameters"]["path"]["requestId"],
  ) {
    return this.client
      .GET("/api/v1/requests/{requestId}", {
        params: {
          path: {
            requestId,
          },
        },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async getPaymentRequestTransactions(
    requestId: paths["/api/v1/requests/{requestId}/transactions"]["get"]["parameters"]["path"]["requestId"],
    query: paths["/api/v1/requests/{requestId}/transactions"]["get"]["parameters"]["query"],
  ) {
    return this.client
      .GET("/api/v1/requests/{requestId}/transactions", {
        params: {
          path: {
            requestId,
          },
          query,
        },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async createPaymentRequest(
    data: paths["/api/v1/requests/"]["post"]["requestBody"]["content"]["application/json"],
  ) {
    return this.client
      .POST("/api/v1/requests/", {
        body: data,
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async getPaymentRequestPublicInfo(
    requestId: paths["/api/v1/requests/{requestId}/public-info"]["get"]["parameters"]["path"]["requestId"],
  ) {
    return this.client
      .GET("/api/v1/requests/{requestId}/public-info", {
        params: {
          path: {
            requestId,
          },
        },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async updatePaymentRequest(
    data: paths["/api/v1/requests/"]["put"]["requestBody"]["content"]["application/json"],
  ) {
    return this.client
      .PUT("/api/v1/requests/", {
        body: data,
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async deletePaymentRequest(
    requestId: paths["/api/v1/requests/{requestId}"]["delete"]["parameters"]["path"]["requestId"],
  ) {
    return this.client
      .DELETE("/api/v1/requests/{requestId}", {
        params: {
          path: {
            requestId,
          },
        },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  /**
   * TRANSACTIONS
   */

  async getTransactions(
    query: paths["/api/v1/transactions/"]["get"]["parameters"]["query"],
  ) {
    return this.client
      .GET("/api/v1/transactions/", {
        params: {
          query,
        },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async getTransactionDetails(transactionId: string) {
    return this.client
      .GET("/api/v1/transactions/{transactionId}", {
        params: {
          path: {
            transactionId,
          },
        },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async updateTransaction(
    transactionId: paths["/api/v1/transactions/{transactionId}"]["patch"]["parameters"]["path"]["transactionId"],
    data: paths["/api/v1/transactions/{transactionId}"]["patch"]["requestBody"]["content"]["application/json"],
  ) {
    return this.client
      .PATCH("/api/v1/transactions/{transactionId}", {
        params: {
          path: {
            transactionId,
          },
        },
        body: data,
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async createTransaction(
    data: paths["/api/v1/transactions/"]["post"]["requestBody"]["content"]["application/json"],
  ) {
    return this.client
      .POST("/api/v1/transactions/", {
        body: data,
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async generatePaymentIntentId() {
    return this.client.GET("/api/v1/transactions/generatePaymentIntentId").then(
      (response) => this.formatResponse(response),
      (reason) => this.formatError(reason),
    );
  }

  async getRealexPaymentObject(
    query: paths["/api/v1/realex/paymentObject"]["get"]["parameters"]["query"],
  ) {
    return this.client
      .GET("/api/v1/realex/paymentObject", {
        params: {
          query,
        },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }
  /**
   * Citizen
   */

  async getCitizenTransactions(
    query: paths["/api/v1/citizen/transactions"]["get"]["parameters"]["query"],
  ) {
    return this.client
      .GET("/api/v1/citizen/transactions", {
        params: {
          query,
        },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async getCitizenTransactionDetails(transactionId: string) {
    return this.client
      .GET("/api/v1/citizen/transactions/{transactionId}", {
        params: {
          path: {
            transactionId,
          },
        },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  /**
   * AUDIT LOGS
   */

  async getAuditLogEvents(
    query: paths["/api/v1/auditLogs/"]["get"]["parameters"]["query"],
  ) {
    return this.client
      .GET("/api/v1/auditLogs/", {
        params: {
          query,
        },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async getAuditLogDetails(
    auditLogId: paths["/api/v1/auditLogs/{auditLogId}"]["get"]["parameters"]["path"]["auditLogId"],
  ) {
    return this.client
      .GET("/api/v1/auditLogs/{auditLogId}", {
        params: {
          path: {
            auditLogId,
          },
        },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }

  async getAuditLogEventTypes() {
    return this.client.GET("/api/v1/auditLogs/event-types").then(
      (response) => this.formatResponse(response),
      (reason) => this.formatError(reason),
    );
  }

  async getRedirectToken(
    transactionId: paths["/api/v1/transactions/{transactionId}/token"]["get"]["parameters"]["path"]["transactionId"],
  ) {
    return this.client
      .GET("/api/v1/transactions/{transactionId}/token", {
        params: {
          path: {
            transactionId,
          },
        },
      })
      .then(
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }
}

export default Payments;
