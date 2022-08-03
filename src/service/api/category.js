'use strict';

const {Router} = require(`express`);
const {HttpCode} = require(`../../constants`);

const route = new Router();


module.exports.categoryApi = (app, categoryDataService) => {
  app.use(`/categories`, route);

  route.get(`/`, async (req, res) => {
    const categories = await categoryDataService.findAll();
    res.status(HttpCode.OK).json(categories);
  });
};
