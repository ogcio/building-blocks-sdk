export type TestResponseObject = {
  get: {
    responses: {
      200: {
        content: {
          "application/json": {
            value: string;
          };
        };
      };
      "4XX": {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            code: string;
            message: string;
          };
        };
      };
    };
  };
};

export type TestNestedResponseObject = {
  get: {
    responses: {
      200: {
        content: {
          "application/json": {
            data: {
              nested: {
                value: string;
              };
            };
          };
        };
      };
    };
  };
};

export type TypedSuccessResponse<T> = {
  data: T;
  error?: never;
  response: Response;
};

export type TypedErrorResponse<T> = {
  data?: never;
  error: T;
  response: Response;
};

export type ApiError = {
  message: string;
  code: string;
};
