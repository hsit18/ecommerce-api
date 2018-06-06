'use strict';

export default {
  MONGOOSE_DB: {
    URL: process.env.MONGOLAB_URI || "mongodb://rate8test:rate8test@ds045614.mlab.com:45614/mongo_test",
    DEBUG: process.env.MONGODB_DEBUG || true
  },
  PORT: process.env.PORT || 80,
  HOST: process.env.HOST || 'localhost',
  ADMIN_SECRET_KEY: 'harpreet-admin',

  SESSION_SECRET: process.env.SESSION_SECRET || "test_session",
  JWT_SECRET: process.env.JWT_SECRET || "harrytestjwt",

  SUPPORT_EMAILID: 'support@ecommerce.com',

  APP_CONSTANT: {
    SCHEMA: {
      PRODUCTS: 'products'
    }
  },

  DEFAULT_LANGUAGE: "en-us",
  DEFAULT_ERROR_STATUS_CODE: 401, //500,
  DEFAULT_ERROR: {
    "errorCode": 2000,
    "language": "en-us",
    "userMessage": "An unexpected error has occurred. Please try again later"
  },
  ERROR_CODES: {
    INVALID_CREDENTIALS: 1000,
    EXPIRED_LINK: 1002,
    EXPIRED_SESSION: 1004,
    UNKNOWN_USER: 1005,
    INVALID_CREDENTIALS_CHANGE_PASSWORD: 1012,
    NOT_AUTHORIZED: 1013,
    EMAIL_ID_NOT_FOUND: 1028,
    NO_ACCESS_PERMISSIONS: 1060,
    NO_PERMISSIONS_INVALIDATE: 1061,
    UNEXPECTED_ERROR: 2000,
    DOWN_FOR_MAINTENANCE: 2002,
    CONTENT_NOT_FOUND: 2003,
    PROCESS_COULD_NOT_BE_COMPLETED: 2004,
    MISSING_INFO_IN_API: 3000,
    INVALID_INFO_IN_API: 3001,
    MISSING_SESSION: 3002
  }
};
