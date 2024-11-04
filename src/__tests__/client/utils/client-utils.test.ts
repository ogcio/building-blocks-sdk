import assert from "node:assert";
import { test } from "node:test";
import {
  type PaginationParams,
  preparePaginationParams,
  toStringOrUndefined,
} from "./../../../client/utils/client-utils.js";

test("toStringOrUndefined should convert numbers and booleans to strings", () => {
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

test("toStringOrUndefined should return undefined if input is undefined", () => {
  assert.strictEqual(
    toStringOrUndefined(undefined),
    undefined,
    "Expected undefined input to return undefined",
  );
});

test("preparePaginationParams should convert offset and limit to strings if provided", () => {
  const params: PaginationParams = { offset: 10, limit: 20 };
  const result = preparePaginationParams(params);
  assert.deepStrictEqual(
    result,
    { offset: "10", limit: "20" },
    "Expected offset and limit to be converted to strings",
  );
});

test("preparePaginationParams should handle string inputs for offset and limit", () => {
  const params: PaginationParams = { offset: "5", limit: "15" };
  const result = preparePaginationParams(params);
  assert.deepStrictEqual(
    result,
    { offset: "5", limit: "15" },
    "Expected offset and limit to remain strings if already provided as strings",
  );
});

test("preparePaginationParams should return an empty object if no pagination parameters are provided", () => {
  const result = preparePaginationParams();
  assert.deepStrictEqual(
    result,
    {},
    "Expected empty object if no pagination parameters are provided",
  );
});

test("preparePaginationParams should handle missing offset and limit individually", () => {
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
