export interface paths {
    "/api/v1/messages/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Returns all the messages for the requested organisation or the requested recipient */
        get: operations["ListMessages"];
        put?: never;
        /** @description Creates a message */
        post: operations["CreateMessage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/messages/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Returns all the messages for the requested organisation or the requested recipient */
        post: operations["ListMessagesPost"];
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
        get: operations["GetMessage"];
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
        get: operations["ListProviders"];
        put?: never;
        /** @description Creates a new provider */
        post: operations["CreateProvider"];
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
                    type: "email";
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
        /** @description Updates the requested provider */
        put: operations["UpdateProvider"];
        post?: never;
        /** @description Deletes the requested provider */
        delete: operations["DeleteProvider"];
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
        get: operations["ListTemplates"];
        put?: never;
        /** @description Creates a new template */
        post: operations["CreateTemplate"];
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
        get: operations["GetTemplate"];
        /** @description Updates the requested template */
        put: operations["UpdateTemplate"];
        post?: never;
        /** @description Deletes the requested template */
        delete: operations["DeleteTemplate"];
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
                    /** @description If set, it filters the events for the messages containing the searched value in the subject or recipients of the message */
                    search?: string;
                    /** @description If set, it filters the events for the messages created after the set date */
                    dateFrom?: string;
                    /** @description If set, it filters the events for the messages created before the set date */
                    dateTo?: string;
                    /** @description If set, it will filter status for the latest occured message event */
                    status?: "delivered" | "scheduled" | "opened" | "failed";
                    /** @description If set, search for events related to the message id */
                    messageId?: string;
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
                                /**
                                 * Format: uuid
                                 * @description Message id
                                 */
                                messageId: string;
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
export interface operations {
    ListMessages: {
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
    CreateMessage: {
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
                    preferredTransports: ("email" | "lifeEvent")[];
                    /** @description Unique user id of the recipient */
                    recipientUserId: string;
                    /**
                     * @description Confidentiality level of the message
                     * @enum {string}
                     */
                    security: "confidential" | "public";
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
    ListMessagesPost: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @enum {string} */
                    status?: "delivered";
                    /** @enum {string} */
                    isSeen?: "true" | "false" | "0" | "1";
                    search?: string;
                    /** @description Either recipientUserId and organisationId are mandatory */
                    recipientUserId?: string;
                    /** @description Either recipientUserId and organisationId are mandatory */
                    organisationId?: string;
                    /**
                     * @description Indicates where to start fetching data or how many records to skip, defining the initial position within the list
                     * @default 0
                     */
                    offset?: string;
                    /**
                     * @description Indicates the maximum number (100) of items that will be returned in a single request
                     * @default 20
                     */
                    limit?: string;
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
    GetMessage: {
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
                    } | {
                        data: {
                            /** @description Unique id of the recipient */
                            recipientUserId: string;
                            /** @description Organisation sender id */
                            organisationId: string;
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
    ListProviders: {
        parameters: {
            query: {
                /** @description If set, returns only the primary providers if true, otherwise the non-primary ones */
                primary?: "true" | "false" | "0" | "1";
                /** @description Provider types that can be manipulated */
                type: "email";
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
                            type: "email";
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
    CreateProvider: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
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
    UpdateProvider: {
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
    DeleteProvider: {
        parameters: {
            query: {
                /** @description Provider types that can be manipulated */
                type: "email";
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
    ListTemplates: {
        parameters: {
            query?: {
                /** @description Indicates where to start fetching data or how many records to skip, defining the initial position within the list */
                offset?: string;
                /** @description Indicates the maximum number (100) of items that will be returned in a single request */
                limit?: string;
                /** @description If set, filters by template name in all available languages */
                search?: string;
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
    CreateTemplate: {
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
    GetTemplate: {
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
    UpdateTemplate: {
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
    DeleteTemplate: {
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
