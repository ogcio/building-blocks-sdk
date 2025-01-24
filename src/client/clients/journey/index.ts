import type createClient from "openapi-fetch";
import { JOURNEY } from "../../../types/index.js";
import { BaseClient } from "../../base-client.js";
import {
  formatError,
  formatResponse,
  throwIfEmpty,
} from "../../utils/client-utils.js";
import type { paths } from "./schema.js";

export class Journey extends BaseClient<paths> {
  protected declare client: ReturnType<typeof createClient<paths>>;
  protected serviceName = JOURNEY;

  /**
   * JOURNEY STEP CONNECTIONS
   */
  async getConnectionById(
    connectionId: paths["/api/v1/journey_step_connections/{connectionId}"]["get"]["parameters"]["path"]["connectionId"],
  ) {
    throwIfEmpty(connectionId);
    return this.client
      .GET("/api/v1/journey_step_connections/{connectionId}", {
        params: {
          path: {
            connectionId,
          },
        },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async createConnection(
    data: paths["/api/v1/journey_step_connections/"]["post"]["requestBody"]["content"]["application/json"],
  ) {
    return this.client
      .POST("/api/v1/journey_step_connections/", {
        body: data,
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async deleteConnection(
    connectionId: paths["/api/v1/journey_step_connections/{connectionId}"]["delete"]["parameters"]["path"]["connectionId"],
  ) {
    throwIfEmpty(connectionId);
    return this.client
      .DELETE("/api/v1/journey_step_connections/{connectionId}", {
        params: {
          path: {
            connectionId,
          },
        },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  /**
   * JOURNEY STEPs
   */
  async getStepById(
    stepId: paths["/api/v1/journey_steps/{stepId}"]["get"]["parameters"]["path"]["stepId"],
  ) {
    throwIfEmpty(stepId);
    return this.client
      .GET("/api/v1/journey_steps/{stepId}", {
        params: {
          path: {
            stepId,
          },
        },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async createStep(
    data: paths["/api/v1/journey_steps/"]["post"]["requestBody"]["content"]["application/json"],
  ) {
    return this.client
      .POST("/api/v1/journey_steps/", {
        body: data,
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async deleteStep(
    stepId: paths["/api/v1/journey_steps/{stepId}"]["delete"]["parameters"]["path"]["stepId"],
  ) {
    throwIfEmpty(stepId);
    return this.client
      .DELETE("/api/v1/journey_steps/{stepId}", {
        params: {
          path: {
            stepId,
          },
        },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async updateStep(
    stepId: paths["/api/v1/journey_steps/{stepId}"]["put"]["parameters"]["path"]["stepId"],
    data: paths["/api/v1/journey_steps/{stepId}"]["put"]["requestBody"]["content"]["application/json"],
  ) {
    throwIfEmpty(stepId);
    return this.client
      .PUT("/api/v1/journey_steps/{stepId}", {
        params: {
          path: {
            stepId,
          },
        },
        body: data,
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  /**
   * JOURNEYS
   */
  async getJourneyPublicInfo(
    journeyId: paths["/api/v1/journeys/{journeyId}/public-info"]["get"]["parameters"]["path"]["journeyId"],
  ) {
    throwIfEmpty(journeyId);
    return this.client
      .GET("/api/v1/journeys/{journeyId}/public-info", {
        params: {
          path: {
            journeyId,
          },
        },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async getJourneyById(
    journeyId: paths["/api/v1/journeys/{journeyId}"]["get"]["parameters"]["path"]["journeyId"],
  ) {
    throwIfEmpty(journeyId);
    return this.client
      .GET("/api/v1/journeys/{journeyId}", {
        params: {
          path: {
            journeyId,
          },
        },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async getJourneys(
    query: paths["/api/v1/journeys/"]["get"]["parameters"]["query"],
  ) {
    return this.client
      .GET("/api/v1/journeys/", {
        params: {
          query,
        },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async createJourney(
    data: paths["/api/v1/journeys/"]["post"]["requestBody"]["content"]["application/json"],
  ) {
    return this.client
      .POST("/api/v1/journeys/", {
        body: data,
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async updateJourney(
    journeyId: paths["/api/v1/journeys/{journeyId}"]["put"]["parameters"]["path"]["journeyId"],
    data: paths["/api/v1/journeys/{journeyId}"]["put"]["requestBody"]["content"]["application/json"],
  ) {
    throwIfEmpty(journeyId);
    return this.client
      .PUT("/api/v1/journeys/{journeyId}", {
        params: {
          path: { journeyId },
        },
        body: data,
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  /**
   * RUNS
   */

  async getUserRunById(
    runId: paths["/api/v1/executor/runs/self/{runId}"]["get"]["parameters"]["path"]["runId"],
  ) {
    throwIfEmpty(runId);
    return this.client
      .GET("/api/v1/executor/runs/self/{runId}", {
        params: {
          path: {
            runId,
          },
        },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async getUserRuns() {
    return this.client.GET("/api/v1/executor/runs/self", {}).then(
      (response) => formatResponse(response, this.serviceName, this.logger),
      (reason) => formatError(reason, this.serviceName, this.logger),
    );
  }

  async getRunsByJourneyId(
    journeyId: paths["/api/v1/executor/runs/journeys/{journeyId}"]["get"]["parameters"]["path"]["journeyId"],
  ) {
    throwIfEmpty(journeyId);
    return this.client
      .GET("/api/v1/executor/runs/journeys/{journeyId}", {
        params: {
          path: {
            journeyId,
          },
        },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async getRunById(
    runId: paths["/api/v1/executor/runs/{runId}"]["get"]["parameters"]["path"]["runId"],
  ) {
    throwIfEmpty(runId);
    return this.client
      .GET("/api/v1/executor/runs/{runId}", {
        params: {
          path: {
            runId,
          },
        },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async getAllRuns(
    query: paths["/api/v1/executor/runs"]["get"]["parameters"]["query"],
  ) {
    return this.client
      .GET("/api/v1/executor/runs", {
        params: {
          query,
        },
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async createRun(
    data: paths["/api/v1/executor/run"]["post"]["requestBody"]["content"]["application/json"],
  ) {
    return this.client
      .POST("/api/v1/executor/run", {
        body: data,
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async executeStep(
    data: paths["/api/v1/executor/execute"]["post"]["requestBody"]["content"]["application/json"],
  ) {
    return this.client
      .POST("/api/v1/executor/execute", {
        body: data,
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async transitionStep(
    data: paths["/api/v1/executor/transition"]["post"]["requestBody"]["content"]["application/json"],
  ) {
    return this.client
      .POST("/api/v1/executor/transition", {
        body: data,
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }

  async getJourneySummary(
    data: paths["/api/v1/executor/get-summary"]["post"]["requestBody"]["content"]["application/json"],
  ) {
    return this.client
      .POST("/api/v1/executor/get-summary", {
        body: data,
      })
      .then(
        (response) => formatResponse(response, this.serviceName, this.logger),
        (reason) => formatError(reason, this.serviceName, this.logger),
      );
  }
}
