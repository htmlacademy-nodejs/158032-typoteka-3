'use strict';

const {Router} = require(`express`);
const {getAPI} = require(`../api`);

const api = getAPI();
const mainRouter = new Router();

mainRouter.get(`/`, async (req, res) => {
  const [articles, categories] = await Promise.all([
    api.getArticles(),
    api.getCategories()
  ]);
  res.render(`main`, {articles, categories});
});

module.exports = mainRouter;
