'use strict';

module.exports = {
  DEFAULT_COMMAND: `--help`,
  USER_ARGV_INDEX: 2,
  ExitCode: {
    success: 0,
    error: 1,
  },
  HttpCode: {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401,
    BAD_REQUEST: 400
  },
  ErrorMessage: {
    resourceNotFound: (id) => `Resource not found: ${id}`,
    invalidRequestBody: (invalidKeys) => `Invalid request body keys: ${invalidKeys.join(`, `)}`
  },
  MAX_ID_LENGTH: 6
};

