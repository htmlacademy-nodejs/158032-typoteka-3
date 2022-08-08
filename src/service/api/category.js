'use strict';

const {Router} = require(`express`);
const {HttpCode} = require(`../../constants`);

module.exports.categoryApi = (app, categoryDataService) => {
  const route = new Router();
  app.use(`/categories`, route);

  route.get(`/`, async (req, res) => {
    const categories = await categoryDataService.findAll();
    res.status(HttpCode.OK).json(categories);
  });
};
