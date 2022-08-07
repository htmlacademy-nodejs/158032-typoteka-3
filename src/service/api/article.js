'use strict';

const {Router} = require(`express`);
const {HttpCode} = require(`../../constants`);
const {articleExists} = require(`../middlewares/article-exists`);
const {commentExists} = require(`../middlewares/comment-exists`);
const {commentValidator} = require(`../middlewares/comment-validator`);
const {articleValidator} = require(`../middlewares/article-validator`);

module.exports.articleApi = (app, articleDataService, commentDataService) => {
  const route = new Router();
  app.use(`/articles`, route);

  route.get(`/`, async (req, res) => {
    const articles = await articleDataService.findAll();

    res.status(HttpCode.OK).json(articles);
  });

  route.get(`/:articleId`, articleExists(articleDataService), async (req, res) => {
    const article = res.locals.article;

    res.status(HttpCode.OK).json(article);
  });

  route.post(`/`, articleValidator, async (req, res) => {
    const article = articleDataService.create(req.body);

    res.status(HttpCode.CREATED).json(article);
  });

  route.put(`/:articleId`, [articleExists(articleDataService), articleValidator], async (req, res) => {
    const article = res.locals.article;
    const update = req.body;
    const updatedArticle = articleDataService.update(article, update);

    res.status(HttpCode.OK).json(updatedArticle);
  });

  route.delete(`/:articleId`, articleExists(articleDataService), async (req, res) => {
    const {id: articleId} = res.locals.article;
    articleDataService.delete(articleId);

    res.status(HttpCode.NO_CONTENT).send();
  });

  route.get(`/:articleId/comments`, articleExists(articleDataService), async (req, res) => {
    const {articleId} = req.params;
    const comments = commentDataService.findAll(articleId);

    res.status(HttpCode.OK).json(comments);
  });

  route.delete(`/:articleId/comments/:commentId`, commentExists(commentDataService), async (req, res) => {
    const {id: commentId} = res.locals.comment;
    commentDataService.delete(commentId);

    res.status(HttpCode.NO_CONTENT).send();
  });

  route.post(`/:articleId/comments`, [articleExists(articleDataService), commentValidator], async (req, res) => {
    const {id: articleId} = res.locals.article;
    const comment = commentDataService.create(articleId, req.body);

    res.status(HttpCode.CREATED).json(comment);
  });
};
