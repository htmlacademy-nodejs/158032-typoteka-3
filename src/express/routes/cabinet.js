'use strict';

const {Router} = require(`express`);

const cabinetRouter = new Router();

cabinetRouter.get(`/`, (req, res) => {
  res.render(`my`);
});
cabinetRouter.get(`/comments`, (req, res) => {
  res.render(`comments`);
});
cabinetRouter.get(`/categories`, (req, res) => {
  res.render(`all-categories`);
});

module.exports = cabinetRouter;
