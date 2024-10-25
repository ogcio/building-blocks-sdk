import { FEATURE_FLAGS } from "../../../types/index.js";
import type FeatureFlags from "./index.js";
import { waitForConnection } from "./utils.js";

describe("waitForConnection", () => {
  it("should resolve when featureFlags is connected", async () => {
    const mockFeatureFlags = {
      isConnected: false,
    } as FeatureFlags;

    // Simulate connection after 50ms
    setTimeout(() => {
      mockFeatureFlags.isConnected = true;
    }, 50);

    const consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    const startTime = Date.now();
    await waitForConnection(mockFeatureFlags, 10);
    const elapsedTime = Date.now() - startTime;

    expect(elapsedTime).toBeGreaterThanOrEqual(50);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      `[${FEATURE_FLAGS}] Connecting...`,
    );
    expect(consoleLogSpy).toHaveBeenCalledWith(
      expect.stringMatching(/Connected in \d+ms/),
    );

    consoleLogSpy.mockRestore();
  });

  it("should throw an error if connection times out", async () => {
    const mockFeatureFlags = {
      isConnected: false,
    } as FeatureFlags;

    const consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    const startTime = Date.now();
    await expect(waitForConnection(mockFeatureFlags, 10, 30)).rejects.toThrow(
      `[${FEATURE_FLAGS}] Connection timed out after 30ms`,
    );
    const elapsedTime = Date.now() - startTime;

    expect(elapsedTime).toBeGreaterThanOrEqual(30);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      `[${FEATURE_FLAGS}] Connecting...`,
    );

    consoleLogSpy.mockRestore();
  });
});
