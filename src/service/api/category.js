'use strict';

const {Router} = require(`express`);
const {HttpCode} = require(`../../constants`);

const route = new Router();


module.exports.categoryApi = (app, dataService) => {
  app.use(`/categories`, route);

  route.get(`/`, async (req, res) => {
    const categories = await dataService.findAll();
    res.status(HttpCode.OK).json(categories);
  });
};
