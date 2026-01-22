export interface paths {
    "/.well-known/jwks.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get JSON Web Key Set
         * @description Retrieve the JSON Web Key Set (JWKS) containing public keys used to verify JWT tokens. This endpoint is used by services like Journey Builder to validate tokens which are sent through redirects between services.
         */
        get: operations["getJwks"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/health": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Health Check
         * @description Check the health status of the payment API service. Returns the current operational status of the service.
         */
        get: operations["healthCheck"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/version": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get API Version
         * @description Retrieve the current version of the payment API service. Useful for client compatibility checks and debugging The version ID is the build ID and is generated while the pipeline runs.
         */
        get: operations["getApiVersion"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/providers/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Payment Providers
         * @description Retrieve a list of all payment providers configured for the organization.
         */
        get: operations["listProviders"];
        put?: never;
        /**
         * Create Payment Provider
         * @description Create a new payment provider configuration for the organization. Supports multiple provider types including Stripe, Realex, Bank Transfer, and Open Banking.
         */
        post: operations["createProvider"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/providers/{providerId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Provider by ID
         * @description Retrieve detailed information about a specific payment provider by its unique identifier.
         */
        get: operations["getProviderById"];
        /**
         * Update Provider
         * @description Update an existing payment provider configuration. Allows modification of provider name, type, and configuration data.
         */
        put: operations["updateProvider"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/requests/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Payment Requests
         * @description Retrieve a paginated list of payment requests for the authenticated organization. Supports filtering and pagination.
         */
        get: operations["listPaymentRequests"];
        /**
         * Update Payment Request
         * @description Update an existing payment request. Allows modification of request details, amount, status, and other properties.
         */
        put: operations["updatePaymentRequest"];
        /**
         * Create Payment Request
         * @description Create a new payment request for the organization. Payment requests define the details of a payment that citizens can make for government services.
         */
        post: operations["createPaymentRequest"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/requests/external-info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get External Payment Request Info
         * @description Retrieve basic information about payment requests for public display on other applications such as Journey Builder.
         */
        get: operations["getExternalPaymentRequestInfo"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/requests/{requestId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Payment Request by ID
         * @description Retrieve detailed information about a specific payment request by its unique identifier.
         */
        get: operations["getPaymentRequestById"];
        put?: never;
        post?: never;
        /**
         * Delete Payment Request
         * @description Delete a payment request by its unique identifier. This action is irreversible.
         */
        delete: operations["deletePaymentRequest"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/requests/{requestId}/public-info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Public Payment Request Info
         * @description Retrieve public information about a specific payment request. This endpoint provides citizen-facing information without sensitive details accessible without authentication.
         */
        get: operations["getPublicPaymentRequestInfo"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/requests/decode": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Decode Payment Request Token
         * @description Decode and validate a token coming from Journey Builder to retrieve the associated payment request information such as a custom amount requested.
         */
        post: operations["decodePaymentRequestToken"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/requests/{requestId}/transactions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Payment Request Transactions
         * @description Retrieve all transactions associated with a specific payment request. Supports pagination.
         */
        get: operations["getPaymentRequestTransactions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/transactions/{transactionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Transaction by ID
         * @description Retrieve detailed information about a specific transaction by its unique identifier.
         */
        get: operations["getTransactionById"];
        put?: never;
        post?: never;
        /**
         * Delete Transaction
         * @description Delete a transaction by its unique identifier. This action is irreversible and should be used with caution.
         */
        delete: operations["deleteTransaction"];
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    transactionId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        status: "initiated" | "pending" | "succeeded" | "cancelled" | "cancellation_requested" | "failed" | "refunded" | "refund_failed";
                    };
                };
            };
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": Record<string, never>;
                    };
                };
                /** @description Default Response */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            code: string;
                            detail: string;
                            requestId: string;
                            name: string;
                            validation?: unknown;
                            validationContext?: string;
                        };
                    };
                };
            };
        };
        trace?: never;
    };
    "/api/v1/transactions/transactionId/{extPaymentId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Transaction ID by External Payment ID
         * @description Retrieve the transaction ID using an external payment provider's payment ID, such as a Stripe intent ID or a Realex order ID.
         */
        get: operations["getTransactionIdByExternalPaymentId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/transactions/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Transactions
         * @description Retrieve a paginated list of transactions for the authenticated organization. Supports filtering and pagination.
         */
        get: operations["listTransactions"];
        put?: never;
        /**
         * Create Transaction
         * @description Create a new payment transaction. This endpoint is typically used by citizens to create new transactions for payment requests.
         */
        post: operations["createTransaction"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/transactions/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Search Transactions
         * @description Retrieve a list of transactions based on a given list of transaction ids.
         */
        post: operations["searchTransactions"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/transactions/schema": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Transaction Schema
         * @description Retrieve the JSON schema for transaction data structure.
         */
        get: operations["getTransactionSchema"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/transactions/generatePaymentIntentId": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Generate Payment Intent ID
         * @description Generate a unique payment intent ID for use with payment providers like Realex or Bank Transfer.
         */
        get: operations["generatePaymentIntentId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/transactions/data/{transactionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Transaction Data
         * @description Retrieve transaction data for the journey service. This endpoint provides transaction information in a format suitable for external services.
         */
        get: operations["getTransactionData"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/transactions/{transactionId}/token": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Transaction Token
         * @description Generate a secure token for a specific transaction to be used with Journey Builder.
         */
        get: operations["getTransactionToken"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/transactions/{transactionId}/refund": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Refund Details
         * @description Retrieve detailed information about a refund for a specific transaction.
         */
        get: operations["getRefundDetails"];
        put?: never;
        /**
         * Create Refund
         * @description Create a refund for a specific transaction. This endpoint initiates the refund process for a completed payment. This feature is currently available only for Stripe.
         */
        post: operations["createRefund"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/transactions/{transactionId}/cancel-payment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Cancel Payment
         * @description Cancel a payment transaction. This endpoint initiates the cancellation process for an active payment.
         */
        post: operations["cancelPayment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/citizen/transactions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Citizen Transactions
         * @description Retrieve a paginated list of transactions for the authenticated citizen. This endpoint provides citizen-facing transaction information.
         */
        get: operations["getCitizenTransactions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/citizen/transactions/{transactionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Citizen Transaction by ID
         * @description Retrieve detailed information about a specific transaction for the authenticated citizen.
         */
        get: operations["getCitizenTransactionById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/realex/paymentObject": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Realex Payment Object
         * @description Generate a Realex payment object for processing payments through the Realex payment provider.
         */
        get: operations["getRealexPaymentObject"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/realex/verifyPaymentResponse": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Verify Realex Payment Response
         * @description Verify payment response from Realex payment provider. This endpoint is called by Realex upon payment completion to process the payment result.
         */
        post: operations["verifyRealexPaymentResponse"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/realex/statusUpdate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Realex Status Update
         * @description Handle status updates from Realex payment provider. This endpoint receives payment status notifications from Realex.
         */
        get: operations["handleRealexStatusUpdate"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auditLogs/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Audit Log Events
         * @description Retrieve a filtered list of audit log events for the organization. Supports filtering by event type, date range, and other criteria.
         */
        get: operations["listAuditLogEvents"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auditLogs/event-types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Audit Log Event Types
         * @description Retrieve a list of available audit log event types for filtering and categorization.
         */
        get: operations["getAuditLogEventTypes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auditLogs/{auditLogId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Audit Log Event by ID
         * @description Retrieve detailed information about a specific audit log event by its unique identifier.
         */
        get: operations["getAuditLogEventById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/stripe/paymentIntent": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Stripe Payment Intent
         * @description Create a new Stripe payment intent for processing payments through the Stripe payment provider.
         */
        post: operations["createStripePaymentIntent"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/stripe/webhook": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Stripe Webhook Handler
         * @description Handle webhook events from Stripe payment provider. This endpoint processes payment status updates, failed payments, and other Stripe events to keep transaction status in sync.
         */
        post: operations["handleStripeWebhook"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tester/resource-cleanup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Resource Cleanup
         * @description Clean up test resources for the organization. This endpoint is used for testing and development purposes to reset the system state during our E2E tests.
         */
        delete: operations["resourceCleanup"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/worldpay/paymentRequest": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Initiate a Worldpay payment
         * @description Generate a Worldpay payment request to initiate a payment and obtain the payment page URL.
         */
        post: operations["createWorldpayPaymentRequest"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/worldpay/webhook": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Worldpay Webhook Handler
         * @description Handle webhook events from Worldpay payment provider. This endpoint processes payment status updates, failed payments, and other Worldpay events to keep transaction status in sync.
         */
        post: operations["handleWorldpayWebhook"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/jwt/verify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Verify JWT Token
         * @description Verify a JWT token and return the validity of the token.
         */
        post: operations["verifyJWTToken"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: never;
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    getJwks: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        keys?: {
                            kty?: string;
                            kid?: string;
                            use?: string;
                            n?: string;
                            e?: string;
                        }[];
                    };
                };
            };
        };
    };
    healthCheck: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        status?: string;
                    };
                };
            };
        };
    };
    getApiVersion: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        version?: string;
                    };
                };
            };
        };
    };
    listProviders: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            id: string;
                            name: string;
                            type: "banktransfer" | "openbanking" | "stripe" | "realex" | "worldpay";
                            status: "connected" | "disconnected";
                        }[];
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    createProvider: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name: string;
                    type: "banktransfer" | "openbanking" | "stripe" | "realex" | "worldpay";
                    data: {
                        [key: string]: string;
                    };
                };
            };
        };
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @example {
                         *       "id": "pr_1234567890abcdef"
                         *     }
                         */
                        data: {
                            id: string;
                        };
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    getProviderById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                providerId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            id: string;
                            name: string;
                            type: "banktransfer" | "openbanking" | "stripe" | "realex" | "worldpay";
                            status: "connected" | "disconnected";
                            data: {
                                iban: string;
                                accountHolderName: string;
                            } | {
                                iban: string;
                                accountHolderName: string;
                            } | {
                                livePublishableKey: string;
                                liveSecretKey: string;
                                webhookSigningKey?: string;
                            } | {
                                merchantCode: string;
                                installationId: string;
                                username: string;
                                password: string;
                            } | {
                                merchantId: string;
                                sharedSecret: string;
                            };
                        };
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    updateProvider: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                providerId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name: string;
                    type: "banktransfer" | "openbanking" | "stripe" | "realex" | "worldpay";
                    data: {
                        [key: string]: string;
                    };
                    status: "connected" | "disconnected";
                };
            };
        };
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            ok: boolean;
                        };
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    listPaymentRequests: {
        parameters: {
            query?: {
                offset?: number;
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            paymentRequestId: string;
                            title: {
                                en: string;
                                ga?: string;
                            };
                            description?: {
                                en: string;
                                ga?: string;
                            };
                            amount?: number;
                            reference?: string;
                            providers: {
                                userId: string;
                                id: string;
                                name: string;
                                type: "banktransfer" | "openbanking" | "stripe" | "realex" | "worldpay";
                                status: "connected" | "disconnected";
                                createdAt: string;
                            }[];
                            allowedAuthMethods: ("email_otp" | "social:mygovid")[];
                            status: "active" | "inactive" | "draft";
                        }[];
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
        };
    };
    updatePaymentRequest: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    title: {
                        en: string;
                        ga?: string;
                    };
                    description: {
                        en: string | null;
                        ga?: string;
                    };
                    reference: string | null;
                    amount: number | null;
                    redirectUrl: string | null;
                    allowAmountOverride: boolean;
                    allowCustomAmount: boolean;
                    allowedAuthMethods: ("email_otp" | "social:mygovid")[];
                    providers: string[];
                    status: "active" | "inactive" | "draft";
                    paymentRequestId: string;
                    providersUpdate: {
                        toDisable: string[];
                        toCreate: string[];
                    };
                };
            };
        };
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @example {
                         *       "id": "pr_1234567890abcdef"
                         *     }
                         */
                        data: {
                            id: string;
                        };
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            "4XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            "5XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    createPaymentRequest: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    title: {
                        en: string;
                        ga?: string;
                    };
                    description: {
                        en: string | null;
                        ga?: string;
                    };
                    reference: string | null;
                    amount: number | null;
                    redirectUrl: string | null;
                    allowAmountOverride: boolean;
                    allowCustomAmount: boolean;
                    allowedAuthMethods: ("email_otp" | "social:mygovid")[];
                    providers: string[];
                    status: "active" | "inactive" | "draft";
                };
            };
        };
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @example {
                         *       "id": "pr_1234567890abcdef"
                         *     }
                         */
                        data: {
                            id: string;
                        };
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            "4XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            "5XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    getExternalPaymentRequestInfo: {
        parameters: {
            query?: {
                offset?: number;
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            paymentRequestId: string;
                            title: {
                                en: string;
                                ga?: string;
                            };
                            description?: {
                                en: string;
                                ga?: string;
                            };
                            amount?: number;
                            allowedAuthMethods: ("email_otp" | "social:mygovid")[];
                            allowAmountOverride: boolean;
                            createdAt: string;
                        }[];
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
        };
    };
    getPaymentRequestById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                requestId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @example {
                         *       "paymentRequestId": "pr_1234567890abcdef",
                         *       "title": {
                         *         "en": "Driver License Renewal Fee",
                         *         "ga": "Táille Athnuachana Ceadúnais Tiomána"
                         *       },
                         *       "description": {
                         *         "en": "Payment for renewing your driver license",
                         *         "ga": "Íocaíocht le haghaidh do cheadúnais tiomána a athnuachan"
                         *       },
                         *       "amount": 55,
                         *       "reference": "DLR-2024-001",
                         *       "providers": [
                         *         {
                         *           "userId": "user_123",
                         *           "id": "prov_stripe_001",
                         *           "name": "Stripe Production",
                         *           "type": "stripe",
                         *           "status": "connected",
                         *           "createdAt": "2024-01-15T10:30:00Z"
                         *         },
                         *         {
                         *           "userId": "user_123",
                         *           "id": "prov_realex_001",
                         *           "name": "Realex Production",
                         *           "type": "realex",
                         *           "status": "connected",
                         *           "createdAt": "2024-01-15T10:30:00Z"
                         *         }
                         *       ],
                         *       "status": "active",
                         *       "redirectUrl": "https://example.com/payment-success",
                         *       "allowAmountOverride": false,
                         *       "allowCustomAmount": false,
                         *       "allowedAuthMethods": [
                         *         "email_otp"
                         *       ]
                         *     }
                         */
                        data: {
                            paymentRequestId: string;
                            title: {
                                en: string;
                                ga?: string;
                            };
                            description?: {
                                en: string;
                                ga?: string;
                            };
                            amount?: number;
                            reference?: string;
                            providers: {
                                userId: string;
                                id: string;
                                name: string;
                                type: "banktransfer" | "openbanking" | "stripe" | "realex" | "worldpay";
                                status: "connected" | "disconnected";
                                createdAt: string;
                            }[];
                            allowedAuthMethods: ("email_otp" | "social:mygovid")[];
                            status: "active" | "inactive" | "draft";
                            redirectUrl?: string;
                            allowAmountOverride: boolean;
                            allowCustomAmount: boolean;
                        };
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    deletePaymentRequest: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                requestId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
            /** @description Default Response */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    getPublicPaymentRequestInfo: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                requestId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @example {
                         *       "paymentRequestId": "pr_1234567890abcdef",
                         *       "title": {
                         *         "en": "Driver License Renewal Fee",
                         *         "ga": "Táille Athnuachana Ceadúnais Tiomána"
                         *       },
                         *       "description": {
                         *         "en": "Payment for renewing your driver license",
                         *         "ga": "Íocaíocht le haghaidh do cheadúnais tiomána a athnuachan"
                         *       },
                         *       "amount": 55,
                         *       "reference": "DLR-2024-001",
                         *       "providers": [
                         *         {
                         *           "userId": "user_123",
                         *           "id": "prov_stripe_001",
                         *           "name": "Stripe Production",
                         *           "type": "stripe",
                         *           "status": "connected",
                         *           "data": {
                         *             "livePublishableKey": "pk_live_51H1234567890abcdef"
                         *           },
                         *           "createdAt": "2024-01-15T10:30:00Z"
                         *         }
                         *       ],
                         *       "status": "active",
                         *       "redirectUrl": "https://example.com/payment-success",
                         *       "allowAmountOverride": false,
                         *       "allowCustomAmount": false
                         *     }
                         */
                        data: {
                            paymentRequestId: string;
                            title: {
                                en: string;
                                ga?: string;
                            };
                            description?: {
                                en: string;
                                ga?: string;
                            };
                            amount: number;
                            reference: string;
                            providers: {
                                userId: string;
                                id: string;
                                name: string;
                                type: "banktransfer" | "openbanking" | "stripe" | "realex" | "worldpay";
                                status: "connected" | "disconnected";
                                data: {
                                    iban: string;
                                    accountHolderName: string;
                                } | {
                                    livePublishableKey: string;
                                } | Record<string, never>;
                                createdAt: string;
                            }[];
                            status: "active" | "inactive" | "draft";
                            redirectUrl: string;
                            allowAmountOverride: boolean;
                            allowCustomAmount: boolean;
                            allowedAuthMethods: ("email_otp" | "social:mygovid")[];
                        };
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    decodePaymentRequestToken: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /**
                 * @example {
                 *       "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbW91bnQiOiIyNS4wMCIsInJ1bklkIjoicnVuX2V4YW1wbGUxMjM0NTY3ODkwIiwiam91cm5leUlkIjoiam91cm5leV9leGFtcGxlMTIzNDU2Nzg5MCIsInJlZGlyZWN0VXJscyI6eyJlbiI6Imh0dHBzOi8vZXhhbXBsZS5jb20vc3VjY2VzcyIsImdhIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS9zdWNjZXNzLWdhIn19.example_signature"
                 *     }
                 */
                "application/json": {
                    token: string;
                };
            };
        };
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @example {
                         *       "amount": "25.00",
                         *       "runId": "run_1234567890",
                         *       "journeyId": "journey_1234567890",
                         *       "redirectUrls": {
                         *         "en": "https://example.com/success",
                         *         "ga": "https://example.com/success-ga"
                         *       }
                         *     }
                         */
                        data: {
                            amount?: string;
                            runId: string;
                            journeyId: string;
                            redirectUrls: {
                                en: string;
                                ga: string;
                            };
                        };
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    getPaymentRequestTransactions: {
        parameters: {
            query?: {
                offset?: number;
                limit?: number;
            };
            header?: never;
            path: {
                requestId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            transactionId: string;
                            status: "initiated" | "pending" | "succeeded" | "cancelled" | "cancellation_requested" | "failed" | "refunded" | "refund_failed";
                            amount: number;
                            extPaymentId: string;
                            choosenAuthMethod: string;
                            paymentProviderId: string;
                            updatedAt: string;
                            title: {
                                en: string;
                                ga?: string;
                            };
                        }[];
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            "4XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            "5XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    getTransactionById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                transactionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @example {
                         *       "transactionId": "tx_1234567890abcdef",
                         *       "status": "succeeded",
                         *       "amount": 25,
                         *       "extPaymentId": "pi_stripe_1234567890",
                         *       "paymentProviderId": "prov_stripe_001",
                         *       "updatedAt": "2024-01-15T14:30:00Z",
                         *       "title": {
                         *         "en": "Driver License Renewal Fee",
                         *         "ga": "Táille Athnuachana Ceadúnais Tiomána"
                         *       },
                         *       "choosenAuthMethod": "email_otp",
                         *       "description": {
                         *         "en": "Payment for renewing your driver license",
                         *         "ga": "Íocaíocht le haghaidh do cheadúnais tiomána a athnuachan"
                         *       },
                         *       "providerName": "Stripe Production",
                         *       "providerType": "stripe",
                         *       "paymentRequestId": "pr_1234567890abcdef",
                         *       "userId": "user_1234567890",
                         *       "metadata": {
                         *         "runId": "run_1234567890",
                         *         "journeyId": "journey_1234567890",
                         *         "journeyTitle": {
                         *           "en": "Driver License Application",
                         *           "ga": "Iarratas ar Cheadúnas Tiomána"
                         *         },
                         *         "redirectUrls": {
                         *           "en": "https://example.com/success",
                         *           "ga": "https://example.com/success-ga"
                         *         },
                         *         "amount": "25.00",
                         *         "providerData": {
                         *           "chargeId": "ch_stripe_1234567890"
                         *         }
                         *       }
                         *     }
                         */
                        data: {
                            transactionId: string;
                            status: "initiated" | "pending" | "succeeded" | "cancelled" | "cancellation_requested" | "failed" | "refunded" | "refund_failed";
                            amount: number;
                            extPaymentId: string;
                            choosenAuthMethod: string;
                            paymentProviderId: string;
                            updatedAt: string;
                            title: {
                                en: string;
                                ga?: string;
                            };
                            userId: string;
                            metadata: {
                                runId?: string;
                                journeyId?: string;
                                journeyTitle?: {
                                    en: string;
                                    ga?: string;
                                };
                                redirectUrls?: {
                                    en: string;
                                    ga: string;
                                };
                                amount?: string;
                                providerData?: {
                                    chargeId: string;
                                };
                            };
                            description: {
                                en: string;
                                ga?: string;
                            };
                            providerName: string;
                            providerType: string;
                            paymentRequestId: string;
                        };
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    deleteTransaction: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                transactionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @example {
                         *       "success": true
                         *     }
                         */
                        data: {
                            success: boolean;
                        };
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    getTransactionIdByExternalPaymentId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                extPaymentId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @example {
                         *       "id": "pr_1234567890abcdef"
                         *     }
                         */
                        data: {
                            id: string;
                        };
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    listTransactions: {
        parameters: {
            query?: {
                offset?: number;
                limit?: number;
                search?: string;
                from?: string;
                to?: string;
                status?: string | "initiated" | "pending" | "succeeded" | "cancelled" | "cancellation_requested" | "failed" | "refunded" | "refund_failed";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            transactionId: string;
                            status: "initiated" | "pending" | "succeeded" | "cancelled" | "cancellation_requested" | "failed" | "refunded" | "refund_failed";
                            amount: number;
                            extPaymentId: string;
                            choosenAuthMethod: string;
                            paymentProviderId: string;
                            updatedAt: string;
                            title: {
                                en: string;
                                ga?: string;
                            };
                            userId: string;
                            metadata: {
                                runId?: string;
                                journeyId?: string;
                                journeyTitle?: {
                                    en: string;
                                    ga?: string;
                                };
                                redirectUrls?: {
                                    en: string;
                                    ga: string;
                                };
                                amount?: string;
                                providerData?: {
                                    chargeId: string;
                                };
                            };
                            description: {
                                en: string;
                                ga?: string;
                            };
                            providerName: string;
                            providerType: string;
                            paymentRequestId: string;
                        }[];
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    createTransaction: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    paymentRequestId: string;
                    extPaymentId: string;
                    amount: number;
                    paymentProviderId: string;
                    metadata: {
                        runId?: string;
                        journeyId?: string;
                        journeyTitle?: {
                            en: string;
                            ga?: string;
                        };
                        redirectUrls?: {
                            en: string;
                            ga: string;
                        };
                        amount?: string;
                        providerData?: {
                            chargeId: string;
                        };
                    };
                    token?: string;
                };
            };
        };
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @example {
                         *       "id": "pr_1234567890abcdef"
                         *     }
                         */
                        data: {
                            id: string;
                        };
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    searchTransactions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    transactionIds: string[];
                };
            };
        };
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            transactionId: string;
                            status: "initiated" | "pending" | "succeeded" | "cancelled" | "cancellation_requested" | "failed" | "refunded" | "refund_failed";
                            amount: number;
                            extPaymentId: string;
                            choosenAuthMethod: string;
                            paymentProviderId: string;
                            updatedAt: string;
                            title: {
                                en: string;
                                ga?: string;
                            };
                            userId: string;
                            metadata: {
                                runId?: string;
                                journeyId?: string;
                                journeyTitle?: {
                                    en: string;
                                    ga?: string;
                                };
                                redirectUrls?: {
                                    en: string;
                                    ga: string;
                                };
                                amount?: string;
                                providerData?: {
                                    chargeId: string;
                                };
                            };
                            description: {
                                en: string;
                                ga?: string;
                            };
                            providerName: string;
                            providerType: string;
                            paymentRequestId: string;
                        }[];
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    getTransactionSchema: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        examples?: Record<string, never>[];
                        type?: string;
                        properties?: {
                            userId?: {
                                type?: string;
                            };
                            transactionId?: {
                                type?: string;
                            };
                            paymentRequestId?: {
                                type?: string;
                            };
                            paymentRequestTitle?: {
                                type?: string;
                                properties?: {
                                    en?: {
                                        type?: string;
                                    };
                                    ga?: {
                                        type?: string;
                                    };
                                };
                                required?: string[];
                            };
                            amount?: {
                                minimum?: number;
                                maximum?: number;
                                type?: string;
                            };
                            extReferenceCode?: {
                                type?: string;
                            };
                            paymentMethod?: {
                                type?: string;
                            };
                            paymentProviderName?: {
                                type?: string;
                            };
                            choosenAuthMethod?: {
                                type?: string;
                            };
                            status?: {
                                anyOf?: {
                                    const?: string;
                                    type?: string;
                                }[];
                            };
                            createdAt?: {
                                type?: string;
                            };
                            updatedAt?: {
                                type?: string;
                            };
                        };
                        required?: string[];
                    };
                };
            };
        };
    };
    generatePaymentIntentId: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @example {
                         *       "intentId": "pi_1234567890abcdef"
                         *     }
                         */
                        data: {
                            intentId: string;
                        };
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    getTransactionData: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                transactionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @example {
                         *       "userId": "user_1234567890",
                         *       "transactionId": "tx_1234567890abcdef",
                         *       "paymentRequestId": "pr_1234567890abcdef",
                         *       "paymentRequestTitle": {
                         *         "en": "Driver License Renewal Fee",
                         *         "ga": "Táille Athnuachana Ceadúnais Tiomána"
                         *       },
                         *       "amount": 25,
                         *       "extReferenceCode": "pi_stripe_1234567890",
                         *       "paymentMethod": "card",
                         *       "paymentProviderName": "Stripe Production",
                         *       "choosenAuthMethod": "email_otp",
                         *       "status": "succeeded",
                         *       "createdAt": "2024-01-15T14:30:00Z",
                         *       "updatedAt": "2024-01-15T14:30:00Z"
                         *     }
                         */
                        data: {
                            userId: string;
                            transactionId: string;
                            paymentRequestId: string;
                            paymentRequestTitle: {
                                en: string;
                                ga?: string;
                            };
                            amount: number;
                            extReferenceCode: string;
                            paymentMethod: string;
                            paymentProviderName: string;
                            choosenAuthMethod: string;
                            status: "initiated" | "pending" | "succeeded" | "cancelled" | "cancellation_requested" | "failed" | "refunded" | "refund_failed";
                            createdAt: string;
                            updatedAt: string;
                        };
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    getTransactionToken: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                transactionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @example {
                         *       "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyX2V4YW1wbGUxMjM0NTY3ODkwIiwidHJhbnNhY3Rpb25JZCI6InR4X2V4YW1wbGUxMjM0NTY3ODkwYWJjZGVmIiwiam1vdW50IjoyNS4wMCwiZGF0ZSI6IjIwMjQtMDEtMTVUMTQ6MzA6MDBaIiwicHJvdmlkZXIiOiJTdHJpcGUifS5leGFtcGxlX3NpZ25hdHVyZSIs"
                         *     }
                         */
                        data: {
                            token: string;
                        };
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    getRefundDetails: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                transactionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @example {
                         *       "id": "ref_1234567890abcdef",
                         *       "transactionId": "tx_1234567890abcdef",
                         *       "amount": 25,
                         *       "status": "succeeded",
                         *       "type": "full",
                         *       "reason": "Customer requested refund",
                         *       "notes": "Payment was made in error",
                         *       "createdAt": "2024-01-15T15:00:00Z",
                         *       "updatedAt": "2024-01-15T15:05:00Z",
                         *       "username": "John Doe",
                         *       "organizationId": "org_1234567890"
                         *     }
                         */
                        data: {
                            id: string;
                            transactionId: string;
                            amount: number;
                            status: "pending" | "succeeded" | "failed" | "requires_action" | "canceled";
                            type: "full" | "partial";
                            reason: string;
                            notes?: string;
                            createdAt: string;
                            updatedAt: string;
                            username: string;
                            organizationId: string;
                        };
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    createRefund: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                transactionId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    amount: number;
                    reason: string;
                    notes?: string;
                };
            };
        };
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @example {
                         *       "status": "succeeded"
                         *     }
                         */
                        data: {
                            status: string;
                        };
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    cancelPayment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                transactionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @example {
                         *       "success": true
                         *     }
                         */
                        data: {
                            success: boolean;
                        };
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    getCitizenTransactions: {
        parameters: {
            query?: {
                offset?: number;
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            transactionId: string;
                            status: "initiated" | "pending" | "succeeded" | "cancelled" | "cancellation_requested" | "failed" | "refunded" | "refund_failed";
                            title: {
                                en: string;
                                ga?: string;
                            };
                            updatedAt: string;
                            extPaymentId: string;
                            amount: number;
                        }[];
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    getCitizenTransactionById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                transactionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @example {
                         *       "transactionId": "tx_1234567890abcdef",
                         *       "status": "succeeded",
                         *       "amount": 25,
                         *       "extPaymentId": "pi_stripe_1234567890",
                         *       "paymentProviderId": "prov_stripe_001",
                         *       "updatedAt": "2024-01-15T14:30:00Z",
                         *       "title": {
                         *         "en": "Driver License Renewal Fee",
                         *         "ga": "Táille Athnuachana Ceadúnais Tiomána"
                         *       },
                         *       "choosenAuthMethod": "email_otp",
                         *       "description": {
                         *         "en": "Payment for renewing your driver license",
                         *         "ga": "Íocaíocht le haghaidh do cheadúnais tiomána a athnuachan"
                         *       },
                         *       "providerName": "Stripe Production",
                         *       "providerType": "stripe",
                         *       "paymentRequestId": "pr_1234567890abcdef",
                         *       "userId": "user_1234567890",
                         *       "metadata": {
                         *         "runId": "run_1234567890",
                         *         "journeyId": "journey_1234567890",
                         *         "journeyTitle": {
                         *           "en": "Driver License Application",
                         *           "ga": "Iarratas ar Cheadúnas Tiomána"
                         *         },
                         *         "redirectUrls": {
                         *           "en": "https://example.com/success",
                         *           "ga": "https://example.com/success-ga"
                         *         },
                         *         "amount": "25.00",
                         *         "providerData": {
                         *           "chargeId": "ch_stripe_1234567890"
                         *         }
                         *       }
                         *     }
                         */
                        data: {
                            transactionId: string;
                            status: "initiated" | "pending" | "succeeded" | "cancelled" | "cancellation_requested" | "failed" | "refunded" | "refund_failed";
                            amount: number;
                            extPaymentId: string;
                            choosenAuthMethod: string;
                            paymentProviderId: string;
                            updatedAt: string;
                            title: {
                                en: string;
                                ga?: string;
                            };
                            userId: string;
                            metadata: {
                                runId?: string;
                                journeyId?: string;
                                journeyTitle?: {
                                    en: string;
                                    ga?: string;
                                };
                                redirectUrls?: {
                                    en: string;
                                    ga: string;
                                };
                                amount?: string;
                                providerData?: {
                                    chargeId: string;
                                };
                            };
                            description: {
                                en: string;
                                ga?: string;
                            };
                            providerName: string;
                            providerType: string;
                            paymentRequestId: string;
                        };
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    getRealexPaymentObject: {
        parameters: {
            query: {
                amount: string;
                intentId: string;
                providerId: string;
                paymentRequestId: string;
                token?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @example {
                         *       "ACCOUNT": "internet",
                         *       "AMOUNT": "2500",
                         *       "CURRENCY": "EUR",
                         *       "MERCHANT_ID": "merchant_1234567890",
                         *       "ORDER_ID": "pi_realex_1234567890",
                         *       "TIMESTAMP": "20240115143000",
                         *       "URL": "https://hpp.realexpayments.com/pay",
                         *       "SHA256HASH": "a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456"
                         *     }
                         */
                        data: {
                            ACCOUNT: string;
                            AMOUNT: string;
                            CURRENCY: string;
                            MERCHANT_ID: string;
                            ORDER_ID: string;
                            TIMESTAMP: string;
                            URL: string;
                            SHA256HASH: string;
                        };
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    verifyRealexPaymentResponse: {
        parameters: {
            query?: {
                customAmount?: string;
                token?: string;
                embed?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            /** @description Default Response */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    handleRealexStatusUpdate: {
        parameters: {
            query: {
                sha1hash: string;
                timestamp: string;
                merchantid: string;
                orderid: string;
                result: string;
                message: string;
                pasref: string;
                paymentmethod: string;
                waitfornotification: string;
                fundstatus: string;
                paymentpurpose: string;
                acountholdername: string;
                country: string;
                accountnumber: string;
                iban: string;
                bic: string;
                bankname: string;
                bankcode: string;
                redirectoptional: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listAuditLogEvents: {
        parameters: {
            query?: {
                offset?: number;
                limit?: number;
                resource?: string;
                resourceId?: string;
                action?: string;
                from?: string;
                to?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            auditLogId: string;
                            createdAt: string;
                            eventType: string;
                            title: string;
                            userId?: string;
                            organizationId?: string;
                            resourceId?: string;
                        }[];
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    getAuditLogEventTypes: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            [key: string]: string;
                        };
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    getAuditLogEventById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                auditLogId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            auditLogId: string;
                            createdAt: string;
                            eventType: string;
                            title: string;
                            userId?: string;
                            organizationId?: string;
                            metadata: {
                                [key: string]: unknown;
                            };
                        };
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    createStripePaymentIntent: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    paymentRequestId: string;
                    amount: number;
                    token?: string;
                };
            };
        };
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @example {
                         *       "id": "pi_example1234567890",
                         *       "clientSecret": "pi_example1234567890_secret_example1234567890"
                         *     }
                         */
                        data: {
                            id: string;
                            clientSecret: string | null;
                        };
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    handleStripeWebhook: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    resourceCleanup: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: boolean;
                    };
                };
            };
            /** @description Default Response */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    createWorldpayPaymentRequest: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    intentId: string;
                    amount: string;
                    paymentRequestId: string;
                    token?: string;
                };
            };
        };
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @example {
                         *       "reference": "https://hpp.worldpay.com/pay"
                         *     }
                         */
                        data: {
                            reference: string;
                        };
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
            /** @description Default Response */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
            /** @description Default Response */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    handleWorldpayWebhook: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    eventId: string;
                    eventTimestamp: string;
                    eventDetails: {
                        classification: string;
                        downstreamReference?: string;
                        transactionReference?: string;
                        type: string;
                        date: string;
                    };
                    reference?: string;
                    refund?: {
                        onlineRefundAuthorization: string;
                        refusal?: {
                            code: string;
                            description: string;
                        };
                    };
                    amount?: {
                        value: number;
                        currencyCode: string;
                    };
                    value?: number;
                    _links?: Record<string, never>;
                };
            };
        };
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
            /** @description Default Response */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        code: string;
                        detail: string;
                        requestId: string;
                        name: string;
                        validation?: unknown;
                        validationContext?: string;
                    };
                };
            };
        };
    };
    verifyJWTToken: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /**
                 * @example {
                 *       "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleGFtcGxlIjoiZXhhbXBsZV90b2tlbl9kYXRhIn0uZXhhbXBsZV9zaWduYXR1cmU"
                 *     }
                 */
                "application/json": {
                    token: string;
                };
            };
        };
        responses: {
            /** @description Default Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @example {
                         *       "isValid": true
                         *     }
                         */
                        data: {
                            isValid: boolean;
                        };
                        metadata?: {
                            /** @description Object containing the links to the related endpoints */
                            links?: {
                                self: {
                                    /** @description URL pointing to the request itself */
                                    href?: string;
                                };
                                next?: {
                                    /** @description URL pointing to the next page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                prev?: {
                                    /** @description URL pointing to the previous page of results in a paginated response. If there are no more results, this field may be omitted */
                                    href?: string;
                                };
                                first: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                last: {
                                    /** @description URL pointing to the first page of results in a paginated response */
                                    href?: string;
                                };
                                /** @description It may contain a list of other useful URLs, e.g. one entry for page:'page 1', 'page 2' */
                                pages: {
                                    [key: string]: {
                                        href?: string;
                                    };
                                };
                            };
                            /** @description Number representing the total number of available items */
                            totalCount?: number;
                        };
                    };
                };
            };
        };
    };
}
