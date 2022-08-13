'use strict';

const path = require(`path`);

const express = require(`express`);
const mainRouter = require(`./routes/main`);
const authRouter = require(`./routes/auth`);
const searchRouter = require(`./routes/search`);
const cabinetRouter = require(`./routes/cabinet`);
const articlesRouter = require(`./routes/articles`);

const DEFAULT_PORT = 8080;
const PUBLIC_DIR = `public`;
const UPLOAD_DIR = `upload`;


const app = express();

app.set(`views`, `./src/express/templates`);
app.set(`view engine`, `pug`);

app.use(express.static(path.join(__dirname, PUBLIC_DIR)));
app.use(express.static(path.join(__dirname, UPLOAD_DIR)));

app.use(`/`, mainRouter);
app.use(`/`, authRouter);
app.use(`/search`, searchRouter);
app.use(`/my`, cabinetRouter);
app.use(`/articles`, articlesRouter);

app.listen(
    DEFAULT_PORT,
    () => console.log(`Server is running on port: ${DEFAULT_PORT}`)
);
