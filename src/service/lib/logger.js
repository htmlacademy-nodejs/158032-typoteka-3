'use strict';

const pino = require(`pino`);
const {Env} = require(`../../constants`);

const LOG_FILE = `logs/api.log`;
const isDevMode = process.env.NODE_ENV === Env.DEVELOPMENT;
const defaultLogLevel = isDevMode ? `info` : `error`;

const logger = pino({
  name: `base-logger`,
  level: process.env.LOG_LEVEL || defaultLogLevel,
  transport: {
    target: isDevMode ? `pino-pretty` : `pino/file`,
    options: {destination: LOG_FILE, mkdir: true}
  }
});

module.exports = {
  logger,
  getLogger(options = {}) {
    return logger.child(options);
  }
};
