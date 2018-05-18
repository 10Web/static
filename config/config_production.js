'use strict';

module.exports = {
  debug: false,
  logs: {
    sys: {
      level: 'WARN',
      file: '${serverRoot}/logs/${appName}/query.%year%-%month%-%day%.log',
      rotation: 30
    }
  },
  middleware: {
  }
};
