import { getBuildingBlockSDK } from "@ogcio/building-blocks-sdk";

const baseUrl = "http://example.com";

export async function loadSdk() {
  return getBuildingBlockSDK({
    services: {
      analytics: { baseUrl },
      journey: { baseUrl },
      messaging: { baseUrl },
      payments: { baseUrl },
      upload: { baseUrl },
      profile: { baseUrl },
      scheduler: { baseUrl },
      featureFlags: { baseUrl },
    },
    getTokenFn: async (serviceName: string) => serviceName,
  });
}
