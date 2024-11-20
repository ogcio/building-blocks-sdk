import type { Analytics } from "@ogcio/analytics-sdk";
import type { FeatureFlags } from "./client/clients/featureFlags/index.js";
import type { Messaging } from "./client/clients/messaging/index.js";
import type { Payments } from "./client/clients/payments/index.js";
import type { Profile } from "./client/clients/profile/index.js";
import type { Scheduler } from "./client/clients/scheduler/index.js";
import type { Upload } from "./client/clients/upload/index.js";

// Service-specific configurations
export interface AnalyticsConfig {
  baseUrl: string;
  adminToken?: string;
  trackingWebsiteId: string;
  organizationId: string;
}

export interface MessagingConfig {
  baseUrl: string;
  adminToken?: string;
}

export interface PaymentsConfig {
  baseUrl: string;
  adminToken?: string;
}

export interface ProfileConfig {
  baseUrl: string;
  adminToken?: string;
}

export interface SchedulerConfig {
  baseUrl: string;
  adminToken?: string;
}

export interface UploadConfig {
  baseUrl: string;
  adminToken?: string;
}

export interface FeatureFlagsConfig {
  baseUrl: string;
  adminToken?: string;
}

// Combined services configuration
export interface Services {
  analytics?: AnalyticsConfig;
  messaging?: MessagingConfig;
  payments?: PaymentsConfig;
  profile?: ProfileConfig;
  scheduler?: SchedulerConfig;
  upload?: UploadConfig;
  featureFlags?: FeatureFlagsConfig;
}

export type TokenFunction = () => Promise<string>;

// SDK initialization parameters
export interface BuildingBlockSDKParams {
  services: Services;
  getTokenFn: TokenFunction;
}

// Main SDK interface with service instances
export interface BuildingBlocksSDK {
  analytics: Analytics;
  messaging: Messaging;
  payments: Payments;
  profile: Profile;
  scheduler: Scheduler;
  upload: Upload;
  featureFlags: FeatureFlags;
}

// Export service types for convenience
export type {
  Analytics,
  Messaging,
  Payments,
  Profile,
  Scheduler,
  Upload,
  FeatureFlags,
};
