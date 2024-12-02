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
    "/api/v1/journeys/": {
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
                    ids?: string | string[];
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
                                id: string;
                                title: string;
                                userId: string;
                                organizationId: string;
                                status: "active" | "draft";
                                initialStepId: string;
                                createdAt: string;
                                updatedAt: string;
                                userName: string;
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
                        title: string;
                        organizationId: string;
                        userId: string;
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
    "/api/v1/journeys/{journeyId}": {
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
                    journeyId: string;
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
                                title: string;
                                userId: string;
                                organizationId: string;
                                status: "active" | "draft";
                                createdAt: string;
                                updatedAt: string;
                                initialStepId: string;
                                steps: {
                                    id: string;
                                    journeyId: string;
                                    stepType: "title" | "form" | "payment" | "messaging" | "complete";
                                    stepData: {
                                        url: string;
                                    } | {
                                        paymentRequestId: string;
                                        title: string;
                                    } | {
                                        templateId: string;
                                        title: string;
                                        organisationId: string;
                                    } | {
                                        buttonLabel: string;
                                        returnUrl: string;
                                    } | Record<string, never>;
                                    configured: boolean;
                                    createdAt: string;
                                    updatedAt: string;
                                }[];
                                connections: {
                                    id: string;
                                    sourceStepId: string;
                                    destinationStepId: string;
                                }[];
                                userName: string;
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
                    journeyId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        title: string;
                        status: "active" | "draft";
                        initialStepId: string;
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
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/journeys/{journeyId}/public-info": {
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
                    journeyId: string;
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
                                title: string;
                                userId: string;
                                organizationId: string;
                                status: "active" | "draft";
                                initialStepId: string;
                                createdAt: string;
                                updatedAt: string;
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
    "/api/v1/journeys/{journeyId}/schema": {
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
                    journeyId: string;
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
                                journeyId: string;
                                jounrneyTitle: string;
                                steps: {
                                    stepId: string;
                                    type: "title" | "form" | "payment" | "messaging" | "complete";
                                    resourceId: string;
                                    stepSchema?: unknown;
                                }[];
                                stepConnections: {
                                    id: string;
                                    sourceStepId: string;
                                    destinationStepId: string;
                                }[];
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
    "/api/v1/journeys/create-journey": {
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
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/journey_step_connections/{connectionId}": {
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
                    connectionId: string;
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
                                sourceStepId: string;
                                destinationStepId: string;
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
                    connectionId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            data?: Record<string, never>;
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/journey_step_connections/": {
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
                        sourceStepId: string;
                        destinationStepId: string;
                        journeyId: string;
                    };
                };
            };
            responses: {
                /** @description Default Response */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            data: {
                                id: string;
                                sourceStepId: string;
                                destinationStepId: string;
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
    "/api/v1/journey_steps/{stepId}": {
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
                    stepId: string;
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
                                journeyId: string;
                                stepType: "title" | "form" | "payment" | "messaging" | "complete";
                                stepData: {
                                    url: string;
                                } | {
                                    paymentRequestId: string;
                                    title: string;
                                } | {
                                    templateId: string;
                                    title: string;
                                    organisationId: string;
                                } | {
                                    buttonLabel: string;
                                    returnUrl: string;
                                } | Record<string, never>;
                                configured: boolean;
                                createdAt: string;
                                updatedAt: string;
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
                    stepId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        stepData: {
                            url: string;
                        } | {
                            paymentRequestId: string;
                            title: string;
                        } | {
                            templateId: string;
                            title: string;
                            organisationId: string;
                        } | {
                            buttonLabel: string;
                            returnUrl: string;
                        } | Record<string, never>;
                        configured: boolean;
                        stepType: "title" | "form" | "payment" | "messaging" | "complete";
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
                                journeyId: string;
                                stepType: "title" | "form" | "payment" | "messaging" | "complete";
                                stepData: {
                                    url: string;
                                } | {
                                    paymentRequestId: string;
                                    title: string;
                                } | {
                                    templateId: string;
                                    title: string;
                                    organisationId: string;
                                } | {
                                    buttonLabel: string;
                                    returnUrl: string;
                                } | Record<string, never>;
                                configured: boolean;
                                createdAt: string;
                                updatedAt: string;
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
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    stepId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            data?: Record<string, never>;
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/journey_steps/": {
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
                        journeyId: string;
                        stepType: "title" | "form" | "payment" | "messaging" | "complete";
                        stepData: {
                            url: string;
                        } | {
                            paymentRequestId: string;
                            title: string;
                        } | {
                            templateId: string;
                            title: string;
                            organisationId: string;
                        } | {
                            buttonLabel: string;
                            returnUrl: string;
                        } | Record<string, never>;
                        configured: boolean;
                    };
                };
            };
            responses: {
                /** @description Default Response */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            data: {
                                id: string;
                                journeyId: string;
                                stepType: "title" | "form" | "payment" | "messaging" | "complete";
                                stepData: {
                                    url: string;
                                } | {
                                    paymentRequestId: string;
                                    title: string;
                                } | {
                                    templateId: string;
                                    title: string;
                                    organisationId: string;
                                } | {
                                    buttonLabel: string;
                                    returnUrl: string;
                                } | Record<string, never>;
                                configured: boolean;
                                createdAt: string;
                                updatedAt: string;
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
    "/api/v1/executor/runs/self": {
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
                                userId: string;
                                journeyId: string;
                                status: "pending" | "failed" | "completed";
                                createdAt: string;
                                updatedAt: string;
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
    "/api/v1/executor/runs/self/{runId}": {
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
                    runId: string;
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
                                userId: string;
                                journeyId: string;
                                status: "pending" | "failed" | "completed";
                                createdAt: string;
                                updatedAt: string;
                                steps: {
                                    id: string;
                                    runId: string;
                                    stepId: string;
                                    stepType: "title" | "form" | "payment" | "messaging" | "complete";
                                    status: "pending" | "in_progress" | "failed" | "completed";
                                    data?: Record<string, never> | {
                                        formSubmissionId: string;
                                    } | {
                                        transactionId: string;
                                    };
                                    createdAt: string;
                                    updatedAt: string;
                                }[];
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
    "/api/v1/executor/runs/journeys/{journeyId}": {
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
                    journeyId: string;
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
                                userId: string;
                                journeyId: string;
                                status: "pending" | "failed" | "completed";
                                createdAt: string;
                                updatedAt: string;
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
    "/api/v1/executor/runs/{runId}": {
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
                    runId: string;
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
                                userId: string;
                                journeyId: string;
                                status: "pending" | "failed" | "completed";
                                createdAt: string;
                                updatedAt: string;
                                steps: {
                                    id: string;
                                    runId: string;
                                    stepId: string;
                                    stepType: "title" | "form" | "payment" | "messaging" | "complete";
                                    status: "pending" | "in_progress" | "failed" | "completed";
                                    data?: Record<string, never> | {
                                        formSubmissionId: string;
                                    } | {
                                        transactionId: string;
                                    };
                                    createdAt: string;
                                    updatedAt: string;
                                }[];
                                organizationId: string;
                                email: string;
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
    "/api/v1/executor/runs": {
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
                    journeyId?: string;
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
                                id: string;
                                userId: string;
                                journeyId: string;
                                status: "pending" | "failed" | "completed";
                                createdAt: string;
                                updatedAt: string;
                                organizationId: string;
                                journeyTitle: string;
                                email: string;
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
    "/api/v1/executor/run": {
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
                        journeyId: string;
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
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/executor/execute": {
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
                        journeyId: string;
                        runId: string;
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
                                url: string;
                                stepId: string;
                                stepType: "title" | "form" | "payment" | "messaging" | "complete";
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
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/executor/transition": {
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
                        journeyId: string;
                        runId: string;
                        runStepId: string;
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
                                url: string;
                                stepId: string;
                                stepType: "title" | "form" | "payment" | "messaging" | "complete";
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
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/executor/get-summary": {
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
                        journeyId: string;
                        runId: string;
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
                                runId: string;
                                title: string;
                                createdAt: string;
                                actionLabel: string;
                                returnUrl: string;
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
