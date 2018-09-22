'use strict';
const path = require('path');

module.exports = {
  /* honeybee config occupied */
  root: undefined,
  serverRoot: undefined,
  serverEnv: undefined,
  /* honeybee config end */
  debug: true,
  prefix: true,
  staticPath: undefined,
  logs: {
    sys: {
      level: 'INFO'
    }
  },
  middleware: {
    cookieSession: {
      config: {
        secret: 'defalutSecret!PLEASE!REPLACE!'
      }
    }
  },
  extension: {
  },
  talks: {
    key: '26aa200488ea20670252',
    secret: '5bdf3c13ca9548b14a14d71e83a101aa2c646bd7'
  }
};
