'use strict';

const {nanoid} = require(`nanoid`);
const {MAX_ID_LENGTH} = require(`../../constants`);

class ArticleDataService {
  constructor(articles) {
    this._articles = articles;
  }

  findAll() {
    return this._articles;
  }

  findOne(id) {
    return this._articles.find((article) => article.id === id);
  }

  create(article) {
    const newArticle = {
      ...article,
      id: nanoid(MAX_ID_LENGTH),
      comments: []
    };

    this._articles.push(newArticle);

    return newArticle;
  }

  update(article, updates) {
    Object.entries(updates).forEach(([key, value]) => {
      article[key] = value;
    });
    return article;
  }

  delete({id: articleId}) {
    this._articles = this._articles.filter(({id}) => id !== articleId);
  }

  searchByTitle(query) {
    const testPattern = new RegExp(query, `i`);
    return this._articles.filter(({title}) => testPattern.test(title));
  }
}

module.exports.ArticleDataService = ArticleDataService;
