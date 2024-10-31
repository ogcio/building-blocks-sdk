import { FEATURE_FLAGS } from "../../../types/index.js";
import type FeatureFlags from "./index.js";

const waitForConnection = (
  featureFlags: FeatureFlags,
  everyMs = 10,
  timeoutMs = 5000, // Default timeout of 5 seconds
): Promise<void> => {
  const fn = (
    interval: NodeJS.Timeout,
    timeout: NodeJS.Timeout,
    resolve: () => void,
    startTime: number,
  ) => {
    if (featureFlags.isConnected) {
      const elapsedTime = Date.now() - startTime;
      console.log(`[${FEATURE_FLAGS}] Connected in ${elapsedTime}ms`);
      clearInterval(interval);
      clearTimeout(timeout);
      resolve();
    }
  };

  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    console.log(`[${FEATURE_FLAGS}] Connecting...`);
    const interval = setInterval(() => {
      fn(interval, timeout, resolve, startTime);
    }, everyMs);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      const message = `[${FEATURE_FLAGS}] Connection timed out after ${timeoutMs}ms`;
      console.error(message);
      reject(new Error(message));
    }, timeoutMs);

    fn(interval, timeout, resolve, startTime);
  });
};

export { waitForConnection };
