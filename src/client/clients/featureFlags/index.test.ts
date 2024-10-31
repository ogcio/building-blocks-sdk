import t from "tap";
import * as td from "testdouble";
import FeatureFlags from "./index.js";

let isEnabled = true;

await td.replaceEsm("unleash-client", {
  initialize: td.func(),
  InMemStorageProvider: td.func(),
});

let fetchResponse = {};

global.fetch = async () =>
  ({
    ok: true,
    status: 200,
    json: async () => fetchResponse,
    headers: new Headers(),
  }) as Response;

t.test("FeatureFlags", async (t) => {
  const baseUrl = "http://fakehost";
  const getTokenFn = () => "test-token";
  let featureFlags: FeatureFlags;

  t.beforeEach(async () => {
    featureFlags = new FeatureFlags({ baseUrl, getTokenFn });
  });

  t.test("should return false if flag is not enabled", async (t) => {
    isEnabled = false;
    const result = await featureFlags.isFlagEnabled("test-flag");
    t.equal(result, isEnabled);
  });

  t.test("should return true if flag is enabled", async (t) => {
    isEnabled = true;
    const result = await featureFlags.isFlagEnabled("test-flag");
    t.equal(result, isEnabled);
  });

  t.test(
    "should call GET method on client when getFeatureFlags is called",
    async () => {
      fetchResponse = { data: { features: [] }, metadata: {} };
      const result = await featureFlags.getFeatureFlags();
      t.ok(result);
      t.same(result, {
        data: [],
        metadata: {},
        error: null,
      });
    },
  );
});
