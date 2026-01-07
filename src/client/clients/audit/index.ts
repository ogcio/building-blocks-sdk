import type createClient from "openapi-fetch";
import { AUDIT_COLLECTOR } from "../../../types/index.js";
import { BaseClient } from "../../base-client.js";
import { formatError, formatResponse } from "../../utils/client-utils.js";
import type { paths } from "./schema.js";

export class AuditCollector extends BaseClient<paths> {
  protected declare client: ReturnType<typeof createClient<paths>>;
  protected serviceName = AUDIT_COLLECTOR;

  async sendLogs(
    logs: NonNullable<
      paths["/api/v1/audit-logs/"]["post"]["requestBody"]
    >["content"]["application/json"],
  ) {
    return this.client
      .POST("/api/v1/audit-logs/", {
        body: logs,
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }
}
