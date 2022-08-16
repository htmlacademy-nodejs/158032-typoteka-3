'use strict';

const {Router} = require(`express`);
const {getAPI} = require(`../api`);

const api = getAPI();
const cabinetRouter = new Router();

cabinetRouter.get(`/`, async (req, res) => {
  const articles = await api.getMyArticles();
  res.render(`my`, {articles});
});
cabinetRouter.get(`/comments`, async (req, res) => {
  const comments = await api.getMyComments();
  res.render(`comments`, {comments});
});
cabinetRouter.get(`/categories`, (req, res) => {
  res.render(`all-categories`);
});

module.exports = cabinetRouter;
