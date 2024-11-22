import { Analytics } from "@ogcio/analytics-sdk";
import { beforeEach, describe, expect, expectTypeOf, it, vi } from "vitest";
import { FeatureFlags } from "../client/clients/featureFlags/index.js";
import { Messaging } from "../client/clients/messaging/index.js";
import { Payments } from "../client/clients/payments/index.js";
import { Profile } from "../client/clients/profile/index.js";
import { Scheduler } from "../client/clients/scheduler/index.js";
import { Upload } from "../client/clients/upload/index.js";
import { getBuildingBlockSDK } from "../index.js";
import type { BuildingBlockSDKParams } from "../types/index.js";

vi.mock("@ogcio/analytics-sdk", () => ({
  Analytics: vi.fn(),
}));

vi.mock("../client/clients/featureFlags/index.js", () => ({
  FeatureFlags: vi.fn(),
}));

vi.mock("../client/clients/messaging/index.js", () => ({
  Messaging: vi.fn(),
}));

vi.mock("../client/clients/payments/index.js", () => ({
  Payments: vi.fn(),
}));

vi.mock("../client/clients/profile/index.js", () => ({
  Profile: vi.fn(),
}));

vi.mock("../client/clients/scheduler/index.js", () => ({
  Scheduler: vi.fn(),
}));

vi.mock("../client/clients/upload/index.js", () => ({
  Upload: vi.fn(),
}));

describe("getBuildingBlockSDK", () => {
  const getTokenFn = vi.fn().mockResolvedValue("test-token");
  const baseUrl = "http://test.com";

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should create SDK with all services when all configs provided", () => {
    const params = {
      services: {
        analytics: {
          baseUrl,
          trackingWebsiteId: "website-id",
          organizationId: "org-id",
        },
        featureFlags: { baseUrl },
        messaging: { baseUrl },
        payments: { baseUrl },
        profile: { baseUrl },
        scheduler: { baseUrl },
        upload: { baseUrl },
      },
      getTokenFn,
    };

    const sdk = getBuildingBlockSDK(params);

    expect(Analytics).toHaveBeenCalledWith({
      baseUrl,
      trackingWebsiteId: "website-id",
      organizationId: "org-id",
      getTokenFn,
    });
    expect(FeatureFlags).toHaveBeenCalledWith({
      baseUrl,
      getTokenFn,
    });
    expect(Messaging).toHaveBeenCalledWith({ baseUrl, getTokenFn });
    expect(Payments).toHaveBeenCalledWith({ baseUrl, getTokenFn });
    expect(Profile).toHaveBeenCalledWith({ baseUrl, getTokenFn });
    expect(Scheduler).toHaveBeenCalledWith({ baseUrl, getTokenFn });
    expect(Upload).toHaveBeenCalledWith({ baseUrl, getTokenFn });

    expect(Object.keys(sdk)).toHaveLength(7);
  });

  it("should create SDK with only specified services", () => {
    const params = {
      services: {
        analytics: {
          baseUrl,
          trackingWebsiteId: "website-id",
          organizationId: "org-id",
        },
        messaging: { baseUrl },
      },
      getTokenFn,
    };

    const sdk = getBuildingBlockSDK(params);

    expect(Analytics).toHaveBeenCalledWith({
      baseUrl,
      trackingWebsiteId: "website-id",
      organizationId: "org-id",
      getTokenFn,
    });
    expect(Messaging).toHaveBeenCalledWith({ baseUrl, getTokenFn });
    expect(FeatureFlags).not.toHaveBeenCalled();
    expect(Payments).not.toHaveBeenCalled();
    expect(Profile).not.toHaveBeenCalled();
    expect(Scheduler).not.toHaveBeenCalled();
    expect(Upload).not.toHaveBeenCalled();

    expect(Object.keys(sdk)).toHaveLength(2);
    expect(sdk).toHaveProperty("analytics");
    expect(sdk).toHaveProperty("messaging");
  });

  it("should pass additional config parameters to services", () => {
    const params = {
      services: {
        analytics: {
          baseUrl,
          trackingWebsiteId: "website-id",
          organizationId: "org-id",
        },
      },
      getTokenFn,
    };

    getBuildingBlockSDK(params);

    expect(Analytics).toHaveBeenCalledWith({
      baseUrl,
      trackingWebsiteId: "website-id",
      organizationId: "org-id",
      getTokenFn,
    });
  });

  it("should create empty SDK when no services configured", () => {
    const params = {
      services: {},
      getTokenFn,
    };

    const sdk = getBuildingBlockSDK(params);

    expect(Object.keys(sdk)).toHaveLength(0);
    expect(Analytics).not.toHaveBeenCalled();
    expect(FeatureFlags).not.toHaveBeenCalled();
    expect(Messaging).not.toHaveBeenCalled();
    expect(Payments).not.toHaveBeenCalled();
    expect(Profile).not.toHaveBeenCalled();
    expect(Scheduler).not.toHaveBeenCalled();
    expect(Upload).not.toHaveBeenCalled();
  });
});

describe("getBuildingBlockSDK type tests", () => {
  it("should return type with only configured services", () => {
    const params = {
      services: {
        analytics: {
          baseUrl: "test",
          trackingWebsiteId: "test",
          organizationId: "test",
        },
        messaging: { baseUrl: "test" },
      },
      getTokenFn: async () => "token",
    } satisfies BuildingBlockSDKParams;

    type Result = ReturnType<typeof getBuildingBlockSDK<typeof params>>;

    expectTypeOf<Result>().toMatchTypeOf<{
      analytics: Analytics;
      messaging: Messaging;
    }>();

    // @ts-expect-error - Property 'featureFlags' should not exist on type Result
    // biome-ignore lint/correctness/noUnusedVariables: it's for testing purposes
    type ShouldFail = Result["featureFlags"];
  });

  it("should return empty object type when no services configured", () => {
    const params = {
      services: {},
      getTokenFn: async () => "token",
    } satisfies BuildingBlockSDKParams;

    type Result = ReturnType<typeof getBuildingBlockSDK<typeof params>>;

    // biome-ignore lint/complexity/noBannedTypes: it's for testing purposes
    expectTypeOf<Result>().toMatchTypeOf<{}>();
  });

  it("should not allow undefined baseUrl in service config", () => {
    // biome-ignore lint/correctness/noUnusedVariables: it's for testing purposes
    const params: BuildingBlockSDKParams = {
      services: {
        analytics: {
          // @ts-expect-error - baseUrl cannot be undefined
          baseUrl: undefined,
          trackingWebsiteId: "test",
          organizationId: "test",
        },
      },
      getTokenFn: async () => "token",
    };
  });
});
