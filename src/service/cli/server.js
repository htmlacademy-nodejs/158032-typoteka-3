'use strict';

const chalk = require(`chalk`);
const express = require(`express`);
const api = require(`../api`);

const DEFAULT_PORT = 3000;
const API_PREFIX = `/api`;

module.exports = {
  name: `--server`,
  async run(args) {
    const port = Number.parseInt(args[0], 10) || DEFAULT_PORT;
    const app = express();

    app.use(express.json());
    app.use(API_PREFIX, api);

    app.listen(
        DEFAULT_PORT,
        () => console.info(chalk.green(`Server listening on port: ${port}`))
    );
  }
};
