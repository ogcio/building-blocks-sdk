import t from "tap";
import { FEATURE_FLAGS } from "../../../types/index.js";
import type FeatureFlags from "./index.js";
import { waitForConnection } from "./utils.js";

t.test("waitForConnection", async (t) => {
  t.test("should resolve when featureFlags is connected", async (t) => {
    const mockFeatureFlags = {
      isConnected: false,
    } as FeatureFlags;

    // Simulate connection after 50ms
    setTimeout(() => {
      mockFeatureFlags.isConnected = true;
    }, 50);

    const consoles = t.capture(console, "log");

    const startTime = Date.now();
    await waitForConnection(mockFeatureFlags, 10);
    const elapsedTime = Date.now() - startTime;

    t.ok(elapsedTime >= 50);
    t.match(consoles(), [
      { args: [`[${FEATURE_FLAGS}] Connecting...`] },
      { args: [/Connected in \d+ms/] },
    ]);

    t.end();
  });

  t.test("should throw an error if connection times out", async (t) => {
    const mockFeatureFlags = {
      isConnected: false,
    } as FeatureFlags;

    const consoleLogSpy = t.capture(console, "log");

    const startTime = Date.now();
    await t.rejects(
      waitForConnection(mockFeatureFlags, 10, 30),
      `[${FEATURE_FLAGS}] Connection timed out after 30ms`,
    );
    const elapsedTime = Date.now() - startTime;

    t.ok(elapsedTime >= 30);
    t.match(consoleLogSpy(), [{ args: [`[${FEATURE_FLAGS}] Connecting...`] }]);

    t.end();
  });
});
