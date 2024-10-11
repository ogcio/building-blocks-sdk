export interface PaginationParams {
  offset?: string | number;
  limit?: string | number;
}

export type ResponseJsonValue =
  | string
  | number
  | boolean
  | null
  | { [key: string]: ResponseJsonValue }
  | ResponseJsonValue[];

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
