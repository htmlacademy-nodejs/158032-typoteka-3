'use strict';

const express = require(`express`);
const request = require(`supertest`);

const {searchApi} = require(`./search`);
const {articlesMockData} = require(`../../testing/mocks`);
const {HttpCode} = require(`../../constants`);
const {ArticleDataService} = require(`../data-service`);

const app = express();
app.use(express.json());

searchApi(app, new ArticleDataService(articlesMockData));

describe(`Search`, () => {
  let response;
  const DEFAULT_QUERY = `Experts`;
  const DEFAUT_QUERY_MATCHING_IDS = [`oOUIsw`, `ypSOF8`, `7Imdt6`, `zptmiK`];
  const setup = async ({query}) => {
    response = await request(app)
      .get(`/search`)
      .query({
        query
      });

    return response;
  };

  test(`Status code is OK`, async () => {
    await setup({query: DEFAULT_QUERY});
    expect(response.status).toBe(HttpCode.OK);
  });
  test(`Returns correct articles by IDs`, async () => {
    await setup({query: DEFAULT_QUERY});
    const foundArticlesIds = response.body.map((item) => item.id);

    expect(foundArticlesIds).toEqual(DEFAUT_QUERY_MATCHING_IDS);
  });
  test(`Is case insensitive`, async () => {
    await setup({query: DEFAULT_QUERY.toLowerCase()});
    const foundArticlesIds = response.body.map((item) => item.id);
    expect(foundArticlesIds).toEqual(DEFAUT_QUERY_MATCHING_IDS);
  });
  test(`Returns empty array when nothing was found`, async () => {
    await setup({query: `Nothing will match this`});
    expect(response.body).toEqual([]);
  });
  test(`Status code is BAD REQUEST when invalid query was provided`, async () => {
    await setup({query: ``});
    expect(response.status).toEqual(HttpCode.BAD_REQUEST);
  });

});
