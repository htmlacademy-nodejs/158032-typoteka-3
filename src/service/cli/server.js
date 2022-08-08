'use strict';

const express = require(`express`);
const api = require(`../api`);
const {getLogger} = require(`../lib/logger`);
const {HttpCode, ErrorMessage} = require(`../../constants`);

const DEFAULT_PORT = 3000;
const API_PREFIX = `/api`;
const logger = getLogger({name: `api`});

module.exports = {
  name: `--server`,
  async run(args) {
    const port = Number.parseInt(args[0], 10) || DEFAULT_PORT;
    const app = express();

    app.use(express.json());

    app.use(API_PREFIX, api);

    app.use((req, res) => {
      const errorMsg = ErrorMessage.routeNotFound(req.url);
      res.status(HttpCode.NOT_FOUND)
        .send(errorMsg);
      logger.error(errorMsg);
    });

    app.use((err, _req, _res, _next) => {
      logger.error(`An error occurred on processing request: ${err.message}`);
    });

    app.use((req, res, next) => {
      logger.debug(`Request on route ${req.url}`);
      res.on(`finish`, () => {
        logger.info(`Response status code is: ${res.statusCode}`);
      });
      next();
    });

    try {
      app.listen(
          DEFAULT_PORT,
          (err) => {
            if (err) {
              return logger.error(`An error occurred on starting the server: ${err.message}`);
            }

            return logger.info(`Server listening on port: ${port}`);
          }
      );
    } catch (e) {
      logger.error(`An error occurred: ${e.message}`);
      process.exit(1);
    }
  }
};
