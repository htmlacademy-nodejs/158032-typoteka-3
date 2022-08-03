'use strict';

const {HttpCode, ErrorMessage} = require(`../../constants`);

module.exports.articleExists = (dataService) => (req, res, next) => {
  const {articleId} = req.params;
  const article = dataService.findOne(articleId);

  if (!article) {
    res.status(HttpCode.NOT_FOUND).send(ErrorMessage.resourceNotFound(articleId));
    return;
  }

  res.locals.article = article;

  next();
};
