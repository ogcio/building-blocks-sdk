import { describe, expect, it } from "vitest";
import { redactFields } from "./client-utils.js";

describe(redactFields.name, () => {
  describe("object input", () => {
    it("removes specified keys from an object (happy case)", () => {
      const obj = { a: 1, b: 2, c: 3 };
      const result = redactFields(obj, ["b", "c"]);
      expect(result).toEqual({ a: 1 });
    });

    it("returns full object if keysToRemove is empty", () => {
      const obj = { a: 1, b: 2 };
      const result = redactFields(obj, []);
      expect(result).toEqual(obj);
    });

    it("returns full object if keysToRemove keys are not in object", () => {
      const obj = { a: 1, b: 2 };
      const result = redactFields(obj, ["x", "y"]);
      expect(result).toEqual(obj);
    });

    it("works with keysToRemove partially present", () => {
      const obj = { a: 1, b: 2, c: 3 };
      const result = redactFields(obj, ["b", "x"]);
      expect(result).toEqual({ a: 1, c: 3 });
    });

    it("returns empty object if all keys removed", () => {
      const obj = { a: 1 };
      const result = redactFields(obj, ["a"]);
      expect(result).toEqual({});
    });

    it("handles non-object input (string) gracefully", () => {
      const result = redactFields("string", ["a"]);
      expect(result).toEqual({});
    });

    it("handles non-object input (number) gracefully", () => {
      const result = redactFields(123, ["a"]);
      expect(result).toEqual({});
    });

    it("does not throw if keysToRemove contains duplicates", () => {
      const obj = { a: 1, b: 2, c: 3 };
      const result = redactFields(obj, ["b", "b", "c"]);
      expect(result).toEqual({ a: 1 });
    });

    it("returns empty object if input is empty object", () => {
      const obj = {};
      const result = redactFields(obj, ["a"]);
      expect(result).toEqual({});
    });
  });

  describe("array input", () => {
    it("removes specified keys from array of objects (happy case)", () => {
      const arr = [
        { a: 1, b: 2, c: 3 },
        { a: 4, b: 5, c: 6 },
      ];
      const result = redactFields(arr, ["b", "c"]);
      expect(result).toEqual([{ a: 1 }, { a: 4 }]);
    });

    it("returns full array if keysToRemove is empty", () => {
      const arr = [
        { a: 1, b: 2 },
        { a: 3, b: 4 },
      ];
      const result = redactFields(arr, []);
      expect(result).toEqual(arr);
    });

    it("returns full array if keysToRemove keys are not in objects", () => {
      const arr = [
        { a: 1, b: 2 },
        { a: 3, b: 4 },
      ];
      const result = redactFields(arr, ["x", "y"]);
      expect(result).toEqual(arr);
    });

    it("works with keysToRemove partially present", () => {
      const arr = [
        { a: 1, b: 2, c: 3 },
        { a: 4, b: 5, c: 6 },
      ];
      const result = redactFields(arr, ["b", "x"]);
      expect(result).toEqual([
        { a: 1, c: 3 },
        { a: 4, c: 6 },
      ]);
    });

    it("returns array of empty objects if all keys removed", () => {
      const arr = [{ a: 1 }, { a: 2 }];
      const result = redactFields(arr, ["a"]);
      expect(result).toEqual([{}, {}]);
    });

    it("handles non-object items in array gracefully", () => {
      const arr = [{ a: 1, b: 2 }, "string", 123, null, { a: 3, b: 4 }];
      const result = redactFields(arr, ["b"]);
      expect(result).toEqual([{ a: 1 }, { a: 3 }]);
    });

    it("does not throw if keysToRemove contains duplicates", () => {
      const arr = [
        { a: 1, b: 2, c: 3 },
        { a: 4, b: 5, c: 6 },
      ];
      const result = redactFields(arr, ["b", "b", "c"]);
      expect(result).toEqual([{ a: 1 }, { a: 4 }]);
    });

    it("returns empty array if input is empty array", () => {
      const arr: unknown[] = [];
      const result = redactFields(arr, ["a"]);
      expect(result).toEqual([]);
    });
  });

  it("handles null input gracefully", () => {
    const result = redactFields(null, ["a"]);
    expect(result).toEqual({});
  });

  it("handles undefined input gracefully", () => {
    const result = redactFields(undefined, ["a"]);
    expect(result).toEqual({});
  });
});
