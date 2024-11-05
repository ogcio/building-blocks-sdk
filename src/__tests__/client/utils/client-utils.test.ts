import assert from "node:assert";
import { describe, test } from "node:test";
import {
  type PaginationParams,
  formatError,
  formatResponse,
  preparePaginationParams,
  toStringOrUndefined,
} from "./../../../client/utils/client-utils.js";
import type {
  ApiError,
  TestNestedResponseObject,
  TestResponseObject,
  TypedErrorResponse,
  TypedSuccessResponse,
} from "./response-types.js";
describe("toStringOrUndefined", () => {
  test("should convert numbers and booleans to strings", () => {
    assert.strictEqual(
      toStringOrUndefined(42),
      "42",
      "Expected number to be converted to string",
    );
    assert.strictEqual(
      toStringOrUndefined(true),
      "true",
      "Expected boolean true to be converted to string",
    );
    assert.strictEqual(
      toStringOrUndefined(false),
      "false",
      "Expected boolean false to be converted to string",
    );
  });

  test("should return undefined if input is undefined", () => {
    assert.strictEqual(
      toStringOrUndefined(undefined),
      undefined,
      "Expected undefined input to return undefined",
    );
  });

  test("should convert offset and limit to strings if provided", () => {
    const params: PaginationParams = { offset: 10, limit: 20 };
    const result = preparePaginationParams(params);
    assert.deepStrictEqual(
      result,
      { offset: "10", limit: "20" },
      "Expected offset and limit to be converted to strings",
    );
  });

  test("should handle string inputs for offset and limit", () => {
    const params: PaginationParams = { offset: "5", limit: "15" };
    const result = preparePaginationParams(params);
    assert.deepStrictEqual(
      result,
      { offset: "5", limit: "15" },
      "Expected offset and limit to remain strings if already provided as strings",
    );
  });

  test("should return an empty object if no pagination parameters are provided", () => {
    const result = preparePaginationParams();
    assert.deepStrictEqual(
      result,
      {},
      "Expected empty object if no pagination parameters are provided",
    );
  });
});

describe("preparePaginationParams", () => {
  test("should handle missing offset and limit individually", () => {
    const offsetOnly: PaginationParams = { offset: 30 };
    const limitOnly: PaginationParams = { limit: 50 };

    const resultOffsetOnly = preparePaginationParams(offsetOnly);
    assert.deepStrictEqual(
      resultOffsetOnly,
      { offset: "30" },
      "Expected only offset to be set when limit is not provided",
    );

    const resultLimitOnly = preparePaginationParams(limitOnly);
    assert.deepStrictEqual(
      resultLimitOnly,
      { limit: "50" },
      "Expected only limit to be set when offset is not provided",
    );
  });
});

describe("formatResponse", () => {
  test("should handle response with plain data", () => {
    // Create a properly typed success response
    const mockResponse: TypedSuccessResponse<{ value: string }> = {
      data: { value: "test" },
      response: new Response(),
    };

    const result = formatResponse<
      TestResponseObject["get"],
      Record<string, unknown>
    >(mockResponse);

    assert.deepStrictEqual(result, {
      data: { value: "test" },
      metadata: undefined,
      error: undefined,
    });
  });

  test("should handle response with nested data property", () => {
    // Create a properly typed nested success response
    const mockResponse: TypedSuccessResponse<{
      data: {
        nested: {
          value: string;
        };
      };
    }> = {
      data: {
        data: {
          nested: {
            value: "test",
          },
        },
      },
      response: new Response(),
    };

    const result = formatResponse<
      TestNestedResponseObject["get"],
      Record<string, unknown>
    >(mockResponse);

    assert.deepStrictEqual(result, {
      data: {
        nested: {
          value: "test",
        },
      },
      metadata: undefined,
      error: undefined,
    });
  });

  test("should format typed error correctly", () => {
    const mockError: ApiError = {
      message: "Test error",
      code: "500",
    };

    const errorResponse: TypedErrorResponse<ApiError> = {
      error: mockError,
      response: new Response(),
    };

    const result = formatResponse<
      TestResponseObject["get"],
      Record<string, unknown>
    >(errorResponse);

    assert.deepStrictEqual(result, {
      data: undefined,
      metadata: undefined,
      error: mockError,
    });
  });
});

describe("formatError", () => {
  test("should format error correctly", () => {
    const error = new Error("Test error");
    const result = formatError(error);
    assert.deepStrictEqual(result, {
      error: error,
    });
  });

  test("should handle non-error objects", () => {
    const errorObj = { code: 500, message: "Server error" };
    const result = formatError(errorObj);
    assert.deepStrictEqual(result, {
      error: errorObj,
    });
  });

  test("should handle primitive error values", () => {
    const errorMessage = "Something went wrong";
    const result = formatError(errorMessage);
    assert.deepStrictEqual(result, {
      error: errorMessage,
    });
  });
});
