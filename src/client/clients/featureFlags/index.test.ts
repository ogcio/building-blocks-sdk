import { InMemStorageProvider, initialize } from "unleash-client";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { FEATURE_FLAGS } from "../../../types/index.js";
import FeatureFlags from "./index.js";

let isEnabled = true;

vi.mock("unleash-client", () => ({
  initialize: vi.fn(() => ({
    on: vi.fn((event: string, cb: () => void) => {
      if (event === "synchronized") {
        cb();
      }

      if (event === "error") {
        cb();
      }

      return vi.fn();
    }),
    isEnabled: vi.fn(() => isEnabled),
  })),
  InMemStorageProvider: vi.fn(),
}));

describe("FeatureFlags", () => {
  const baseUrl = "http://fakehost";
  const getTokenFn = () => "test-token";
  let featureFlags: FeatureFlags;

  beforeEach(() => {
    featureFlags = new FeatureFlags({ baseUrl, getTokenFn });
  });

  it("should initialize unleash client with correct parameters", () => {
    expect(featureFlags.isConnected).toBeTruthy();
    expect(initialize).toHaveBeenCalledWith({
      appName: FEATURE_FLAGS,
      url: `${baseUrl}/api`,
      refreshInterval: 1000,
      customHeaders: {
        Authorization: "test-token",
      },
      storageProvider: new InMemStorageProvider(),
    });
    expect(InMemStorageProvider).toHaveBeenCalled();
  });

  it("should return false if flag is not enabled", async () => {
    isEnabled = false;
    const result = await featureFlags.isFlagEnabled("test-flag");
    expect(result).toBe(isEnabled);
  });

  it("should return true if flag is enabled", async () => {
    isEnabled = true;
    const result = await featureFlags.isFlagEnabled("test-flag");
    expect(result).toBe(isEnabled);
  });

  it("should call GET method on client when getFeatureFlags is called", async () => {
    const getMock = vi.fn().mockResolvedValue({
      data: { features: [] },
      metadata: {},
      error: null,
    });
    // biome-ignore lint/suspicious/noExplicitAny: TODO
    featureFlags.client = { GET: getMock } as any;
    const result = await featureFlags.getFeatureFlags();
    expect(getMock).toHaveBeenCalledWith(
      "/api/admin/projects/{projectId}/features",
      {
        params: { path: { projectId: "default" } },
      },
    );
    expect(result.data).toEqual([]);
  });
});
