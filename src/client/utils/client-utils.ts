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
