const path = require('path');

const express = require('express');
const mainRouter = require('./routes/main');
const authRouter = require('./routes/auth');
const searchRouter = require('./routes/articles');
const cabinetRouter = require('./routes/cabinet');
const articlesRouter = require('./routes/articles');

const DEFAULT_PORT = 8080;

const app = express();

app.set(`views`, `./src/express/templates`);
app.set(`view engine`, `pug`);

app.use(express.static(path.join(__dirname, `public`)));

app.use(`/`, mainRouter);
app.use(`/`, authRouter);
app.use(`/`, searchRouter);
app.use(`/my`, cabinetRouter);
app.use(`/articles`, articlesRouter);

app.listen(
  DEFAULT_PORT,
  () => console.log(`Server is running on port: ${DEFAULT_PORT}`)
);
