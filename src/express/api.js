'use strict';

const axios = require(`axios`);
const port = process.env.API_PORT || 3000;
const API_URL = process.env.API_URL || `http://localhost:${port}/api/`;
const API_TIMEOUT = process.env.TIMEOUT || 1000;

class API {
  constructor(config) {
    this._http = axios.create(config);
  }

  async _load(url, options) {
    const response = await this._http.request({url, ...options});
    return response.data;
  }

  getArticles() {
    return this._load(`/articles`);
  }

  getMyArticles() {
    return this._load(`/articles`);
  }

  getCategories() {
    return this._load(`/categories`);
  }

  async getMyComments() {
    const articles = await this._load(`/articles`);
    return articles.flatMap((article) => article.comments);
  }

  getArticle(id) {
    return this._load(`/articles/${id}`);
  }

  createArticle(data) {
    return this._load(`/articles`, {
      method: `POST`,
      data
    });
  }

  searchArticles(query) {
    return this._load(`/search?query=${query}`);
  }
}

const defaultAPI = new API({
  baseURL: API_URL,
  timeout: API_TIMEOUT
});

module.exports = {
  API,
  getAPI: () => defaultAPI
};
