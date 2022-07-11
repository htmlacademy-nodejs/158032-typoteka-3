'use strict';

const chalk = require(`chalk`);
const express = require(`express`);
const postsRouter = require(`../routes/posts`);

const DEFAULT_PORT = 3000;

module.exports = {
  name: `--server`,
  async run(args) {
    const port = Number.parseInt(args[0], 10) || DEFAULT_PORT;
    const app = express();

    app.use(express.json());
    app.use(`/posts`, postsRouter);

    app.listen(
        DEFAULT_PORT,
        () => console.info(chalk.green(`Server listening on port: ${port}`))
    );
  }
};
