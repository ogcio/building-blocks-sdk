import type createClient from "openapi-fetch";
import { SCHEDULER } from "../../../types/index.js";
import BaseClient from "../../base-client.js";
import { formatError, formatResponse } from "../../utils/client-utils.js";
import type { paths } from "./schema.js";

class Scheduler extends BaseClient<paths> {
  declare client: ReturnType<typeof createClient<paths>>;
  protected serviceName = SCHEDULER;

  async scheduleTasks(
    tasks: {
      webhookUrl: string;
      webhookAuth: string;
      executeAt: string;
    }[],
  ) {
    return this.client
      .POST("/api/v1/tasks/", {
        body: tasks,
      })
      .then(
        (response) => formatResponse(response),
        (reason) => formatError(reason),
      );
  }
}

export default Scheduler;
