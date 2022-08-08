'use strict';

const {Router} = require(`express`);
const {HttpCode} = require(`../../constants`);
const {searchQueryValidator} = require(`../middlewares/search-query-validator`);

module.exports.searchApi = (app, articleDataService) => {
  const route = new Router();
  app.use(`/search`, route);

  route.get(`/`, searchQueryValidator, async (req, res) => {
    const {query} = req.query;
    const articles = await articleDataService.searchByTitle(query);

    res.status(HttpCode.OK).json(articles);
  });
};
