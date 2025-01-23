export interface paths {
    "/.well-known/jwks.json": {
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
                            data: {
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
                            data: {
                                amount?: string;
                                runId: string;
                                journeyId: string;
                                redirectUrl: string;
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
                                status: "initiated" | "pending" | "succeeded" | "cancelled" | "cancellation_requested" | "failed" | "refunded" | "refund_failed";
                                amount: number;
                                extPaymentId: string;
                                paymentProviderId: string;
                                updatedAt: string;
                                title: string;
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
                                status: "initiated" | "pending" | "succeeded" | "cancelled" | "cancellation_requested" | "failed" | "refunded" | "refund_failed";
                                amount: number;
                                extPaymentId: string;
                                paymentProviderId: string;
                                updatedAt: string;
                                title: string;
                                userId: string;
                                metadata: {
                                    runId?: string;
                                    journeyId?: string;
                                    journeyTitle?: string;
                                    redirectUrl?: string;
                                    amount?: string;
                                };
                                description: string;
                                providerName: string;
                                providerType: string;
                                paymentRequestId: string;
                                userInfo: {
                                    name: string;
                                    email: string;
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
        get: {
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
                                status: "initiated" | "pending" | "succeeded" | "cancelled" | "cancellation_requested" | "failed" | "refunded" | "refund_failed";
                                amount: number;
                                extPaymentId: string;
                                paymentProviderId: string;
                                updatedAt: string;
                                title: string;
                                userId: string;
                                metadata: {
                                    runId?: string;
                                    journeyId?: string;
                                    journeyTitle?: string;
                                    redirectUrl?: string;
                                    amount?: string;
                                };
                                description: string;
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
                        metadata: {
                            runId?: string;
                            journeyId?: string;
                            journeyTitle?: string;
                            redirectUrl?: string;
                            amount?: string;
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
                                userId: string;
                                transactionId: string;
                                paymentRequestId: string;
                                paymentRequestTitle: string;
                                amount: number;
                                extReferenceCode: string;
                                paymentMethod: string;
                                paymentProviderName: string;
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
                                email: string;
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
        put?: never;
        post: {
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
        post: {
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
                                status: "initiated" | "pending" | "succeeded" | "cancelled" | "cancellation_requested" | "failed" | "refunded" | "refund_failed";
                                title: string;
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
                                status: "initiated" | "pending" | "succeeded" | "cancelled" | "cancellation_requested" | "failed" | "refunded" | "refund_failed";
                                amount: number;
                                extPaymentId: string;
                                paymentProviderId: string;
                                updatedAt: string;
                                title: string;
                                userId: string;
                                metadata: {
                                    runId?: string;
                                    journeyId?: string;
                                    journeyTitle?: string;
                                    redirectUrl?: string;
                                    amount?: string;
                                };
                                description: string;
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
