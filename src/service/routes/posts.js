'use strict';

const {Router} = require(`express`);
const fs = require(`fs`).promises;
const MOCK_DATA_PATH = `mocks.json`;

const postsRouter = new Router();

postsRouter.get(`/`, async (req, res) => {
  try {
    const fileContent = await fs.readFile(MOCK_DATA_PATH, `utf8`);
    const data = JSON.parse(fileContent);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.send([]);
  }
});

module.exports = postsRouter;
