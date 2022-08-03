'use strict';

const {Router} = require(`express`);
const {HttpCode} = require(`../../constants`);

const route = new Router();


module.exports.searchApi = (app, articleDataService) => {
  app.use(`/search`, route);

  route.get(`/`, async (req, res) => {
    const {query} = req.query;
    const articles = await articleDataService.searchByTitle(query);

    res.status(HttpCode.OK).json(articles);
  });
};
