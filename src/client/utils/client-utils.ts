import type { FetchResponse } from "openapi-fetch";

type ResponseJsonValue =
  | string
  | number
  | boolean
  | null
  | { [key: string]: ResponseJsonValue }
  | ResponseJsonValue[];

export interface PaginationParams {
  offset?: string | number;
  limit?: string | number;
}

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

export function formatResponse<T, O>(
  response: FetchResponse<T, O, "application/json">,
): {
  data?: ResponseJsonValue;
  metadata?: ResponseJsonValue;
  error?: ResponseJsonValue;
} {
  if (response.data) {
    const dataEntries = Object.entries(response.data);
    // by docs the body should contain a "data"
    // properties with the response values
    const containsData = dataEntries.find((x) => x[0] === "data");
    const containsMetadata = dataEntries.find((x) => x[0] === "metadata");
    const output: { data?: ResponseJsonValue; metadata?: ResponseJsonValue } =
      {};
    if (containsMetadata) {
      output.metadata = containsMetadata[1] as ResponseJsonValue;
    }
    output.data = containsData
      ? (containsData[1] as ResponseJsonValue)
      : response.data;
    return output;
  }

  return { error: response.error };
}

export function formatError(reason: unknown): { error?: ResponseJsonValue } {
  return { error: reason as ResponseJsonValue };
}
