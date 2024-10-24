import { FEATURE_FLAGS } from "../../../types/index.js";
import type FeatureFlags from "./index.js";

const waitForConnection = (
  featureFlags: FeatureFlags,
  everyMs = 10,
): Promise<void> => {
  const fn = (
    interval: NodeJS.Timeout,
    resolve: () => void,
    startTime: number,
  ) => {
    if (featureFlags.isConnected) {
      const elapsedTime = Date.now() - startTime;
      console.log(`[${FEATURE_FLAGS}] Connected in ${elapsedTime}ms`);
      clearInterval(interval);
      resolve();
    }
  };

  return new Promise((resolve) => {
    const startTime = Date.now();
    console.log(`[${FEATURE_FLAGS}] Connecting...`);
    const interval = setInterval(() => {
      fn(interval, resolve, startTime);
    }, everyMs);
    fn(interval, resolve, startTime);
  });
};

export { waitForConnection };
