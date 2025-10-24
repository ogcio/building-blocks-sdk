export interface paths {
    "/health": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Health check endpoint
         * @description Returns the health status of the API. This endpoint does not require authentication.
         */
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
                            /** @example ok */
                            status?: string;
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
    "/version": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Application version endpoint
         * @description Returns the current version of the API.
         */
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
                            /** @example 1.0.0 */
                            version?: string;
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
    "/api/v1/journeys/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get journeys
         * @description Retrieve a paginated list of journeys with optional filtering by IDs, search terms, date range, and status
         */
        get: operations["getJourneys"];
        put?: never;
        /**
         * Create journey
         * @description Create a new journey with the specified configuration and steps
         */
        post: operations["createJourney"];
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
        /**
         * Get journey by ID
         * @description Retrieve detailed information about a specific journey including all steps and connections
         */
        get: operations["getJourneyById"];
        /**
         * Update journey
         * @description Update an existing journey with new configuration and steps
         */
        put: operations["updateJourney"];
        post?: never;
        /**
         * Delete journey
         * @description Delete a journey with no existing runs
         */
        delete: operations["deleteJourney"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/journeys/{journeyId}/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get journey's status
         * @description Retrieve the status of a journey
         */
        get: operations["getJourneyStatus"];
        put?: never;
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
        /**
         * Get journey public info
         * @description Retrieve public information about a journey that can be accessed without full authentication
         */
        get: operations["getJourneyPublicInfo"];
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
        /**
         * Get journey schema
         * @description Retrieve the complete schema for a journey including all step schemas and connections
         */
        get: operations["getJourneySchema"];
        put?: never;
        post?: never;
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
        /**
         * Get step connection by ID
         * @description Retrieve detailed information about a specific step connection
         */
        get: operations["getStepConnectionById"];
        put?: never;
        post?: never;
        /**
         * Delete step connection
         * @description Delete a specific step connection by ID
         */
        delete: operations["deleteStepConnection"];
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
        /**
         * Create step connection
         * @description Create a new connection between two journey steps
         */
        post: operations["createStepConnection"];
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
        /**
         * Get journey step by ID
         * @description Retrieve detailed information about a specific journey step
         */
        get: operations["getJourneyStepById"];
        /**
         * Update journey step
         * @description Update an existing journey step with new configuration
         */
        put: operations["updateJourneyStep"];
        post?: never;
        /**
         * Delete journey step
         * @description Delete a specific journey step by ID
         */
        delete: operations["deleteJourneyStep"];
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
        /**
         * Create journey step
         * @description Create a new journey step with the specified configuration
         */
        post: operations["createJourneyStep"];
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
        /**
         * Get user runs
         * @description Retrieve all runs created by the authenticated user
         */
        get: operations["getUserRuns"];
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
        /**
         * Get user run by ID
         * @description Retrieve detailed information about a specific run created by the authenticated user
         */
        get: operations["getUserRunById"];
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
        /**
         * Get runs by journey ID
         * @description Retrieve all runs for a specific journey (public servant access)
         */
        get: operations["getRunsByJourneyId"];
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
        /**
         * Get run by ID
         * @description Retrieve detailed information about a specific run (public servant access)
         */
        get: operations["getRunById"];
        put?: never;
        post?: never;
        /**
         * Delete run
         * @description Delete a specific run by ID
         */
        delete: operations["deleteRun"];
        options?: never;
        head?: never;
        /**
         * Update run status
         * @description Update the status of a specific run
         */
        patch: operations["updateRunStatus"];
        trace?: never;
    };
    "/api/v1/executor/runs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all runs
         * @description Retrieve all runs with pagination and filtering (public servant access)
         */
        get: operations["getAllRuns"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/executor/runs/tags": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get run tags
         * @description Retrieve available tags for runs based on filtering criteria
         */
        get: operations["getRunTags"];
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
        /**
         * Create journey run
         * @description Create a new run for a specific journey
         */
        post: operations["createJourneyRun"];
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
        /**
         * Execute journey step
         * @description Execute a specific step in a journey run
         */
        post: operations["executeJourneyStep"];
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
        /**
         * Transition journey step
         * @description Transition from one step to another in a journey run
         */
        post: operations["transitionJourneyStep"];
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
        /**
         * Get journey summary
         * @description Retrieve a summary of a journey run including completion status and details
         */
        post: operations["getJourneySummary"];
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
         * Cleanup test resources
         * @description Clean up test resources for the organization (testing utility)
         */
        delete: operations["cleanupTestResources"];
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
    getJourneys: {
        parameters: {
            query?: {
                offset?: number;
                limit?: number;
                ids?: string | string[];
                search?: string;
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
                            id: string;
                            title: {
                                en: string;
                                ga?: string;
                            };
                            userId: string;
                            organizationId: string;
                            status: "active" | "inactive" | "draft";
                            initialStepId: string;
                            createdAt: string;
                            updatedAt: string;
                            allowedAuthMethods: string[];
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
    createJourney: {
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
                    allowedAuthMethods: string[];
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
    getJourneyById: {
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
                            title: {
                                en: string;
                                ga?: string;
                            };
                            userId: string;
                            organizationId: string;
                            status: "active" | "inactive" | "draft";
                            createdAt: string;
                            updatedAt: string;
                            initialStepId: string;
                            allowedAuthMethods: string[];
                            steps: {
                                id: string;
                                journeyId: string;
                                stepType: "title" | "form" | "payment" | "messaging" | "complete";
                                stepData: {
                                    formId: string;
                                } | {
                                    paymentRequestId: string;
                                    title: string;
                                } | {
                                    templateId: string;
                                    title: string;
                                    recipients: string[];
                                    generatePDF: boolean;
                                    uiConfig: {
                                        setupPageVersion: string;
                                    };
                                } | {
                                    buttonLabel: {
                                        en: string;
                                        ga?: string;
                                    };
                                    returnUrl: string;
                                } | {
                                    uiConfig?: {
                                        setupPageVersion?: string;
                                    };
                                };
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
    updateJourney: {
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
                    title: {
                        en: string;
                        ga?: string;
                    };
                    status: "active" | "inactive" | "draft";
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
    deleteJourney: {
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
                            ok: boolean;
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
    getJourneyStatus: {
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
                            status: "active" | "inactive" | "draft";
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
    getJourneyPublicInfo: {
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
                            title: {
                                en: string;
                                ga?: string;
                            };
                            userId: string;
                            organizationId: string;
                            status: "active" | "inactive" | "draft";
                            initialStepId: string;
                            createdAt: string;
                            updatedAt: string;
                            allowedAuthMethods: string[];
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
    getJourneySchema: {
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
                            jounrneyTitle: {
                                en: string;
                                ga?: string;
                            };
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
    getStepConnectionById: {
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
    deleteStepConnection: {
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
    createStepConnection: {
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
    getJourneyStepById: {
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
                                formId: string;
                            } | {
                                paymentRequestId: string;
                                title: string;
                            } | {
                                templateId: string;
                                title: string;
                                recipients: string[];
                                generatePDF: boolean;
                                uiConfig: {
                                    setupPageVersion: string;
                                };
                            } | {
                                buttonLabel: {
                                    en: string;
                                    ga?: string;
                                };
                                returnUrl: string;
                            } | {
                                uiConfig?: {
                                    setupPageVersion?: string;
                                };
                            };
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
    updateJourneyStep: {
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
                        formId: string;
                    } | {
                        paymentRequestId: string;
                        title: string;
                    } | {
                        templateId: string;
                        title: string;
                        recipients: string[];
                        generatePDF: boolean;
                        uiConfig: {
                            setupPageVersion: string;
                        };
                    } | {
                        buttonLabel: {
                            en: string;
                            ga?: string;
                        };
                        returnUrl: string;
                    } | {
                        uiConfig?: {
                            setupPageVersion?: string;
                        };
                    };
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
                                formId: string;
                            } | {
                                paymentRequestId: string;
                                title: string;
                            } | {
                                templateId: string;
                                title: string;
                                recipients: string[];
                                generatePDF: boolean;
                                uiConfig: {
                                    setupPageVersion: string;
                                };
                            } | {
                                buttonLabel: {
                                    en: string;
                                    ga?: string;
                                };
                                returnUrl: string;
                            } | {
                                uiConfig?: {
                                    setupPageVersion?: string;
                                };
                            };
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
    deleteJourneyStep: {
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
    createJourneyStep: {
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
                    configured: boolean;
                    stepData: {
                        formId: string;
                    } | {
                        paymentRequestId: string;
                        title: string;
                    } | {
                        templateId: string;
                        title: string;
                        recipients: string[];
                        generatePDF: boolean;
                        uiConfig: {
                            setupPageVersion: string;
                        };
                    } | {
                        buttonLabel: {
                            en: string;
                            ga?: string;
                        };
                        returnUrl: string;
                    } | {
                        uiConfig?: {
                            setupPageVersion?: string;
                        };
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
                            id: string;
                            journeyId: string;
                            stepType: "title" | "form" | "payment" | "messaging" | "complete";
                            stepData: {
                                formId: string;
                            } | {
                                paymentRequestId: string;
                                title: string;
                            } | {
                                templateId: string;
                                title: string;
                                recipients: string[];
                                generatePDF: boolean;
                                uiConfig: {
                                    setupPageVersion: string;
                                };
                            } | {
                                buttonLabel: {
                                    en: string;
                                    ga?: string;
                                };
                                returnUrl: string;
                            } | {
                                uiConfig?: {
                                    setupPageVersion?: string;
                                };
                            };
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
    getUserRuns: {
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
                            status: "initiated" | "submitted" | "processing" | "completed" | "cancelled";
                            tags: string[];
                            createdAt: string;
                            updatedAt: string;
                            choosenAuthMethod: string;
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
    getUserRunById: {
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
                            status: "initiated" | "submitted" | "processing" | "completed" | "cancelled";
                            tags: string[];
                            createdAt: string;
                            updatedAt: string;
                            steps: {
                                id: string;
                                runId: string;
                                stepId: string;
                                stepType: "title" | "form" | "payment" | "messaging" | "complete";
                                status: "pending" | "in_progress" | "failed" | "completed";
                                data?: {
                                    formSubmissionId: string;
                                    amount?: number;
                                } | {
                                    transactionId: string;
                                    amount: number;
                                    date: string;
                                    provider: string;
                                } | Record<string, never>;
                                createdAt: string;
                                updatedAt: string;
                            }[];
                            choosenAuthMethod: string;
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
    getRunsByJourneyId: {
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
                            status: "initiated" | "submitted" | "processing" | "completed" | "cancelled";
                            tags: string[];
                            createdAt: string;
                            updatedAt: string;
                            choosenAuthMethod: string;
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
    getRunById: {
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
                            status: "initiated" | "submitted" | "processing" | "completed" | "cancelled";
                            tags: string[];
                            createdAt: string;
                            updatedAt: string;
                            steps: {
                                id: string;
                                runId: string;
                                stepId: string;
                                stepType: "title" | "form" | "payment" | "messaging" | "complete";
                                status: "pending" | "in_progress" | "failed" | "completed";
                                data?: {
                                    formSubmissionId: string;
                                    amount?: number;
                                } | {
                                    transactionId: string;
                                    amount: number;
                                    date: string;
                                    provider: string;
                                } | Record<string, never>;
                                createdAt: string;
                                updatedAt: string;
                            }[];
                            choosenAuthMethod: string;
                            userEmail?: string;
                            organizationId: string;
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
    deleteRun: {
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
                            success: boolean;
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
    updateRunStatus: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                runId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    status: "initiated" | "submitted" | "processing" | "completed" | "cancelled";
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
                            status: "initiated" | "submitted" | "processing" | "completed" | "cancelled";
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
    getAllRuns: {
        parameters: {
            query?: {
                offset?: number;
                limit?: number;
                journeyId?: string;
                status?: "initiated" | "submitted" | "processing" | "completed" | "cancelled";
                search?: string;
                to?: string;
                from?: string;
                tags?: string[] | string;
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
                            status: "initiated" | "submitted" | "processing" | "completed" | "cancelled";
                            tags: string[];
                            createdAt: string;
                            updatedAt: string;
                            choosenAuthMethod: string;
                            organizationId: string;
                            journeyTitle: {
                                en: string;
                                ga?: string;
                            };
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
    getRunTags: {
        parameters: {
            query?: {
                journeyId?: string;
                status?: "initiated" | "submitted" | "processing" | "completed" | "cancelled";
                search?: string;
                to?: string;
                from?: string;
                tags?: string[] | string;
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
                            tags: string[];
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
    createJourneyRun: {
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
    executeJourneyStep: {
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
                    language: "en" | "ga";
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
    transitionJourneyStep: {
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
                    language: "en" | "ga";
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
    getJourneySummary: {
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
                            title: {
                                en: string;
                                ga?: string;
                            };
                            createdAt: string;
                            actionLabel: {
                                en: string;
                                ga?: string;
                            };
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
    cleanupTestResources: {
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
    listAuditLogEvents: {
        parameters: {
            query?: {
                offset?: number;
                limit?: number;
                resource?: string;
                resourceId?: string;
                action?: string;
                userId?: string;
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
}
