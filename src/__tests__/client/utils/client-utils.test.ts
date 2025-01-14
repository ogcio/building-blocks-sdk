import { describe, expect, it } from "vitest";
import {
  type PaginationParams,
  formatError,
  formatResponse,
  getNumberValueFromObject,
  parseJwtToken,
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
  it("should convert numbers and booleans to strings", () => {
    expect(toStringOrUndefined(42)).toBe("42");
    expect(toStringOrUndefined(true)).toBe("true");
    expect(toStringOrUndefined(false)).toBe("false");
  });

  it("should return undefined if input is undefined", () => {
    expect(toStringOrUndefined(undefined)).toBeUndefined();
  });

  it("should convert offset and limit to strings if provided", () => {
    const params: PaginationParams = { offset: 10, limit: 20 };
    const result = preparePaginationParams(params);
    expect(result).toEqual({ offset: "10", limit: "20" });
  });

  it("should handle string inputs for offset and limit", () => {
    const params: PaginationParams = { offset: "5", limit: "15" };
    const result = preparePaginationParams(params);
    expect(result).toEqual({ offset: "5", limit: "15" });
  });

  it("should return an empty object if no pagination parameters are provided", () => {
    const result = preparePaginationParams();
    expect(result).toEqual({});
  });
});

describe("preparePaginationParams", () => {
  it("should handle missing offset and limit individually", () => {
    const offsetOnly: PaginationParams = { offset: 30 };
    const limitOnly: PaginationParams = { limit: 50 };

    const resultOffsetOnly = preparePaginationParams(offsetOnly);
    expect(resultOffsetOnly).toEqual({ offset: "30" });

    const resultLimitOnly = preparePaginationParams(limitOnly);
    expect(resultLimitOnly).toEqual({ limit: "50" });
  });
});

describe("formatResponse", () => {
  it("should handle response with plain data", () => {
    const mockResponse: TypedSuccessResponse<{ value: string }> = {
      data: { value: "test" },
      response: new Response(),
    };

    const result = formatResponse<
      TestResponseObject["get"],
      Record<string, unknown>
    >(mockResponse, "mock", undefined);

    expect(result).toEqual({
      data: { value: "test" },
      metadata: undefined,
      error: undefined,
    });
  });

  it("should handle response with nested data property", () => {
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
    >(mockResponse, "mock", undefined);

    expect(result).toEqual({
      data: {
        nested: {
          value: "test",
        },
      },
      metadata: undefined,
      error: undefined,
    });
  });

  it("should format typed error correctly", () => {
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
    >(errorResponse, "mock", undefined);

    expect(result).toEqual({
      data: undefined,
      metadata: undefined,
      error: mockError,
    });
  });
});

describe("formatError", () => {
  it("should format error correctly", () => {
    const error = new Error("Test error");
    const result = formatError(error, "mock", undefined);
    expect(result).toEqual({
      error: error,
    });
  });

  it("should handle non-error objects", () => {
    const errorObj = { code: 500, message: "Server error" };
    const result = formatError(errorObj, "mock", undefined);
    expect(result).toEqual({
      error: errorObj,
    });
  });

  it("should handle primitive error values", () => {
    const errorMessage = "Something went wrong";
    const result = formatError(errorMessage, "mock", undefined);
    expect(result).toEqual({
      error: errorMessage,
    });
  });
});

describe(parseJwtToken.name, () => {
  it("should throw on empty string parameter", () => {
    expect(() => parseJwtToken("")).toThrow("invalid jwt format");
  });

  it("should throw on illegal jwt characters parameter", () => {
    expect(() => parseJwtToken("all.the.parts!")).toThrow("invalid jwt format");
  });

  it("should throw on too long jwt format parameter", () => {
    expect(() => parseJwtToken("too.many.parts.here")).toThrow(
      "invalid jwt format",
    );
  });

  it("should throw on too short jwt format parameter", () => {
    expect(() => parseJwtToken("parts.missing")).toThrow("invalid jwt format");
  });

  it("should throw if payload is invalid json", () => {
    expect(() =>
      parseJwtToken(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.invalidJsonPayload.dXNlcnNlY3JldA",
      ),
    ).toThrow("invalid jwt format");
  });
});

describe(getNumberValueFromObject.name, () => {
  it("should return correct with numeric value type", () => {
    const expected = 123;
    const actual = getNumberValueFromObject({ exp: 123 }, "exp");

    expect(actual).toBeTypeOf("number");
    expect(actual).toBe(expected);
  });

  it("should return correct with string value type that represent a valid number", () => {
    const expected = 123;
    const actual = getNumberValueFromObject({ exp: "123" }, "exp");

    expect(actual).toBeTypeOf("number");
    expect(actual).toBe(expected);
  });

  it("should throw if value string isn't parseable as number", () => {
    expect(() => getNumberValueFromObject({ exp: "12a3" }, "exp")).toThrow(
      "failed to cast 12a3 to number",
    );
  });

  it("should throw if value type is null", () => {
    expect(() => getNumberValueFromObject({ exp: null }, "exp")).toThrow(
      "failed to cast null to number",
    );
  });

  it("should throw if value type is undefined", () => {
    expect(() => getNumberValueFromObject({ expo: 123 }, "exp")).toThrow(
      "failed to cast undefined to number",
    );
  });
});
