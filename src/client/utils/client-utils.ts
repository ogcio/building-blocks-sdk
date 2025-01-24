import type { FetchResponse, ParseAsResponse } from "openapi-fetch";
import type {
  ErrorStatus,
  FilterKeys,
  OkStatus,
  ResponseContent,
  ResponseObjectMap,
} from "openapi-typescript-helpers";
import type { Logger } from "../../types/index.js";

export interface PaginationParams {
  offset?: string | number;
  limit?: string | number;
}

export type DataResponseValue<T, O> = ParseAsResponse<
  FilterKeys<
    ResponseContent<FilterKeys<ResponseObjectMap<T>, OkStatus>>,
    "application/json"
  >,
  O
> & {
  error: ParseAsResponse<
    FilterKeys<
      ResponseContent<FilterKeys<ResponseObjectMap<T>, ErrorStatus>>,
      "application/json"
    >,
    O
  >;
};

export function toStringOrUndefined(variable: number | boolean | undefined) {
  return variable === undefined ? undefined : String(variable);
}

export function preparePaginationParams(paginationParams?: PaginationParams): {
  offset?: string;
  limit?: string;
} {
  const output: { offset?: string; limit?: string } = {};

  if (paginationParams?.offset) {
    output.offset = String(paginationParams.offset);
  }

  if (paginationParams?.limit) {
    output.limit = String(paginationParams.limit);
  }

  return output;
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function formatResponse<G extends Record<string | number, any>, O>(
  response: FetchResponse<G, O, "application/json">,
  serviceName: string,
  logger?: Logger,
): DataResponseValue<G, O> {
  let outputData = undefined;
  let outputMetadata = undefined;

  if (!response) {
    logger?.trace(`${serviceName} - Undefined response`);
    return {} as DataResponseValue<G, O>;
  }

  logger?.trace({ rawResponse: response }, `${serviceName} - Raw response`);
  if (response.data) {
    const dataEntries = Object.entries(response.data);
    // by docs the body should contain a "data"
    // properties with the response values
    const containsData = dataEntries.find((x) => x[0] === "data");
    const containsMetadata = dataEntries.find((x) => x[0] === "metadata");

    if (containsMetadata) {
      outputMetadata = containsMetadata[1];
    }
    outputData = containsData ? containsData[1] : response.data;
  }

  const formattedResponse = {
    data: outputData,
    metadata: outputMetadata,
    error: response.error,
  } as unknown as DataResponseValue<G, O>;

  logger?.trace({ formattedResponse }, `${serviceName} - Formatted response`);

  return formattedResponse;
}

export function formatError<G, O>(
  reason: unknown,
  serviceName: string,
  logger?: Logger,
): DataResponseValue<G, O> {
  if (logger) {
    logger.trace({ reason }, `${serviceName} - Got error`);
  }
  return { error: reason } as unknown as DataResponseValue<G, O>;
}

export function parseJwtToken(token: string): {
  header: Record<string, unknown>;
  payload: Record<string, unknown>;
} {
  const parts = token.split(".");
  if (!parts || parts.length !== 3) {
    throw "invalid jwt format";
  }

  const [headerPart, payloadPart] = parts;
  try {
    return {
      header: JSON.parse(Buffer.from(headerPart, "base64").toString()),
      payload: JSON.parse(Buffer.from(payloadPart, "base64").toString()),
    };
  } catch (_err) {
    throw "invalid jwt format";
  }
}

export function getNumberValueFromObject(
  object: Record<string, unknown>,
  key: string,
): number {
  const value = object[key];
  if (value === null) {
    throw new Error("failed to cast null to number");
  }

  if (value === undefined) {
    throw new Error("failed to cast undefined to number");
  }

  if (Number.isNaN(Number(value))) {
    throw new Error(`failed to cast ${value} to number`);
  }
  return Number(value);
}

export function ensureStringIsNotEmpty(input: string): void {
  if (!input || input.length === 0) {
    throw Error("Parameter cannot be an empty string!");
  }
}
