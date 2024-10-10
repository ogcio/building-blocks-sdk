import type createClient from "openapi-fetch";
import { SCHEDULER } from "../../../types/index.js";
import BaseClient from "../../base-client.js";
import type { paths } from "./schema.js";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const formatQueryResult = async (promise: Promise<any>) => {
  try {
    const result = await promise;
    if (result === undefined) {
      return { data: undefined, error: undefined };
    }
    return { data: result.data, error: result.error };
  } catch (error) {
    return { data: undefined, error };
  }
};

class Scheduler extends BaseClient {
  declare client: ReturnType<typeof createClient<paths>>;
  protected serviceName = SCHEDULER;

  async scheduleTasks(
    tasks: {
      webhookUrl: string;
      webhookAuth: string;
      executeAt: string;
    }[],
  ) {
    return formatQueryResult(
      this.client.POST("/api/v1/tasks/", {
        body: tasks,
      }),
    );
  }
}

export default Scheduler;
