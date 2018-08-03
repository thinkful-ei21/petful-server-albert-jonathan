'use strict';

module.exports = {
  PORT: process.env.PORT || 8080,
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
  DATABASE_URL: process.env.DATABASE_URL || 'mongodb://dev:password123@ds263380.mlab.com:63380/mlab-test-db',
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'mongodb://dev:password123@ds263380.mlab.com:63380/mlab-test-db'
  // DATABASE_URL: process.env.DATABASE_URL || 'postgres://localhost/thinkful-backend',
  // TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgres://localhost/thinkful-backend-test'
};
