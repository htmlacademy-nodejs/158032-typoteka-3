'use strict';

const {HttpCode, ErrorMessage} = require(`../../constants`);

module.exports.commentExists = (dataService) => (req, res, next) => {
  const {commentId} = req.params;
  const comment = dataService.findOne(commentId);

  if (!comment) {
    res.status(HttpCode.NOT_FOUND).send(ErrorMessage.resourceNotFound(commentId));
    return;
  }

  res.locals.comment = comment;
  next();
};
