import type { FetchResponse } from "openapi-fetch";
import createClient from "openapi-fetch";

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

export async function formatQueryResult<T, O>(
  promise: Promise<FetchResponse<T, O, "application/json">>,
) {
  try {
    const result = await promise;

    return { data: result.data, error: result.error };
  } catch (error) {
    return { data: undefined, error };
  }
}
