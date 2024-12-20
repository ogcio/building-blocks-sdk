export interface paths {
    "/api/v1/messages/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Returns all the messages for the requested organisation or the requested recipient */
        get: {
            parameters: {
                query?: {
                    status?: "delivered";
                    isSeen?: "true" | "false" | "0" | "1";
                    search?: string;
                    /** @description Either recipientUserId and organisationId are mandatory */
                    recipientUserId?: string;
                    /** @description Either recipientUserId and organisationId are mandatory */
                    organisationId?: string;
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
                                /** @description Unique Id of the message */
                                id: string;
                                /** @description Subject */
                                subject: string;
                                /** @description Creation date time */
                                createdAt: string;
                                /** @description Thread Name used to group messages */
                                threadName: string;
                                /** @description Organisation sender id */
                                organisationId: string;
                                /** @description Unique id of the recipient */
                                recipientUserId: string;
                                /** @description Number of attachments */
                                attachmentsCount: number;
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
        put?: never;
        /** @description Creates a message */
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
                        /** @description The list of the preferred transports to use. If the selected transports are not available for the recipient, others will be used */
                        preferredTransports: ("sms" | "email" | "lifeEvent")[];
                        /** @description Unique user id of the recipient */
                        recipientUserId: string;
                        /**
                         * @description Confidentiality level of the message
                         * @enum {string}
                         */
                        security: "confidential" | "public";
                        /**
                         * @description If true, the message will be sent even if the recipient didn't accept the organisation's invitation
                         * @default false
                         */
                        bypassConsent: boolean;
                        /**
                         * Format: date-time
                         * @description Date and time of when schedule the message
                         */
                        scheduleAt: string;
                        message: {
                            /** @description Thread Name used to group messages */
                            threadName?: string;
                            /** @description Subject. This is the only part that will be seen outside of the messaging platform is security is 'confidential' */
                            subject: string;
                            /** @description Brief description of the message */
                            excerpt: string;
                            /** @description Plain text version of the message */
                            plainText: string;
                            /** @description Rich text version of the message */
                            richText: string;
                            /**
                             * @description Language used to send the message
                             * @enum {string}
                             */
                            language: "en" | "ga";
                        };
                        attachments?: string[];
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
                                /**
                                 * Format: uuid
                                 * @description Unique Id of the resource
                                 */
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
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/messages/{messageId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Returns the requested message */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The requested message unique id */
                    messageId: string;
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
                                /** @description Subject. This is the only part that will be seen outside of the messaging platform is security is 'confidential' */
                                subject: string;
                                /** @description Creation date time */
                                createdAt: string;
                                /** @description Thread Name used to group messages */
                                threadName: string;
                                /** @description Organisation sender id */
                                organisationId: string;
                                /** @description Unique id of the recipient */
                                recipientUserId: string;
                                /** @description Brief description of the message */
                                excerpt: string;
                                /** @description Plain text version of the message */
                                plainText: string;
                                /** @description Rich text version of the message */
                                richText: string;
                                /** @description True if the message has already been seen by the recipient */
                                isSeen: boolean;
                                /**
                                 * @description Confidentiality level of the message
                                 * @enum {string}
                                 */
                                security: "confidential" | "public";
                                /** @description Ids of the related attachments */
                                attachments: string[];
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
        /** @description Returns the providers matching the requested query */
        get: {
            parameters: {
                query: {
                    /** @description If set, returns only the primary providers if true, otherwise the non-primary ones */
                    primary?: "true" | "false" | "0" | "1";
                    /** @description Provider types that can be manipulated */
                    type: "sms" | "email";
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
                                /**
                                 * Format: uuid
                                 * @description Unique id of the provider
                                 */
                                id: string;
                                /** @description Name of the provider */
                                providerName: string;
                                /** @description If true, the provider is set as primary for the selected type for the current organisation. Please note, each organisation can only have one primary provider for each type */
                                isPrimary: boolean;
                                /**
                                 * @description Provider types that can be manipulated
                                 * @enum {string}
                                 */
                                type: "sms" | "email";
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
            };
        };
        put?: never;
        /** @description Creates a new provider */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /** @description Name of the provider */
                        providerName: string;
                        /** @description If true, the provider is set as primary for the selected type for the current organisation. Please note, each organisation can only have one primary provider for each type */
                        isPrimary: boolean;
                        /** @enum {string} */
                        type: "email";
                        /** @description Address of the SMTP host */
                        smtpHost: string;
                        /** @description Port of the SMTP host */
                        smtpPort: number;
                        /** @description Username to use to log into the SMTP server */
                        username: string;
                        /** @description Password to use to log into the SMTP server */
                        password: string;
                        /** @description Optional field to adjust how long time between each mail, in miliseconds */
                        throttle?: number;
                        /** @description Email address to use as sender */
                        fromAddress: string;
                        /** @description Is connection to the SMTP server secure? */
                        ssl: boolean;
                    } | {
                        /** @description Name of the provider */
                        providerName: string;
                        /** @description If true, the provider is set as primary for the selected type for the current organisation. Please note, each organisation can only have one primary provider for each type */
                        isPrimary: boolean;
                        /** @enum {string} */
                        type: "sms";
                        config: {
                            /** @enum {string} */
                            type: "AWS";
                            accessKey: string;
                            secretAccessKey: string;
                            region: string;
                        };
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
                                /** Format: uuid */
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
        /** @description Returns the requested provider */
        get: {
            parameters: {
                query: {
                    /** @description Provider types that can be manipulated */
                    type: "sms" | "email";
                };
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
                                /** Format: uuid */
                                id: string;
                                /** @description Name of the provider */
                                providerName: string;
                                /** @description If true, the provider is set as primary for the selected type for the current organisation. Please note, each organisation can only have one primary provider for each type */
                                isPrimary: boolean;
                                /** @enum {string} */
                                type: "email";
                                /** @description Address of the SMTP host */
                                smtpHost: string;
                                /** @description Port of the SMTP host */
                                smtpPort: number;
                                /** @description Username to use to log into the SMTP server */
                                username: string;
                                /** @description Password to use to log into the SMTP server */
                                password: string;
                                /** @description Optional field to adjust how long time between each mail, in miliseconds */
                                throttle?: number;
                                /** @description Email address to use as sender */
                                fromAddress: string;
                                /** @description Is connection to the SMTP server secure? */
                                ssl: boolean;
                            } | {
                                /** Format: uuid */
                                id: string;
                                /** @description Name of the provider */
                                providerName: string;
                                /** @description If true, the provider is set as primary for the selected type for the current organisation. Please note, each organisation can only have one primary provider for each type */
                                isPrimary: boolean;
                                /** @enum {string} */
                                type: "sms";
                                config: {
                                    /** @enum {string} */
                                    type: "AWS";
                                    accessKey: string;
                                    secretAccessKey: string;
                                    region: string;
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
            };
        };
        /** @description Updates the requested provider */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    providerId: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /** Format: uuid */
                        id: string;
                        /** @description Name of the provider */
                        providerName: string;
                        /** @description If true, the provider is set as primary for the selected type for the current organisation. Please note, each organisation can only have one primary provider for each type */
                        isPrimary: boolean;
                        /** @enum {string} */
                        type: "email";
                        /** @description Address of the SMTP host */
                        smtpHost: string;
                        /** @description Port of the SMTP host */
                        smtpPort: number;
                        /** @description Username to use to log into the SMTP server */
                        username: string;
                        /** @description Password to use to log into the SMTP server */
                        password: string;
                        /** @description Optional field to adjust how long time between each mail, in miliseconds */
                        throttle?: number;
                        /** @description Email address to use as sender */
                        fromAddress: string;
                        /** @description Is connection to the SMTP server secure? */
                        ssl: boolean;
                    } | {
                        /** Format: uuid */
                        id: string;
                        /** @description Name of the provider */
                        providerName: string;
                        /** @description If true, the provider is set as primary for the selected type for the current organisation. Please note, each organisation can only have one primary provider for each type */
                        isPrimary: boolean;
                        /** @enum {string} */
                        type: "sms";
                        config: {
                            /** @enum {string} */
                            type: "AWS";
                            accessKey: string;
                            secretAccessKey: string;
                            region: string;
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
                                /** Format: uuid */
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
            };
        };
        post?: never;
        /** @description Deletes the requested provider */
        delete: {
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
                                /** Format: uuid */
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
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/templates/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Returns the providers matching the requested query */
        get: {
            parameters: {
                query?: {
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
                                /**
                                 * Format: uuid
                                 * @description Unique id of the template
                                 */
                                id: string;
                                contents: {
                                    /**
                                     * @description Template content language
                                     * @enum {string}
                                     */
                                    language: "en" | "ga";
                                    /** @description Template name for the related language */
                                    templateName: string;
                                }[];
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
        put?: never;
        /** @description Creates a new template */
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
                        contents: {
                            /** @description Template name for the related language */
                            templateName: string;
                            /**
                             * @description Template content language
                             * @enum {string}
                             */
                            language: "en" | "ga";
                            /** @description Subject of the template */
                            subject: string;
                            /** @description Brief description of the template content */
                            excerpt: string;
                            /** @description Plain text version of the template */
                            plainText: string;
                            /** @description Rich text version of the template */
                            richText: string;
                        }[];
                        /** @description List of the variables that are needed to be filled to create a message using this template */
                        variables?: {
                            name: string;
                        }[];
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
                                /** Format: uuid */
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
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/templates/{templateId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Returns the requested template */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    templateId: string;
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
                                contents: {
                                    /** @description Template name for the related language */
                                    templateName: string;
                                    /**
                                     * @description Template content language
                                     * @enum {string}
                                     */
                                    language: "en" | "ga";
                                    /** @description Subject of the template */
                                    subject: string;
                                    /** @description Brief description of the template content */
                                    excerpt: string;
                                    /** @description Plain text version of the template */
                                    plainText: string;
                                    /** @description Rich text version of the template */
                                    richText: string;
                                }[];
                                fields: {
                                    fieldName: string;
                                }[];
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
        /** @description Updates the requested template */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    templateId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        /** Format: uuid */
                        id: string;
                        contents: {
                            /** @description Template name for the related language */
                            templateName: string;
                            /**
                             * @description Template content language
                             * @enum {string}
                             */
                            language: "en" | "ga";
                            /** @description Subject of the template */
                            subject: string;
                            /** @description Brief description of the template content */
                            excerpt: string;
                            /** @description Plain text version of the template */
                            plainText: string;
                            /** @description Rich text version of the template */
                            richText: string;
                        }[];
                        /** @description List of the variables that are needed to be filled to create a message using this template */
                        variables?: {
                            name: string;
                        }[];
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
                                /** Format: uuid */
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
        post?: never;
        /** @description Deletes the requested template */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    templateId: string;
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
                                /** Format: uuid */
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/organisation-settings/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Returns the organisation settings for the logged in user */
        get: {
            parameters: {
                query?: {
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
                                /**
                                 * Format: uuid
                                 * @description Unique id of the organisation setting
                                 */
                                id: string;
                                /**
                                 * Format: uuid
                                 * @description Unique id of the related user
                                 */
                                userId: string;
                                /**
                                 * @description User profile id, if available
                                 * @default null
                                 */
                                userProfileId: null | string;
                                /**
                                 * @description Phone number of the user
                                 * @default null
                                 */
                                phoneNumber: null | string;
                                /**
                                 * @description Email address of the user
                                 * @default null
                                 */
                                emailAddress: null | string;
                                /** @description Unique id of the related organisation */
                                organisationId: string;
                                /**
                                 * @description Current status of the invitation to the messaging building block
                                 * @default pending
                                 * @enum {string}
                                 */
                                organisationInvitationStatus: "to_be_invited" | "pending" | "accepted" | "declined";
                                /** @description Date and time describing when the organisation invitation has been sent */
                                organisationInvitationSentAt?: string;
                                /** @description Date and time describing when the user has gave a feedback to the organisation invitation */
                                organisationInvitationFeedbackAt?: string;
                                /** @description The list of the preferred transports to use. If the selected transports are not available for the recipient, others will be used */
                                organisationPreferredTransports: ("sms" | "email")[];
                                /**
                                 * @description If full, it means that the user is already on the Life Events platform, if partial the match has to be reviewed, if not_related the user does not exist
                                 * @enum {string}
                                 */
                                correlationQuality: "full" | "partial" | "not_related";
                                /**
                                 * @default pending
                                 * @enum {string}
                                 */
                                userStatus: "to_be_invited" | "pending" | "disabled" | "active";
                                details?: {
                                    /**
                                     * @description PPSN of the imported user
                                     * @default null
                                     */
                                    publicIdentityId: null | string;
                                    /**
                                     * @description First name of the imported user
                                     * @default null
                                     */
                                    firstName: null | string;
                                    /**
                                     * @description Last name of the imported user
                                     * @default null
                                     */
                                    lastName: null | string;
                                    /**
                                     * @description Birth date of the imported user
                                     * @default null
                                     */
                                    birthDate: null | string;
                                    /**
                                     * @description Address of the imported user
                                     * @default null
                                     */
                                    address: {
                                        /** @default null */
                                        city: null | string;
                                        /** @default null */
                                        zipCode: null | string;
                                        /** @default null */
                                        street: null | string;
                                        /** @default null */
                                        country: null | string;
                                        /** @default null */
                                        region: null | string;
                                    } | null;
                                    /**
                                     * @description If false, an invitation to the user asking to accept to receive messages from the organisation will be sent. If true, it means that the organisation already asked the permissions to the user
                                     * @default false
                                     */
                                    collectedConsent: boolean;
                                    /**
                                     * @description If true, it means that a message to welcome the user has already been sent
                                     * @default false
                                     */
                                    welcomed: boolean;
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
                400: {
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
                404: {
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
                500: {
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
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/organisation-settings/{organisationSettingId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Returns the requested organisation setting */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    organisationSettingId: string;
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
                                /**
                                 * Format: uuid
                                 * @description Unique id of the organisation setting
                                 */
                                id: string;
                                /**
                                 * Format: uuid
                                 * @description Unique id of the related user
                                 */
                                userId: string;
                                /**
                                 * @description User profile id, if available
                                 * @default null
                                 */
                                userProfileId: null | string;
                                /**
                                 * @description Phone number of the user
                                 * @default null
                                 */
                                phoneNumber: null | string;
                                /**
                                 * @description Email address of the user
                                 * @default null
                                 */
                                emailAddress: null | string;
                                /** @description Unique id of the related organisation */
                                organisationId: string;
                                /**
                                 * @description Current status of the invitation to the messaging building block
                                 * @default pending
                                 * @enum {string}
                                 */
                                organisationInvitationStatus: "to_be_invited" | "pending" | "accepted" | "declined";
                                /** @description Date and time describing when the organisation invitation has been sent */
                                organisationInvitationSentAt?: string;
                                /** @description Date and time describing when the user has gave a feedback to the organisation invitation */
                                organisationInvitationFeedbackAt?: string;
                                /** @description The list of the preferred transports to use. If the selected transports are not available for the recipient, others will be used */
                                organisationPreferredTransports: ("sms" | "email")[];
                                /**
                                 * @description If full, it means that the user is already on the Life Events platform, if partial the match has to be reviewed, if not_related the user does not exist
                                 * @enum {string}
                                 */
                                correlationQuality: "full" | "partial" | "not_related";
                                /**
                                 * @default pending
                                 * @enum {string}
                                 */
                                userStatus: "to_be_invited" | "pending" | "disabled" | "active";
                                details?: {
                                    /**
                                     * @description PPSN of the imported user
                                     * @default null
                                     */
                                    publicIdentityId: null | string;
                                    /**
                                     * @description First name of the imported user
                                     * @default null
                                     */
                                    firstName: null | string;
                                    /**
                                     * @description Last name of the imported user
                                     * @default null
                                     */
                                    lastName: null | string;
                                    /**
                                     * @description Birth date of the imported user
                                     * @default null
                                     */
                                    birthDate: null | string;
                                    /**
                                     * @description Address of the imported user
                                     * @default null
                                     */
                                    address: {
                                        /** @default null */
                                        city: null | string;
                                        /** @default null */
                                        zipCode: null | string;
                                        /** @default null */
                                        street: null | string;
                                        /** @default null */
                                        country: null | string;
                                        /** @default null */
                                        region: null | string;
                                    } | null;
                                    /**
                                     * @description If false, an invitation to the user asking to accept to receive messages from the organisation will be sent. If true, it means that the organisation already asked the permissions to the user
                                     * @default false
                                     */
                                    collectedConsent: boolean;
                                    /**
                                     * @description If true, it means that a message to welcome the user has already been sent
                                     * @default false
                                     */
                                    welcomed: boolean;
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
                400: {
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
                404: {
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
                500: {
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
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** @description Updates the requested organisation settings */
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    organisationSettingId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        /**
                         * @description Current status of the invitation to receive messages from the organisation
                         * @default accepted
                         * @enum {string}
                         */
                        invitationStatusFeedback: "accepted" | "declined";
                        /** @description The list of the preferred transports to use. If the selected transports are not available for the recipient, others will be used */
                        preferredTransports: ("sms" | "email")[];
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
                            data: {
                                /**
                                 * Format: uuid
                                 * @description Unique id of the organisation setting
                                 */
                                id: string;
                                /**
                                 * Format: uuid
                                 * @description Unique id of the related user
                                 */
                                userId: string;
                                /**
                                 * @description User profile id, if available
                                 * @default null
                                 */
                                userProfileId: null | string;
                                /**
                                 * @description Phone number of the user
                                 * @default null
                                 */
                                phoneNumber: null | string;
                                /**
                                 * @description Email address of the user
                                 * @default null
                                 */
                                emailAddress: null | string;
                                /** @description Unique id of the related organisation */
                                organisationId: string;
                                /**
                                 * @description Current status of the invitation to the messaging building block
                                 * @default pending
                                 * @enum {string}
                                 */
                                organisationInvitationStatus: "to_be_invited" | "pending" | "accepted" | "declined";
                                /** @description Date and time describing when the organisation invitation has been sent */
                                organisationInvitationSentAt?: string;
                                /** @description Date and time describing when the user has gave a feedback to the organisation invitation */
                                organisationInvitationFeedbackAt?: string;
                                /** @description The list of the preferred transports to use. If the selected transports are not available for the recipient, others will be used */
                                organisationPreferredTransports: ("sms" | "email")[];
                                /**
                                 * @description If full, it means that the user is already on the Life Events platform, if partial the match has to be reviewed, if not_related the user does not exist
                                 * @enum {string}
                                 */
                                correlationQuality: "full" | "partial" | "not_related";
                                /**
                                 * @default pending
                                 * @enum {string}
                                 */
                                userStatus: "to_be_invited" | "pending" | "disabled" | "active";
                                details?: {
                                    /**
                                     * @description PPSN of the imported user
                                     * @default null
                                     */
                                    publicIdentityId: null | string;
                                    /**
                                     * @description First name of the imported user
                                     * @default null
                                     */
                                    firstName: null | string;
                                    /**
                                     * @description Last name of the imported user
                                     * @default null
                                     */
                                    lastName: null | string;
                                    /**
                                     * @description Birth date of the imported user
                                     * @default null
                                     */
                                    birthDate: null | string;
                                    /**
                                     * @description Address of the imported user
                                     * @default null
                                     */
                                    address: {
                                        /** @default null */
                                        city: null | string;
                                        /** @default null */
                                        zipCode: null | string;
                                        /** @default null */
                                        street: null | string;
                                        /** @default null */
                                        country: null | string;
                                        /** @default null */
                                        region: null | string;
                                    } | null;
                                    /**
                                     * @description If false, an invitation to the user asking to accept to receive messages from the organisation will be sent. If true, it means that the organisation already asked the permissions to the user
                                     * @default false
                                     */
                                    collectedConsent: boolean;
                                    /**
                                     * @description If true, it means that a message to welcome the user has already been sent
                                     * @default false
                                     */
                                    welcomed: boolean;
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
                400: {
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
                404: {
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
                500: {
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
        trace?: never;
    };
    "/api/v1/user-imports/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Retrieves the user import batches related to the current organisation */
        get: {
            parameters: {
                query?: {
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
                                organisationId: string;
                                /** Format: date-time */
                                importedAt: string;
                                /**
                                 * @description Channel through which the users have been imported
                                 * @default api
                                 * @enum {string}
                                 */
                                importChannel: "api" | "csv";
                                /** @default 0 */
                                retryCount: number;
                                /** @default null */
                                lastRetryAt: string | null;
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
            };
        };
        put?: never;
        /** @description Imports a new batch of users. If 'Content-Type' header contains 'multipart/form-data' it accepts a CSV file, otherwise an array of users to import */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "multipart/form-data": {
                        /** @description Numeric index of the user to import. It must increments by one across users so to be able to notify which users' import failed */
                        importIndex: number;
                        /**
                         * @description PPSN of the user to be imported
                         * @default null
                         */
                        publicIdentityId?: null | string;
                        /**
                         * @description First name of the user to be imported
                         * @default null
                         */
                        firstName?: null | string;
                        /**
                         * @description Last name of the user to be imported
                         * @default null
                         */
                        lastName?: null | string;
                        /**
                         * @description Phone number of the user to be imported
                         * @default null
                         */
                        phoneNumber?: null | string;
                        /**
                         * @description Birth date of the user to be imported
                         * @default null
                         */
                        birthDate?: null | string;
                        /**
                         * @description Email address of the user to be imported
                         * @default null
                         */
                        emailAddress?: null | string;
                        /**
                         * @description City of the user to be imported
                         * @default null
                         */
                        addressCity?: null | string;
                        /**
                         * @description Zip Code of the user to be imported
                         * @default null
                         */
                        addressZipCode?: null | string;
                        /**
                         * @description Street of the user to be imported
                         * @default null
                         */
                        addressStreet?: null | string;
                        /**
                         * @description Country of the user to be imported
                         * @default null
                         */
                        addressCountry?: null | string;
                        /**
                         * @description Region of the user to be imported
                         * @default null
                         */
                        addressRegion?: null | string;
                        /**
                         * @description Tags of the user to be imported. The tags can made by multiple levels, splitting each level by a '.' and listing multiple tags using a ';'
                         * @default null
                         */
                        tags?: null | string;
                        /**
                         * @description If false, an invitation to the user asking to accept to receive messages from the organisation will be sent. If true, it means that the organisation already asked the permissions to the user
                         * @default false
                         */
                        collectedConsent?: null | string;
                    }[] | unknown;
                    "application/json": {
                        /** @description Numeric index of the user to import. It must increments by one across users so to be able to notify which users' import failed */
                        importIndex: number;
                        /**
                         * @description PPSN of the user to be imported
                         * @default null
                         */
                        publicIdentityId?: null | string;
                        /**
                         * @description First name of the user to be imported
                         * @default null
                         */
                        firstName?: null | string;
                        /**
                         * @description Last name of the user to be imported
                         * @default null
                         */
                        lastName?: null | string;
                        /**
                         * @description Phone number of the user to be imported
                         * @default null
                         */
                        phoneNumber?: null | string;
                        /**
                         * @description Birth date of the user to be imported
                         * @default null
                         */
                        birthDate?: null | string;
                        /**
                         * @description Email address of the user to be imported
                         * @default null
                         */
                        emailAddress?: null | string;
                        /**
                         * @description City of the user to be imported
                         * @default null
                         */
                        addressCity?: null | string;
                        /**
                         * @description Zip Code of the user to be imported
                         * @default null
                         */
                        addressZipCode?: null | string;
                        /**
                         * @description Street of the user to be imported
                         * @default null
                         */
                        addressStreet?: null | string;
                        /**
                         * @description Country of the user to be imported
                         * @default null
                         */
                        addressCountry?: null | string;
                        /**
                         * @description Region of the user to be imported
                         * @default null
                         */
                        addressRegion?: null | string;
                        /**
                         * @description Tags of the user to be imported. The tags can made by multiple levels, splitting each level by a '.' and listing multiple tags using a ';'
                         * @default null
                         */
                        tags?: null | string;
                        /**
                         * @description If false, an invitation to the user asking to accept to receive messages from the organisation will be sent. If true, it means that the organisation already asked the permissions to the user
                         * @default false
                         */
                        collectedConsent?: null | string;
                    }[] | unknown;
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
                                /** Format: uuid */
                                id: string;
                            };
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
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/user-imports/{importId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Retrieves the requested user import batch */
        get: {
            parameters: {
                query?: {
                    /** @description If true, it returns the data of the user sent in the import batch */
                    includeImportedData?: "true" | "false" | "0" | "1";
                };
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
                                organisationId: string;
                                /** Format: date-time */
                                importedAt: string;
                                usersData: {
                                    importIndex: number;
                                    /**
                                     * @description Phone number of the user
                                     * @default null
                                     */
                                    phoneNumber: null | string;
                                    /**
                                     * @description Email address of the user
                                     * @default null
                                     */
                                    emailAddress: null | string;
                                    /**
                                     * @description Result of the import for the user
                                     * @default pending
                                     * @enum {string}
                                     */
                                    importStatus: "pending" | "imported" | "not_found" | "error" | "missing_contacts";
                                    /**
                                     * @description The error raised during the import, if set
                                     * @default null
                                     */
                                    importError: null | string;
                                    /**
                                     * @description Related user profile id from the Life Events building block, if available
                                     * @default null
                                     */
                                    relatedUserProfileId: null | string;
                                    /**
                                     * @description Related user id from the Messaging building block, if available
                                     * @default null
                                     */
                                    relatedUserId: null | string;
                                    /** @description Tags related to the user */
                                    tags?: string[];
                                    /**
                                     * @description PPSN of the imported user
                                     * @default null
                                     */
                                    publicIdentityId: null | string;
                                    /**
                                     * @description First name of the imported user
                                     * @default null
                                     */
                                    firstName: null | string;
                                    /**
                                     * @description Last name of the imported user
                                     * @default null
                                     */
                                    lastName: null | string;
                                    /**
                                     * @description Birth date of the imported user
                                     * @default null
                                     */
                                    birthDate: null | string;
                                    /**
                                     * @description Address of the imported user
                                     * @default null
                                     */
                                    address: {
                                        /** @default null */
                                        city: null | string;
                                        /** @default null */
                                        zipCode: null | string;
                                        /** @default null */
                                        street: null | string;
                                        /** @default null */
                                        country: null | string;
                                        /** @default null */
                                        region: null | string;
                                    } | null;
                                    /**
                                     * @description If false, an invitation to the user asking to accept to receive messages from the organisation will be sent. If true, it means that the organisation already asked the permissions to the user
                                     * @default false
                                     */
                                    collectedConsent: boolean;
                                    /**
                                     * @description If true, it means that a message to welcome the user has already been sent
                                     * @default false
                                     */
                                    welcomed: boolean;
                                }[];
                                /**
                                 * @description Channel through which the users have been imported
                                 * @default api
                                 * @enum {string}
                                 */
                                importChannel: "api" | "csv";
                                /** @default 0 */
                                retryCount: number;
                                /** @default null */
                                lastRetryAt: string | null;
                                /** Format: uuid */
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
    "/api/v1/user-imports/template-download": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Returns a string containing the template with the csv that will be used to import users */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description The header and one example line for the CSV template that must be used to import users */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/csv": string;
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
    "/api/v1/users/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    /** @description If set, the endpoint searches for users whom contain this value in either the name, the surname, or the email address */
                    search?: string;
                    /** @description If set, it must contain a list of transports divided by ',' and the endpoint searches for users whom have selected at least one of them as preferred for the organisation */
                    transports?: string;
                    /** @description If set, the endpoint returns the users whom have imported by that specific batch */
                    importId?: string;
                    /** @description If true, the endpoint returns active only users */
                    activeOnly?: string;
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
                                /**
                                 * Format: uuid
                                 * @description Unique id of the organisation setting
                                 */
                                organisationSettingId: string;
                                /**
                                 * @description First name of the user
                                 * @default null
                                 */
                                firstName: null | string;
                                /**
                                 * @description Last name of the user
                                 * @default null
                                 */
                                lastName: null | string;
                                /**
                                 * @description Birth date of the user
                                 * @default null
                                 */
                                birthDate: null | string;
                                /**
                                 * @description Preferred language of the user
                                 * @default null
                                 */
                                lang: null | string;
                                /**
                                 * @description PPSN of the user
                                 * @default null
                                 */
                                ppsn: null | string;
                                /**
                                 * Format: uuid
                                 * @description Unique id of the related user
                                 */
                                id: string;
                                /**
                                 * @description User profile id, if available
                                 * @default null
                                 */
                                userProfileId: null | string;
                                /**
                                 * @description Phone number of the user
                                 * @default null
                                 */
                                phoneNumber: null | string;
                                /**
                                 * @description Email address of the user
                                 * @default null
                                 */
                                emailAddress: null | string;
                                /** @description Unique id of the related organisation */
                                organisationId: string;
                                /**
                                 * @description Current status of the invitation to the messaging building block
                                 * @default pending
                                 * @enum {string}
                                 */
                                organisationInvitationStatus: "to_be_invited" | "pending" | "accepted" | "declined";
                                /** @description Date and time describing when the organisation invitation has been sent */
                                organisationInvitationSentAt?: string;
                                /** @description Date and time describing when the user has gave a feedback to the organisation invitation */
                                organisationInvitationFeedbackAt?: string;
                                /** @description The list of the preferred transports to use. If the selected transports are not available for the recipient, others will be used */
                                organisationPreferredTransports: ("sms" | "email")[];
                                /**
                                 * @description If full, it means that the user is already on the Life Events platform, if partial the match has to be reviewed, if not_related the user does not exist
                                 * @enum {string}
                                 */
                                correlationQuality: "full" | "partial" | "not_related";
                                /**
                                 * @default pending
                                 * @enum {string}
                                 */
                                userStatus: "to_be_invited" | "pending" | "disabled" | "active";
                                details?: {
                                    /**
                                     * @description PPSN of the imported user
                                     * @default null
                                     */
                                    publicIdentityId: null | string;
                                    /**
                                     * @description First name of the imported user
                                     * @default null
                                     */
                                    firstName: null | string;
                                    /**
                                     * @description Last name of the imported user
                                     * @default null
                                     */
                                    lastName: null | string;
                                    /**
                                     * @description Birth date of the imported user
                                     * @default null
                                     */
                                    birthDate: null | string;
                                    /**
                                     * @description Address of the imported user
                                     * @default null
                                     */
                                    address: {
                                        /** @default null */
                                        city: null | string;
                                        /** @default null */
                                        zipCode: null | string;
                                        /** @default null */
                                        street: null | string;
                                        /** @default null */
                                        country: null | string;
                                        /** @default null */
                                        region: null | string;
                                    } | null;
                                    /**
                                     * @description If false, an invitation to the user asking to accept to receive messages from the organisation will be sent. If true, it means that the organisation already asked the permissions to the user
                                     * @default false
                                     */
                                    collectedConsent: boolean;
                                    /**
                                     * @description If true, it means that a message to welcome the user has already been sent
                                     * @default false
                                     */
                                    welcomed: boolean;
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
        /** @description Returns the requested user */
        get: {
            parameters: {
                query?: {
                    /** @description If true, the endpoint returns active only users */
                    activeOnly?: string;
                };
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
                            data: {
                                /**
                                 * Format: uuid
                                 * @description Unique id of the organisation setting
                                 */
                                organisationSettingId: string;
                                /**
                                 * @description First name of the user
                                 * @default null
                                 */
                                firstName: null | string;
                                /**
                                 * @description Last name of the user
                                 * @default null
                                 */
                                lastName: null | string;
                                /**
                                 * @description Birth date of the user
                                 * @default null
                                 */
                                birthDate: null | string;
                                /**
                                 * @description Preferred language of the user
                                 * @default null
                                 */
                                lang: null | string;
                                /**
                                 * @description PPSN of the user
                                 * @default null
                                 */
                                ppsn: null | string;
                                /**
                                 * Format: uuid
                                 * @description Unique id of the related user
                                 */
                                id: string;
                                /**
                                 * @description User profile id, if available
                                 * @default null
                                 */
                                userProfileId: null | string;
                                /**
                                 * @description Phone number of the user
                                 * @default null
                                 */
                                phoneNumber: null | string;
                                /**
                                 * @description Email address of the user
                                 * @default null
                                 */
                                emailAddress: null | string;
                                /** @description Unique id of the related organisation */
                                organisationId: string;
                                /**
                                 * @description Current status of the invitation to the messaging building block
                                 * @default pending
                                 * @enum {string}
                                 */
                                organisationInvitationStatus: "to_be_invited" | "pending" | "accepted" | "declined";
                                /** @description Date and time describing when the organisation invitation has been sent */
                                organisationInvitationSentAt?: string;
                                /** @description Date and time describing when the user has gave a feedback to the organisation invitation */
                                organisationInvitationFeedbackAt?: string;
                                /** @description The list of the preferred transports to use. If the selected transports are not available for the recipient, others will be used */
                                organisationPreferredTransports: ("sms" | "email")[];
                                /**
                                 * @description If full, it means that the user is already on the Life Events platform, if partial the match has to be reviewed, if not_related the user does not exist
                                 * @enum {string}
                                 */
                                correlationQuality: "full" | "partial" | "not_related";
                                /**
                                 * @default pending
                                 * @enum {string}
                                 */
                                userStatus: "to_be_invited" | "pending" | "disabled" | "active";
                                details?: {
                                    /**
                                     * @description PPSN of the imported user
                                     * @default null
                                     */
                                    publicIdentityId: null | string;
                                    /**
                                     * @description First name of the imported user
                                     * @default null
                                     */
                                    firstName: null | string;
                                    /**
                                     * @description Last name of the imported user
                                     * @default null
                                     */
                                    lastName: null | string;
                                    /**
                                     * @description Birth date of the imported user
                                     * @default null
                                     */
                                    birthDate: null | string;
                                    /**
                                     * @description Address of the imported user
                                     * @default null
                                     */
                                    address: {
                                        /** @default null */
                                        city: null | string;
                                        /** @default null */
                                        zipCode: null | string;
                                        /** @default null */
                                        street: null | string;
                                        /** @default null */
                                        country: null | string;
                                        /** @default null */
                                        region: null | string;
                                    } | null;
                                    /**
                                     * @description If false, an invitation to the user asking to accept to receive messages from the organisation will be sent. If true, it means that the organisation already asked the permissions to the user
                                     * @default false
                                     */
                                    collectedConsent: boolean;
                                    /**
                                     * @description If true, it means that a message to welcome the user has already been sent
                                     * @default false
                                     */
                                    welcomed: boolean;
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
    "/api/v1/message-events/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Returns the message events that match the requested query */
        get: {
            parameters: {
                query?: {
                    /** @description If set, it filters the events for the messages containing the set value in subject */
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
                                /**
                                 * Format: uuid
                                 * @description Unique id of the event
                                 */
                                id: string;
                                /**
                                 * Format: uuid
                                 * @description Unique id of the related message
                                 */
                                messageId: string;
                                /** @description Subject of the related message */
                                subject: string;
                                /** @description Full name of the recipient */
                                receiverFullName: string;
                                /** @description Event type description */
                                eventType: string;
                                /** @description Status for event type */
                                eventStatus: string;
                                /** @description Date and time which describes when the message has to be sent */
                                scheduledAt: string;
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
    "/api/v1/message-events/{eventId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Returns the selected event */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    eventId: string;
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
                                /** @description Event type description */
                                eventType: string;
                                /** @description Status for event type */
                                eventStatus: string;
                                data: {
                                    /** @description Unique id of the related message */
                                    messageId: string;
                                    /** @description Full name of the recipient */
                                    receiverFullName: string;
                                    /** @description PPSN of the recipient */
                                    receiverPPSN: string;
                                    /** @description User id of recipient */
                                    receiverUserId: string;
                                    /** @description Subject of the related message */
                                    subject: string;
                                    /** @description Language of the related message */
                                    language: string;
                                    /** @description Excerpt of the related message */
                                    excerpt: string;
                                    /** @description Rich text content of the related message */
                                    richText: string;
                                    /** @description Plain text context of the related message */
                                    plainText: string;
                                    /** @description Thread name of the related message */
                                    threadName: string;
                                    /** @description Selected transports to send the message */
                                    transports: string[];
                                    /**
                                     * Format: date-time
                                     * @description Date and time which describes when the message has to be sent
                                     */
                                    scheduledAt: string;
                                    /** @description Unique user id of the sender */
                                    senderUserId?: string;
                                    /** @description Full name of the sender */
                                    senderFullName?: string;
                                    /** @description PPSN of the sender */
                                    senderPPSN?: string;
                                    /** @description Unique id of the M2M application that sent the message */
                                    senderApplicationId?: string;
                                    /** @description Organisation related to the sender */
                                    organisationName: string;
                                    /**
                                     * @description Confidentiality level of the message
                                     * @enum {string}
                                     */
                                    security: "confidential" | "public";
                                    /** @description If true, the message will be sent even if the recipient didn't accept the organisation's invitation */
                                    bypassConsent: boolean;
                                } | {
                                    /** @description Unique id of the related message */
                                    messageId: string;
                                    /** @description Unique id of the job */
                                    jobId: string;
                                } | {
                                    /** @description Unique id of the related message */
                                    messageId: string;
                                };
                                /**
                                 * Format: date-time
                                 * @description Date and time which describes when the event has been recorded
                                 */
                                createdAt: string;
                            }[];
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
    "/api/v1/jobs/{jobId}": {
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
                query?: never;
                header?: never;
                path: {
                    jobId: string;
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
                    content?: never;
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
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/message-actions/{messageId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    messageId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        /** Format: uuid */
                        messageId: string;
                        isSeen: boolean;
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
        post?: never;
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
