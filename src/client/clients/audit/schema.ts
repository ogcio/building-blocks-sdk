export interface paths {
    "/health": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description It checks the current health status of the APIs, pinging all the related items */
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
    "/api/v1/audit-logs/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["createAuditLog"];
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
    createAuditLog: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description Identifies the client application/service
                     * @example my-app
                     */
                    application_id: string;
                    /**
                     * @description Optional application version for schema tracking
                     * @example 1.4.3
                     */
                    application_version?: string;
                    /**
                     * @description JWT subject; null indicates M2M action
                     * @example user-123
                     */
                    user_id?: string;
                    /**
                     * Format: email
                     * @description User email for human-readable context
                     * @example user@example.com
                     */
                    user_email_address?: string;
                    /**
                     * @description Operation: Read, Create, Update, Delete, etc.
                     * @example create
                     * @enum {unknown}
                     */
                    action_type: "read" | "create" | "update" | "delete" | "list";
                    /**
                     * @description Entity type affected: user, message, etc.
                     * @example user
                     */
                    resource_type: string;
                    /**
                     * @description Specific resource identifier; null for list operations
                     * @example user-123
                     */
                    resource_id?: string;
                    /**
                     * Format: date-time
                     * @description ISO 8601 client-reported timestamp
                     * @example 2025-12-19T10:30:00Z
                     */
                    client_timestamp: string;
                    successful?: boolean | null;
                    failure_reason?: string | null;
                    server_id?: string | null;
                    /**
                     * @description Extensible JSON context for event
                     * @example {
                     *       "request_id": "req-123",
                     *       "source": "web"
                     *     }
                     */
                    metadata: {
                        [key: string]: unknown;
                    };
                    parent_log_entry_id?: string | null;
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
                        /**
                         * @description Multiple audit log entries created
                         * @example [
                         *       {
                         *         "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479"
                         *       },
                         *       {
                         *         "id": "9c858901-8a57-4791-81fe-4c455b099bc9"
                         *       }
                         *     ]
                         */
                        data: {
                            /** Format: uuid */
                            id: string;
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
}
