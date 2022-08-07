'use strict';

const express = require(`express`);
const request = require(`supertest`);

const {categoryApi} = require(`./category`);
const {articlesMockData, categoriesMockData} = require(`../../testing/mocks`);
const {HttpCode} = require(`../../constants`);
const {CategoryDataService} = require(`../data-service`);

const app = express();
app.use(express.json());

categoryApi(app, new CategoryDataService(articlesMockData));

describe(`Categories`, () => {
  let response;

  beforeAll(async () => {
    response = await request(app)
      .get(`/categories`);
  });

  test(`Status code is OK`, async () => {
    expect(response.status).toBe(HttpCode.OK);
  });

  test(`Returns correct categories`, async () => {
    expect(response.body).toEqual(categoriesMockData);
  });
});
