export interface paths {
    "/api/v1/profiles/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["indexProfiles"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/profiles/import-profiles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["importProfiles"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/profiles/select-profiles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["selectProfiles"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/profiles/find-profile": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["findProfile"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/profiles/{profileId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getProfile"];
        put: operations["updateProfilePut"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["updateProfilePatch"];
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
    indexProfiles: {
        parameters: {
            query?: {
                /** @description If set, the endpoint searches for users whom contain this value in either the public name or the email address */
                search?: string;
                /** @description Indicates where to start fetching data or how many records to skip, defining the initial position within the list */
                offset?: string;
                /** @description Indicates the maximum number (100) of items that will be returned in a single request */
                limit?: string;
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
                            public_name: string;
                            email: string;
                            primary_user_id: string;
                            safe_level?: number;
                            /** Format: date-time */
                            created_at?: string;
                            /** Format: date-time */
                            updated_at?: string;
                            details: {
                                city?: {
                                    value: string;
                                    type: string;
                                };
                                email?: {
                                    value: string;
                                    type: string;
                                };
                                address?: {
                                    value: string;
                                    type: string;
                                };
                                phone?: {
                                    value: string;
                                    type: string;
                                };
                                first_name?: {
                                    value: string;
                                    type: string;
                                };
                                last_name?: {
                                    value: string;
                                    type: string;
                                };
                                date_of_birth?: {
                                    value: string;
                                    type: string;
                                };
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
                        /** @description Code used to categorize the error */
                        code: string;
                        /** @description Description of the error */
                        detail: string;
                        /** @description Unique request id. This one will be used to troubleshoot the problems */
                        requestId: string;
                        /** @description Name of the error type */
                        name: string;
                        /** @description List of the validation errors */
                        validation?: {
                            fieldName: string;
                            message: string;
                        }[];
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
                        /** @description Code used to categorize the error */
                        code: string;
                        /** @description Description of the error */
                        detail: string;
                        /** @description Unique request id. This one will be used to troubleshoot the problems */
                        requestId: string;
                        /** @description Name of the error type */
                        name: string;
                        /** @description List of the validation errors */
                        validation?: {
                            fieldName: string;
                            message: string;
                        }[];
                        validationContext?: string;
                    };
                };
            };
        };
    };
    importProfiles: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    address: string;
                    city: string;
                    first_name: string;
                    last_name: string;
                    /** Format: email */
                    email: string;
                    phone: string;
                    /** Format: date */
                    date_of_birth: string;
                }[];
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
                        status: "pending" | "processing" | "completed" | "failed" | "cancelled" | "unrecoverable" | "success";
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
                        /** @description Code used to categorize the error */
                        code: string;
                        /** @description Description of the error */
                        detail: string;
                        /** @description Unique request id. This one will be used to troubleshoot the problems */
                        requestId: string;
                        /** @description Name of the error type */
                        name: string;
                        /** @description List of the validation errors */
                        validation?: {
                            fieldName: string;
                            message: string;
                        }[];
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
                        /** @description Code used to categorize the error */
                        code: string;
                        /** @description Description of the error */
                        detail: string;
                        /** @description Unique request id. This one will be used to troubleshoot the problems */
                        requestId: string;
                        /** @description Name of the error type */
                        name: string;
                        /** @description List of the validation errors */
                        validation?: {
                            fieldName: string;
                            message: string;
                        }[];
                        validationContext?: string;
                    };
                };
            };
        };
    };
    selectProfiles: {
        parameters: {
            query: {
                /** @description Comma-separated list of profile IDs */
                ids: string;
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
                            public_name: string;
                            email: string;
                            primary_user_id: string;
                            safe_level?: number;
                            /** Format: date-time */
                            created_at?: string;
                            /** Format: date-time */
                            updated_at?: string;
                            details: {
                                city?: {
                                    value: string;
                                    type: string;
                                };
                                email?: {
                                    value: string;
                                    type: string;
                                };
                                address?: {
                                    value: string;
                                    type: string;
                                };
                                phone?: {
                                    value: string;
                                    type: string;
                                };
                                first_name?: {
                                    value: string;
                                    type: string;
                                };
                                last_name?: {
                                    value: string;
                                    type: string;
                                };
                                date_of_birth?: {
                                    value: string;
                                    type: string;
                                };
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
                        /** @description Code used to categorize the error */
                        code: string;
                        /** @description Description of the error */
                        detail: string;
                        /** @description Unique request id. This one will be used to troubleshoot the problems */
                        requestId: string;
                        /** @description Name of the error type */
                        name: string;
                        /** @description List of the validation errors */
                        validation?: {
                            fieldName: string;
                            message: string;
                        }[];
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
                        /** @description Code used to categorize the error */
                        code: string;
                        /** @description Description of the error */
                        detail: string;
                        /** @description Unique request id. This one will be used to troubleshoot the problems */
                        requestId: string;
                        /** @description Name of the error type */
                        name: string;
                        /** @description List of the validation errors */
                        validation?: {
                            fieldName: string;
                            message: string;
                        }[];
                        validationContext?: string;
                    };
                };
            };
        };
    };
    findProfile: {
        parameters: {
            query?: {
                /** @description Email address to search for */
                email?: string;
                /** @description First name to search for */
                firstName?: string;
                /** @description Last name to search for */
                lastName?: string;
                /** @description Phone number to search for */
                phone?: string;
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
                            public_name: string;
                            email: string;
                            primary_user_id: string;
                            safe_level?: number;
                            /** Format: date-time */
                            created_at?: string;
                            /** Format: date-time */
                            updated_at?: string;
                            details: {
                                city?: {
                                    value: string;
                                    type: string;
                                };
                                email?: {
                                    value: string;
                                    type: string;
                                };
                                address?: {
                                    value: string;
                                    type: string;
                                };
                                phone?: {
                                    value: string;
                                    type: string;
                                };
                                first_name?: {
                                    value: string;
                                    type: string;
                                };
                                last_name?: {
                                    value: string;
                                    type: string;
                                };
                                date_of_birth?: {
                                    value: string;
                                    type: string;
                                };
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
            "4XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Code used to categorize the error */
                        code: string;
                        /** @description Description of the error */
                        detail: string;
                        /** @description Unique request id. This one will be used to troubleshoot the problems */
                        requestId: string;
                        /** @description Name of the error type */
                        name: string;
                        /** @description List of the validation errors */
                        validation?: {
                            fieldName: string;
                            message: string;
                        }[];
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
                        /** @description Code used to categorize the error */
                        code: string;
                        /** @description Description of the error */
                        detail: string;
                        /** @description Unique request id. This one will be used to troubleshoot the problems */
                        requestId: string;
                        /** @description Name of the error type */
                        name: string;
                        /** @description List of the validation errors */
                        validation?: {
                            fieldName: string;
                            message: string;
                        }[];
                        validationContext?: string;
                    };
                };
            };
        };
    };
    getProfile: {
        parameters: {
            query?: {
                organizationId?: string;
            };
            header?: never;
            path: {
                /** @description ID of the profile to retrieve */
                profileId: string;
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
                            public_name: string;
                            email: string;
                            primary_user_id: string;
                            safe_level?: number;
                            /** Format: date-time */
                            created_at?: string;
                            /** Format: date-time */
                            updated_at?: string;
                            details: {
                                city?: {
                                    value: string;
                                    type: string;
                                };
                                email?: {
                                    value: string;
                                    type: string;
                                };
                                address?: {
                                    value: string;
                                    type: string;
                                };
                                phone?: {
                                    value: string;
                                    type: string;
                                };
                                first_name?: {
                                    value: string;
                                    type: string;
                                };
                                last_name?: {
                                    value: string;
                                    type: string;
                                };
                                date_of_birth?: {
                                    value: string;
                                    type: string;
                                };
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
            "4XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Code used to categorize the error */
                        code: string;
                        /** @description Description of the error */
                        detail: string;
                        /** @description Unique request id. This one will be used to troubleshoot the problems */
                        requestId: string;
                        /** @description Name of the error type */
                        name: string;
                        /** @description List of the validation errors */
                        validation?: {
                            fieldName: string;
                            message: string;
                        }[];
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
                        /** @description Code used to categorize the error */
                        code: string;
                        /** @description Description of the error */
                        detail: string;
                        /** @description Unique request id. This one will be used to troubleshoot the problems */
                        requestId: string;
                        /** @description Name of the error type */
                        name: string;
                        /** @description List of the validation errors */
                        validation?: {
                            fieldName: string;
                            message: string;
                        }[];
                        validationContext?: string;
                    };
                };
            };
        };
    };
    updateProfilePut: {
        parameters: {
            query?: {
                /** @description Organization ID owning the profile */
                organizationId?: string;
            };
            header?: never;
            path: {
                /** @description ID of the profile to update */
                profileId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    public_name?: string;
                    /** Format: email */
                    email?: string;
                    phone?: string;
                    address?: string;
                    city?: string;
                    first_name?: string;
                    last_name?: string;
                    /** Format: date */
                    date_of_birth?: string;
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
                            public_name: string;
                            email: string;
                            primary_user_id: string;
                            safe_level?: number;
                            /** Format: date-time */
                            created_at?: string;
                            /** Format: date-time */
                            updated_at?: string;
                            details: {
                                city?: {
                                    value: string;
                                    type: string;
                                };
                                email?: {
                                    value: string;
                                    type: string;
                                };
                                address?: {
                                    value: string;
                                    type: string;
                                };
                                phone?: {
                                    value: string;
                                    type: string;
                                };
                                first_name?: {
                                    value: string;
                                    type: string;
                                };
                                last_name?: {
                                    value: string;
                                    type: string;
                                };
                                date_of_birth?: {
                                    value: string;
                                    type: string;
                                };
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
            "4XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Code used to categorize the error */
                        code: string;
                        /** @description Description of the error */
                        detail: string;
                        /** @description Unique request id. This one will be used to troubleshoot the problems */
                        requestId: string;
                        /** @description Name of the error type */
                        name: string;
                        /** @description List of the validation errors */
                        validation?: {
                            fieldName: string;
                            message: string;
                        }[];
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
                        /** @description Code used to categorize the error */
                        code: string;
                        /** @description Description of the error */
                        detail: string;
                        /** @description Unique request id. This one will be used to troubleshoot the problems */
                        requestId: string;
                        /** @description Name of the error type */
                        name: string;
                        /** @description List of the validation errors */
                        validation?: {
                            fieldName: string;
                            message: string;
                        }[];
                        validationContext?: string;
                    };
                };
            };
        };
    };
    updateProfilePatch: {
        parameters: {
            query?: {
                /** @description Organization ID owning the profile */
                organizationId?: string;
            };
            header?: never;
            path: {
                /** @description ID of the profile to update */
                profileId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    public_name?: string;
                    /** Format: email */
                    email?: string;
                    phone?: string;
                    address?: string;
                    city?: string;
                    first_name?: string;
                    last_name?: string;
                    /** Format: date */
                    date_of_birth?: string;
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
                            public_name: string;
                            email: string;
                            primary_user_id: string;
                            safe_level?: number;
                            /** Format: date-time */
                            created_at?: string;
                            /** Format: date-time */
                            updated_at?: string;
                            details: {
                                city?: {
                                    value: string;
                                    type: string;
                                };
                                email?: {
                                    value: string;
                                    type: string;
                                };
                                address?: {
                                    value: string;
                                    type: string;
                                };
                                phone?: {
                                    value: string;
                                    type: string;
                                };
                                first_name?: {
                                    value: string;
                                    type: string;
                                };
                                last_name?: {
                                    value: string;
                                    type: string;
                                };
                                date_of_birth?: {
                                    value: string;
                                    type: string;
                                };
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
            "4XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Code used to categorize the error */
                        code: string;
                        /** @description Description of the error */
                        detail: string;
                        /** @description Unique request id. This one will be used to troubleshoot the problems */
                        requestId: string;
                        /** @description Name of the error type */
                        name: string;
                        /** @description List of the validation errors */
                        validation?: {
                            fieldName: string;
                            message: string;
                        }[];
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
                        /** @description Code used to categorize the error */
                        code: string;
                        /** @description Description of the error */
                        detail: string;
                        /** @description Unique request id. This one will be used to troubleshoot the problems */
                        requestId: string;
                        /** @description Name of the error type */
                        name: string;
                        /** @description List of the validation errors */
                        validation?: {
                            fieldName: string;
                            message: string;
                        }[];
                        validationContext?: string;
                    };
                };
            };
        };
    };
}
