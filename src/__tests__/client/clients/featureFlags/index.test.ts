import * as td from "testdouble";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { FeatureFlags } from "../../../../client/clients/featureFlags/index.js";

const enabledOrNot = {
  "not-enabled": false,
  enabled: true,
};

await td.replaceEsm("unleash-client", {
  initialize: td.func(),
  startUnleash: () => ({
    isEnabled: (
      name: "enabled" | "not-enabled",
      _context: unknown,
      _functionToUse: () => boolean,
    ) => enabledOrNot[name],
  }),
  InMemStorageProvider: td.func(),
});

let fetchResponse = {};

// Mock global fetch
global.fetch = async () =>
  ({
    ok: true,
    status: 200,
    json: async () => fetchResponse,
    headers: new Headers(),
  }) as Response;

describe("FeatureFlags", () => {
  const baseUrl = "http://fakehost";
  const getTokenFn = () => "test-token";
  let featureFlags: FeatureFlags;

  beforeEach(async () => {
    featureFlags = new FeatureFlags({ baseUrl, getTokenFn });
  });

  it("should return false if flag is not enabled", async () => {
    const result = await featureFlags.isFlagEnabled("not-enabled");
    expect(result).toBe(enabledOrNot["not-enabled"]);
  });

  it("should return true if flag is enabled", async () => {
    const result = await featureFlags.isFlagEnabled("enabled");
    expect(result).toBe(enabledOrNot.enabled);
  });

  it("should call GET method on client when getFeatureFlags is called", async () => {
    fetchResponse = { data: { features: [] }, metadata: {} };
    const result = await featureFlags.getFeatureFlags();
    expect(result).toBeTruthy();
    expect(result).toEqual({
      data: [],
      metadata: {},
      error: undefined,
    });
  });
});
