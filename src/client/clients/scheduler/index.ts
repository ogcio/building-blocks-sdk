import type createClient from "openapi-fetch";
import { SCHEDULER } from "../../../types/index.js";
import BaseClient from "../../base-client.js";
import type { paths } from "./schema.js";

class Scheduler extends BaseClient<paths> {
  protected declare client: ReturnType<typeof createClient<paths>>;
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
        (response) => this.formatResponse(response),
        (reason) => this.formatError(reason),
      );
  }
}

export default Scheduler;
