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
    "/user-login-wh": {
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
    "/api/v1/addresses/": {
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
                            addressId: string;
                            addressLine1: string;
                            addressLine2: string;
                            town: string;
                            county: string;
                            eirecode: string;
                            updatedAt: string;
                            moveInDate?: string;
                            moveOutDate?: string;
                            isPrimary?: boolean;
                            ownershipStatus?: string;
                        }[];
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
                        addressLine1: string;
                        addressLine2?: string;
                        town: string;
                        county: string;
                        eirecode: string;
                        moveInDate?: string;
                        moveOutDate?: string;
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
    "/api/v1/addresses/{addressId}": {
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
                    addressId: string;
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
                            addressId: string;
                            addressLine1: string;
                            addressLine2: string;
                            town: string;
                            county: string;
                            eirecode: string;
                            updatedAt: string;
                            moveInDate?: string;
                            moveOutDate?: string;
                            isPrimary?: boolean;
                            ownershipStatus?: string;
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
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    addressId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        addressLine1: string;
                        addressLine2?: string;
                        town: string;
                        county: string;
                        eirecode: string;
                        moveInDate?: string;
                        moveOutDate?: string;
                        isPrimary: boolean;
                        ownershipStatus: string;
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
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    addressId: string;
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
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    addressId: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        isPrimary?: boolean;
                        ownershipStatus?: string;
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
        trace?: never;
    };
    "/api/v1/entitlements/": {
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
                            firstname: string;
                            lastname: string;
                            type: string;
                            issueDate: string;
                            expiryDate?: string;
                            documentNumber: string;
                        }[];
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
    "/api/v1/users/{userId}": {
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
                    userId: string;
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
                            /** @default null */
                            title: null | string;
                            firstName: string;
                            lastName: string;
                            /** @default null */
                            dateOfBirth: null | string;
                            /** @default null */
                            ppsn: null | string;
                            /** @default false */
                            ppsnVisible: null | boolean;
                            /** @default null */
                            gender: null | string;
                            /** Format: email */
                            email: string;
                            /** @default null */
                            phone: null | string;
                            /** @default false */
                            consentToPrefillData: null | boolean;
                            /** @default en */
                            preferredLanguage: string;
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
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        firstname: string;
                        lastname: string;
                        email: string;
                        title: string;
                        dateOfBirth: string;
                        ppsn: string;
                        ppsnVisible: boolean;
                        gender: string;
                        phone: string;
                        consentToPrefillData?: boolean;
                        preferredLanguage: string;
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
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        ppsnVisible?: boolean;
                        consentToPrefillData?: boolean;
                        preferredLanguage?: string;
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
        trace?: never;
    };
    "/api/v1/users/": {
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
                        firstname: string;
                        lastname: string;
                        email: string;
                        title?: string;
                        dateOfBirth?: string;
                        ppsn?: string;
                        ppsnVisible?: boolean;
                        gender?: string;
                        phone?: string;
                        consentToPrefillData?: boolean;
                        /** @default en */
                        preferredLanguage: string;
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
    "/api/v1/users/find": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    firstname?: string;
                    lastname?: string;
                    email?: string;
                    dateOfBirth?: string;
                    ppsn?: string;
                    gender?: string;
                    phone?: string;
                    strict?: boolean;
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
                            id: string;
                            firstname: string;
                            lastname: string;
                            matchQuality: "exact" | "approximate";
                        };
                    };
                };
                /** @description Default Response */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
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
    "/api/v1/users/select": {
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
                        ids: string[];
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
                                firstName: string;
                                lastName: string;
                                ppsn: string;
                                /** Format: email */
                                email?: string;
                                phone?: string;
                                preferredLanguage: string;
                            }[];
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
