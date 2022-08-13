'use strict';

const {Router} = require(`express`);

const {getAPI} = require(`../api`);

const api = getAPI();
const searchRouter = new Router();

searchRouter.get(`/`, async (req, res) => {
  const {query} = req.query;

  if (query) {
    const articles = await api.searchArticles(query);
    res.render(`search`, {query, articles});
    return;
  }

  res.render(`search`);
});

module.exports = searchRouter;
