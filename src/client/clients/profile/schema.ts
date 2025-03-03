export interface paths {
    "/api/v1/jobs/import-profiles/{profileImportId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Executes the requested job */
        post: {
            parameters: {
                query?: {
                    insertPrivateDetails?: "true" | "false" | "0" | "1";
                };
                header?: never;
                path: {
                    profileImportId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        /** @description The security token used to ensure you are allowed to execute this job */
                        token: string;
                    };
                };
            };
            responses: {
                /** @description Default Response */
                202: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            status: string;
                            profileImportId: string;
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
                            statusCode: number;
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
                            statusCode: number;
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
    "/api/v1/profiles/imports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description List profile imports with pagination */
        get: {
            parameters: {
                query?: {
                    organizationId?: string;
                    source?: "csv" | "json";
                    /** @description If set, the endpoint searches for profile imports with this value in the metadata.filename */
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
                                /** Format: uuid */
                                id: string;
                                organisationId?: string;
                                status: string;
                                source: "csv" | "json";
                                metadata?: {
                                    filename: string;
                                    mimetype: string;
                                };
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: date-time */
                                updatedAt: string;
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
                            statusCode: number;
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
                            statusCode: number;
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
    "/api/v1/profiles/imports/{importId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get details of profiles in a specific import */
        get: operations["getProfileImportDetails"];
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
    "/api/v1/profiles/imports/template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getProfileTemplate"];
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
        post: operations["logtoUserCreated"];
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
                /** @description If set, the endpoint searches for users whom contain this value in either the imported first name */
                firstName?: string;
                /** @description If set, the endpoint searches for users whom contain this value in either the imported last name */
                lastName?: string;
                /** @description If set, the endpoint searches for users whom contain this value in either the imported email */
                email?: string;
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
                            publicName: string;
                            /** Format: email */
                            email: string;
                            primaryUserId: string;
                            safeLevel?: number;
                            /**
                             * @default en
                             * @enum {string}
                             */
                            preferredLanguage: "en" | "ga";
                            /** Format: date-time */
                            createdAt?: string;
                            /** Format: date-time */
                            updatedAt?: string;
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
                        statusCode: number;
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
                        statusCode: number;
                    };
                };
            };
        };
    };
    importProfiles: {
        parameters: {
            query?: {
                privateDetails?: "true" | "false" | "0" | "1";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    profiles?: {
                        email: string;
                        firstName: string;
                        lastName: string;
                        city?: string;
                        address?: string;
                        phone?: string;
                        /** Format: date */
                        dateOfBirth?: string;
                        ppsn?: string;
                        /**
                         * @default en
                         * @enum {string}
                         */
                        preferredLanguage?: "en" | "ga";
                    }[];
                    file?: unknown;
                };
                "multipart/form-data": {
                    profiles?: {
                        email: string;
                        firstName: string;
                        lastName: string;
                        city?: string;
                        address?: string;
                        phone?: string;
                        /** Format: date */
                        dateOfBirth?: string;
                        ppsn?: string;
                        /**
                         * @default en
                         * @enum {string}
                         */
                        preferredLanguage?: "en" | "ga";
                    }[];
                    file?: unknown;
                };
                "text/csv": {
                    profiles?: {
                        email: string;
                        firstName: string;
                        lastName: string;
                        city?: string;
                        address?: string;
                        phone?: string;
                        /** Format: date */
                        dateOfBirth?: string;
                        ppsn?: string;
                        /**
                         * @default en
                         * @enum {string}
                         */
                        preferredLanguage?: "en" | "ga";
                    }[];
                    file?: unknown;
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
                        status: string;
                        profileImportId: string;
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
                        statusCode: number;
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
                        statusCode: number;
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
                            publicName: string;
                            /** Format: email */
                            email: string;
                            primaryUserId: string;
                            safeLevel?: number;
                            /**
                             * @default en
                             * @enum {string}
                             */
                            preferredLanguage: "en" | "ga";
                            /** Format: date-time */
                            createdAt?: string;
                            /** Format: date-time */
                            updatedAt?: string;
                            details?: {
                                email: string;
                                firstName: string;
                                lastName: string;
                                city?: string;
                                address?: string;
                                phone?: string;
                                /** Format: date */
                                dateOfBirth?: string;
                                ppsn?: string;
                                /**
                                 * @default en
                                 * @enum {string}
                                 */
                                preferredLanguage: "en" | "ga";
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
                        statusCode: number;
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
                        statusCode: number;
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
                            publicName: string;
                            /** Format: email */
                            email: string;
                            primaryUserId: string;
                            safeLevel?: number;
                            /**
                             * @default en
                             * @enum {string}
                             */
                            preferredLanguage: "en" | "ga";
                            /** Format: date-time */
                            createdAt?: string;
                            /** Format: date-time */
                            updatedAt?: string;
                            details?: {
                                email: string;
                                firstName: string;
                                lastName: string;
                                city?: string;
                                address?: string;
                                phone?: string;
                                /** Format: date */
                                dateOfBirth?: string;
                                ppsn?: string;
                                /**
                                 * @default en
                                 * @enum {string}
                                 */
                                preferredLanguage: "en" | "ga";
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
                        statusCode: number;
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
                        statusCode: number;
                    };
                };
            };
        };
    };
    getProfileImportDetails: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                importId: string;
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
                            email: string;
                            firstName: string;
                            lastName: string;
                            city?: string;
                            address?: string;
                            phone?: string;
                            /** Format: date */
                            dateOfBirth?: string;
                            ppsn?: string;
                            /**
                             * @default en
                             * @enum {string}
                             */
                            preferredLanguage: "en" | "ga";
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
                        statusCode: number;
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
                        statusCode: number;
                    };
                };
            };
        };
    };
    getProfile: {
        parameters: {
            query?: {
                privateDetails?: "true" | "false" | "0" | "1";
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
                            publicName: string;
                            /** Format: email */
                            email: string;
                            primaryUserId: string;
                            safeLevel?: number;
                            /**
                             * @default en
                             * @enum {string}
                             */
                            preferredLanguage: "en" | "ga";
                            /** Format: date-time */
                            createdAt?: string;
                            /** Format: date-time */
                            updatedAt?: string;
                            details?: {
                                email: string;
                                firstName: string;
                                lastName: string;
                                city?: string;
                                address?: string;
                                phone?: string;
                                /** Format: date */
                                dateOfBirth?: string;
                                ppsn?: string;
                                /**
                                 * @default en
                                 * @enum {string}
                                 */
                                preferredLanguage: "en" | "ga";
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
                        statusCode: number;
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
                        statusCode: number;
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
                    publicName?: string;
                    /** Format: email */
                    email?: string;
                    phone?: string;
                    address?: string;
                    city?: string;
                    firstName?: string;
                    lastName?: string;
                    /** Format: date */
                    dateOfBirth?: string;
                    /**
                     * @default en
                     * @enum {string}
                     */
                    preferredLanguage?: "en" | "ga";
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
                            publicName: string;
                            /** Format: email */
                            email: string;
                            primaryUserId: string;
                            safeLevel?: number;
                            /**
                             * @default en
                             * @enum {string}
                             */
                            preferredLanguage: "en" | "ga";
                            /** Format: date-time */
                            createdAt?: string;
                            /** Format: date-time */
                            updatedAt?: string;
                            details?: {
                                email: string;
                                firstName: string;
                                lastName: string;
                                city?: string;
                                address?: string;
                                phone?: string;
                                /** Format: date */
                                dateOfBirth?: string;
                                ppsn?: string;
                                /**
                                 * @default en
                                 * @enum {string}
                                 */
                                preferredLanguage: "en" | "ga";
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
                        statusCode: number;
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
                        statusCode: number;
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
                    publicName?: string;
                    /** Format: email */
                    email?: string;
                    phone?: string;
                    address?: string;
                    city?: string;
                    firstName?: string;
                    lastName?: string;
                    /** Format: date */
                    dateOfBirth?: string;
                    /**
                     * @default en
                     * @enum {string}
                     */
                    preferredLanguage?: "en" | "ga";
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
                            publicName: string;
                            /** Format: email */
                            email: string;
                            primaryUserId: string;
                            safeLevel?: number;
                            /**
                             * @default en
                             * @enum {string}
                             */
                            preferredLanguage: "en" | "ga";
                            /** Format: date-time */
                            createdAt?: string;
                            /** Format: date-time */
                            updatedAt?: string;
                            details?: {
                                email: string;
                                firstName: string;
                                lastName: string;
                                city?: string;
                                address?: string;
                                phone?: string;
                                /** Format: date */
                                dateOfBirth?: string;
                                ppsn?: string;
                                /**
                                 * @default en
                                 * @enum {string}
                                 */
                                preferredLanguage: "en" | "ga";
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
                        statusCode: number;
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
                        statusCode: number;
                    };
                };
            };
        };
    };
    getProfileTemplate: {
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
                    "text/csv": {
                        /** @enum {string} */
                        type: "Buffer";
                        data: number[];
                    };
                };
            };
        };
    };
    logtoUserCreated: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    hookId?: string | null;
                    event?: string | null;
                    sessionId?: string | null;
                    userAgent?: string | null;
                    ip?: string | null;
                    path?: string | null;
                    method?: string | null;
                    status?: number;
                    /** Format: date-time */
                    createdAt?: string;
                    data: {
                        id: string;
                        username: string | null;
                        /** Format: email */
                        primaryEmail: string;
                        primaryPhone?: string | null;
                        name?: string | null;
                        avatar?: string | null;
                        customData: {
                            profileImportId?: string | null;
                            organizationId?: string | null;
                            insertPrivateDetails?: boolean;
                        };
                        identities: {
                            [key: string]: {
                                details: {
                                    email?: string | null;
                                    rawData: {
                                        [key: string]: string | null | number | boolean | (string | null | boolean | number)[];
                                    };
                                };
                            };
                        };
                        lastSignInAt?: number | null;
                        createdAt?: number;
                        updatedAt?: number;
                        profile?: {
                            [key: string]: unknown;
                        };
                        applicationId?: string | null;
                        isSuspended?: boolean;
                        hasPassword?: boolean;
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
                content?: never;
            };
        };
    };
}
