'use strict';

const path = require(`path`);

const express = require(`express`);
const mainRouter = require(`./routes/main`);
const authRouter = require(`./routes/auth`);
const searchRouter = require(`./routes/search`);
const cabinetRouter = require(`./routes/cabinet`);
const articlesRouter = require(`./routes/articles`);
const {ErrorMessage, HttpCode} = require(`../constants`);
const {getLogger} = require(`../service/lib/logger`);

const DEFAULT_PORT = 8080;
const PUBLIC_DIR = `public`;
const UPLOAD_DIR = `upload`;
const logger = getLogger({name: `front-server`});

const app = express();
const port = Number.parseInt(process.argv[0], 10) || DEFAULT_PORT;

app.set(`views`, `./src/express/templates`);
app.set(`view engine`, `pug`);

app.use(express.static(path.join(__dirname, PUBLIC_DIR)));
app.use(express.static(path.join(__dirname, UPLOAD_DIR)));

app.use(`/`, mainRouter);
app.use(`/`, authRouter);
app.use(`/search`, searchRouter);
app.use(`/my`, cabinetRouter);
app.use(`/articles`, articlesRouter);

app.use((req, res) => {
  const errorMsg = ErrorMessage.routeNotFound(req.url);
  logger.error(errorMsg);
  res.status(HttpCode.NOT_FOUND).render(`404`);
});

app.use((err, _req, res, _next) => {
  logger.error(`An error occurred on processing request: ${err.message}`);
  res.status(HttpCode.INTERNAL_SERVER_ERROR).render(`500`);
});

try {
  app.listen(
      port,
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
