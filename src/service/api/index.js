'use strict';

const {Router} = require(`express`);
const getMockData = require(`../lib/get-mock-data`);
const {CategoryDataService, ArticleDataService, CommentDataService} = require(`../data-service`);
const {articleApi} = require(`./article`);
const {categoryApi} = require(`./category`);
const {searchApi} = require(`./search`);

const app = new Router();

(async () => {
  const mockData = await getMockData();

  articleApi(app, new ArticleDataService(mockData), new CommentDataService(mockData));
  categoryApi(app, new CategoryDataService(mockData));
  searchApi(app, new ArticleDataService(mockData));
})();

module.exports = app;
