export interface paths {
    "/health": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
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
                    content?: never;
                };
            };
        };
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
        get: {
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
                            id: string;
                            name: string;
                            type: "banktransfer" | "openbanking" | "stripe" | "realex" | "worldpay";
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
                            } | {
                                merchantId: string;
                                sharedSecret: string;
                            };
                            status: "connected" | "disconnected";
                        }[];
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
        put?: never;
        post: {
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
                            id: string;
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
        get: {
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
                            id: string;
                            name: string;
                            type: "banktransfer" | "openbanking" | "stripe" | "realex" | "worldpay";
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
                            } | {
                                merchantId: string;
                                sharedSecret: string;
                            };
                            status: "connected" | "disconnected";
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
        put: {
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
                            ok: boolean;
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
        get: {
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
                                title: string;
                                description?: string;
                                amount?: number;
                                reference?: string;
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
                                        iban: string;
                                        accountHolderName: string;
                                    } | {
                                        livePublishableKey: string;
                                        liveSecretKey: string;
                                        webhookSigningKey?: string;
                                    } | {
                                        merchantCode: string;
                                        installationId: string;
                                    } | {
                                        merchantId: string;
                                        sharedSecret: string;
                                    };
                                    createdAt: string;
                                }[];
                                status: "active" | "inactive" | "draft";
                            }[];
                            metadata?: {
                                links?: {
                                    self: {
                                        href?: string;
                                    };
                                    next?: {
                                        href?: string;
                                    };
                                    prev?: {
                                        href?: string;
                                    };
                                    first: {
                                        href?: string;
                                    };
                                    last: {
                                        href?: string;
                                    };
                                    pages: {
                                        [key: string]: {
                                            href?: string;
                                        };
                                    };
                                };
                                totalCount?: number;
                            };
                        };
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        title: string;
                        description: string | null;
                        reference: string | null;
                        amount: number | null;
                        redirectUrl: string | null;
                        allowAmountOverride: boolean;
                        allowCustomAmount: boolean;
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
                            id: string;
                        };
                    };
                };
            };
        };
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        title: string;
                        description: string | null;
                        reference: string | null;
                        amount: number | null;
                        redirectUrl: string | null;
                        allowAmountOverride: boolean;
                        allowCustomAmount: boolean;
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
                            id: string;
                        };
                    };
                };
            };
        };
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
        get: {
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
                            paymentRequestId: string;
                            title: string;
                            description?: string;
                            amount?: number;
                            reference?: string;
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
                                    iban: string;
                                    accountHolderName: string;
                                } | {
                                    livePublishableKey: string;
                                    liveSecretKey: string;
                                    webhookSigningKey?: string;
                                } | {
                                    merchantCode: string;
                                    installationId: string;
                                } | {
                                    merchantId: string;
                                    sharedSecret: string;
                                };
                                createdAt: string;
                            }[];
                            status: "active" | "inactive" | "draft";
                            redirectUrl?: string;
                            allowAmountOverride: boolean;
                            allowCustomAmount: boolean;
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
        put?: never;
        post?: never;
        delete: {
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
        get: {
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
                            paymentRequestId: string;
                            title: string;
                            description: string;
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
                                    iban: string;
                                    accountHolderName: string;
                                } | {
                                    livePublishableKey: string;
                                    liveSecretKey: string;
                                    webhookSigningKey?: string;
                                } | {
                                    merchantCode: string;
                                    installationId: string;
                                } | {
                                    merchantId: string;
                                    sharedSecret: string;
                                };
                                createdAt: string;
                            }[];
                            status: "active" | "inactive" | "draft";
                            redirectUrl: string;
                            allowAmountOverride: boolean;
                            allowCustomAmount: boolean;
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
        put?: never;
        post?: never;
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
        get: {
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
                                status: "initiated" | "pending" | "succeeded" | "cancelled" | "failed";
                                amount: number;
                                extPaymentId: string;
                                paymentProviderId: string;
                                updatedAt: string;
                                title: string;
                            }[];
                            metadata?: {
                                links?: {
                                    self: {
                                        href?: string;
                                    };
                                    next?: {
                                        href?: string;
                                    };
                                    prev?: {
                                        href?: string;
                                    };
                                    first: {
                                        href?: string;
                                    };
                                    last: {
                                        href?: string;
                                    };
                                    pages: {
                                        [key: string]: {
                                            href?: string;
                                        };
                                    };
                                };
                                totalCount?: number;
                            };
                        };
                    };
                };
            };
        };
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
        get: {
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
                            data: {
                                transactionId: string;
                                status: "initiated" | "pending" | "succeeded" | "cancelled" | "failed";
                                amount: number;
                                extPaymentId: string;
                                paymentProviderId: string;
                                updatedAt: string;
                                title: string;
                                userId: string;
                                userData: {
                                    name: string;
                                    email: string;
                                };
                                description: string;
                                providerName: string;
                                providerType: string;
                                paymentRequestId: string;
                            };
                            metadata?: {
                                links?: {
                                    self: {
                                        href?: string;
                                    };
                                    next?: {
                                        href?: string;
                                    };
                                    prev?: {
                                        href?: string;
                                    };
                                    first: {
                                        href?: string;
                                    };
                                    last: {
                                        href?: string;
                                    };
                                    pages: {
                                        [key: string]: {
                                            href?: string;
                                        };
                                    };
                                };
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
        put?: never;
        post?: never;
        delete?: never;
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
                        status: "initiated" | "pending" | "succeeded" | "cancelled" | "failed";
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
    "/api/v1/transactions/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
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
                                status: "initiated" | "pending" | "succeeded" | "cancelled" | "failed";
                                amount: number;
                                extPaymentId: string;
                                paymentProviderId: string;
                                updatedAt: string;
                                title: string;
                                userId: string;
                                userData: {
                                    name: string;
                                    email: string;
                                };
                                description: string;
                                providerName: string;
                                providerType: string;
                                paymentRequestId: string;
                            }[];
                            metadata?: {
                                links?: {
                                    self: {
                                        href?: string;
                                    };
                                    next?: {
                                        href?: string;
                                    };
                                    prev?: {
                                        href?: string;
                                    };
                                    first: {
                                        href?: string;
                                    };
                                    last: {
                                        href?: string;
                                    };
                                    pages: {
                                        [key: string]: {
                                            href?: string;
                                        };
                                    };
                                };
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
        put?: never;
        post: {
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
                        integrationReference: string;
                        amount: number;
                        paymentProviderId: string;
                        userData: {
                            name: string;
                            email: string;
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
                            data: {
                                id: string;
                            };
                            metadata?: {
                                links?: {
                                    self: {
                                        href?: string;
                                    };
                                    next?: {
                                        href?: string;
                                    };
                                    prev?: {
                                        href?: string;
                                    };
                                    first: {
                                        href?: string;
                                    };
                                    last: {
                                        href?: string;
                                    };
                                    pages: {
                                        [key: string]: {
                                            href?: string;
                                        };
                                    };
                                };
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
        get: {
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
                                intentId: string;
                            };
                            metadata?: {
                                links?: {
                                    self: {
                                        href?: string;
                                    };
                                    next?: {
                                        href?: string;
                                    };
                                    prev?: {
                                        href?: string;
                                    };
                                    first: {
                                        href?: string;
                                    };
                                    last: {
                                        href?: string;
                                    };
                                    pages: {
                                        [key: string]: {
                                            href?: string;
                                        };
                                    };
                                };
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
        put?: never;
        post?: never;
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
        get: {
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
                                status: "initiated" | "pending" | "succeeded" | "cancelled" | "failed";
                                title: string;
                                updatedAt: string;
                                extPaymentId: string;
                                amount: number;
                            }[];
                            metadata?: {
                                links?: {
                                    self: {
                                        href?: string;
                                    };
                                    next?: {
                                        href?: string;
                                    };
                                    prev?: {
                                        href?: string;
                                    };
                                    first: {
                                        href?: string;
                                    };
                                    last: {
                                        href?: string;
                                    };
                                    pages: {
                                        [key: string]: {
                                            href?: string;
                                        };
                                    };
                                };
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
        get: {
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
                            data: {
                                transactionId: string;
                                status: "initiated" | "pending" | "succeeded" | "cancelled" | "failed";
                                amount: number;
                                extPaymentId: string;
                                paymentProviderId: string;
                                updatedAt: string;
                                title: string;
                                userId: string;
                                userData: {
                                    name: string;
                                    email: string;
                                };
                                description: string;
                                providerName: string;
                                providerType: string;
                                paymentRequestId: string;
                            };
                            metadata?: {
                                links?: {
                                    self: {
                                        href?: string;
                                    };
                                    next?: {
                                        href?: string;
                                    };
                                    prev?: {
                                        href?: string;
                                    };
                                    first: {
                                        href?: string;
                                    };
                                    last: {
                                        href?: string;
                                    };
                                    pages: {
                                        [key: string]: {
                                            href?: string;
                                        };
                                    };
                                };
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
        get: {
            parameters: {
                query: {
                    amount: string;
                    intentId: string;
                    providerId: string;
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
                            ACCOUNT: string;
                            AMOUNT: string;
                            CURRENCY: string;
                            MERCHANT_ID: string;
                            ORDER_ID: string;
                            TIMESTAMP: string;
                            URL: string;
                            SHA256HASH: string;
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
        post: {
            parameters: {
                query?: never;
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
        get: {
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
        get: {
            parameters: {
                query?: {
                    offset?: number;
                    limit?: number;
                    resource?: string;
                    action?: string;
                    user?: string;
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
                                links?: {
                                    self: {
                                        href?: string;
                                    };
                                    next?: {
                                        href?: string;
                                    };
                                    prev?: {
                                        href?: string;
                                    };
                                    first: {
                                        href?: string;
                                    };
                                    last: {
                                        href?: string;
                                    };
                                    pages: {
                                        [key: string]: {
                                            href?: string;
                                        };
                                    };
                                };
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
        get: {
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
                                links?: {
                                    self: {
                                        href?: string;
                                    };
                                    next?: {
                                        href?: string;
                                    };
                                    prev?: {
                                        href?: string;
                                    };
                                    first: {
                                        href?: string;
                                    };
                                    last: {
                                        href?: string;
                                    };
                                    pages: {
                                        [key: string]: {
                                            href?: string;
                                        };
                                    };
                                };
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
        get: {
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
                                links?: {
                                    self: {
                                        href?: string;
                                    };
                                    next?: {
                                        href?: string;
                                    };
                                    prev?: {
                                        href?: string;
                                    };
                                    first: {
                                        href?: string;
                                    };
                                    last: {
                                        href?: string;
                                    };
                                    pages: {
                                        [key: string]: {
                                            href?: string;
                                        };
                                    };
                                };
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
        put?: never;
        post?: never;
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
        post: {
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
export type operations = Record<string, never>;
