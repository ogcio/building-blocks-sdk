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

export class Scheduler {
  // biome-ignore lint/suspicious/noExplicitAny: waiting for @edge33 PR
  private client: any;
  constructor() {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    this.client = {} as any;
  }

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
