import type { ParseAsResponse } from "openapi-fetch";
import type {
  ErrorResponse,
  FilterKeys,
  GetValueWithDefault,
  OkStatus,
  ResponseContent,
  ResponseObjectMap,
} from "openapi-typescript-helpers";

export interface PaginationParams {
  offset?: string | number;
  limit?: string | number;
}

export type DataResponseValue<T, O> = ParseAsResponse<
  GetValueWithDefault<
    ResponseContent<FilterKeys<ResponseObjectMap<T>, OkStatus>>,
    "application/json",
    Record<string, never>
  >,
  O
> & {
  error: ErrorResponse<ResponseObjectMap<T>, "application/json"> | undefined;
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
