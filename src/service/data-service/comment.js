'use strict';

const {nanoid} = require(`nanoid`);
const {MAX_ID_LENGTH} = require(`../../constants`);

class CommentDataService {
  constructor(articles) {
    this._articles = articles;
  }

  findAll(articleId) {
    const article = this._articles.find(({id}) => id === articleId);
    return article.comments;
  }

  findOne(commentId) {
    const article = this._findArticleByCommentId(commentId);
    return article && article.comments.find(({id}) => id === commentId);
  }

  delete(commentId) {
    const article = this._findArticleByCommentId(commentId);
    article.comments = article && article.comments.filter(({id}) => id !== commentId);
  }

  create(articleId, comment) {
    const newComment = {
      ...comment,
      id: nanoid(MAX_ID_LENGTH)
    };
    const article = this._findArticleById(articleId);
    article.comments.push(newComment);

    return newComment;
  }

  // Helper functions only needed for temporary service implementation based on mock data
  _findArticleByCommentId(commentId) {
    return this._articles.find(({comments}) => {
      return Boolean(comments.find(({id}) => id === commentId));
    });
  }

  _findArticleById(articleId) {
    return this._articles.find(({id}) => id === articleId);
  }
}

module.exports.CommentDataService = CommentDataService;

