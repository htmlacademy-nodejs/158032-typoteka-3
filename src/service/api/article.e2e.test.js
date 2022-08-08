'use strict';

const express = require(`express`);
const request = require(`supertest`);

const {articlesMockData, commentsMockData} = require(`../../testing/mocks`);
const {HttpCode} = require(`../../constants`);
const {articleApi} = require(`./article`);
const {ArticleDataService, CommentDataService} = require(`../data-service`);

describe(`Articles`, () => {
  let response;
  const VALID_ARTICLE_ID = `iK14vz`;
  const INVALID_ARTICLE_ID = `invalid article id`;
  const VALID_ARTICLE_COMMENT_ID = `ZrbQ8D`;
  const INVALID_ARTICLE_COMMENT_ID = `invalid article comment id`;

  const createAPI = () => {
    const app = express();
    const clonedData = JSON.parse(JSON.stringify(articlesMockData));
    app.use(express.json());
    articleApi(app, new ArticleDataService(clonedData), new CommentDataService(clonedData));
    return app;
  };

  describe(`Get articles`, () => {

    beforeAll(async () => {
      const app = createAPI();
      response = await request(app)
        .get(`/articles`);
    });

    test(`Returns correct articles`, async () => {
      expect(response.status).toBe(HttpCode.OK);
      expect(response.body).toEqual(articlesMockData);
    });
  });

  describe(`Get article by ID`, () => {
    const app = createAPI();

    const setup = async ({id}) => {
      response = await request(app)
        .get(`/articles/${id}`);
    };

    test(`Returns correct article by ID`, async () => {
      await setup({id: VALID_ARTICLE_ID});
      expect(response.status).toBe(HttpCode.OK);
      expect(response.body).toEqual(articlesMockData[1]);
    });

    test(`Status code is NOT FOUND if the article does not exist`, async () => {
      await setup({id: INVALID_ARTICLE_ID});
      expect(response.status).toEqual(HttpCode.NOT_FOUND);
    });
  });

  describe(`Create new article`, () => {
    const VALID_NEW_ARTICLE = {
      "title": `New article title that is long enough to pass validation`,
      "createdDate": `2022-07-27T04:00:19.932Z`,
      "category": [
        `Culture`,
        `Sports`
      ],
      "announce": `New article announce that is long enough to pass validation`,
      "fullText": `New article full text that is long enough to pass validation`
    };
    const INVALID_NEW_ARTICLE = {
      "title": `Not long enough title`,
      "createdDate": ``,
      "category": `Incorrect category format`,
      "announce": `Not long enough announce`,
      "fullText": `Not long enough full text`
    };
    const setup = async ({body}) => {
      const app = createAPI();

      response = await request(app)
        .post(`/articles`)
        .send(body);

      return app;
    };

    test(`Articles count is increased by 1`, async () => {
      const app = await setup({
        body: VALID_NEW_ARTICLE
      });
      const articlesResponse = await request(app)
        .get(`/articles`);
      expect(response.status).toBe(HttpCode.CREATED);
      expect(articlesResponse.body.length).toBe(articlesMockData.length + 1);
    });


    test(`Returns correct status and error message when provided invalid data`, async () => {
      await setup({
        body: INVALID_NEW_ARTICLE
      });
      const expectedInvalidKeys = Object.keys(INVALID_NEW_ARTICLE);
      expect(response.status).toBe(HttpCode.BAD_REQUEST);
      expect(response.text).toBe(`Invalid request body keys: ${expectedInvalidKeys.join(`, `)}`);
    });
  });

  describe(`Update an existing article by ID`, () => {
    const VALID_ARTICLE_UPDATE = {
      "title": `New article title that is long enough to pass validation`,
      "createdDate": `2022-07-27T04:00:19.932Z`,
      "category": [
        `Culture`,
        `Sports`
      ],
      "announce": `New article announce that is long enough to pass validation`,
      "fullText": `New article full text that is long enough to pass validation`
    };
    const INVALID_ARTICLE_UPDATE = {
      "title": `New article title that is long enough to pass validation`,
      "createdDate": `2022-07-27T04:00:19.932Z`,
      "category": [
        `Culture`,
        `Sports`
      ],
      "announce": `Not long enough announce`,
      "fullText": `Not long enough full text`
    };

    const setup = async ({id, body}) => {
      const app = createAPI();
      response = await request(app)
        .put(`/articles/${id}`)
        .send(body);

      return app;
    };

    test(`Status code is OK`, async () => {
      await setup({
        id: VALID_ARTICLE_ID,
        body: VALID_ARTICLE_UPDATE
      });
      expect(response.status).toBe(HttpCode.OK);
    });

    test(`Status code is NOT FOUND if the article does not exist`, async () => {
      await setup({
        id: INVALID_ARTICLE_ID,
        body: VALID_ARTICLE_UPDATE
      });
      expect(response.status).toBe(HttpCode.NOT_FOUND);
    });

    test(`Status code is BAD REQUEST if provided invalid data`, async () => {
      await setup({
        id: VALID_ARTICLE_ID,
        body: INVALID_ARTICLE_UPDATE
      });
      expect(response.status).toBe(HttpCode.BAD_REQUEST);
    });

    test(`Returns correct error message when provided invalid data`, async () => {
      await setup({
        id: VALID_ARTICLE_ID,
        body: INVALID_ARTICLE_UPDATE
      });
      const expectedInvalidKeys = [`announce`, `fullText`];
      expect(response.text).toBe(`Invalid request body keys: ${expectedInvalidKeys.join(`, `)}`);
    });
  });

  describe(`Delete an article`, () => {
    const setup = async ({id}) => {
      const app = createAPI();
      response = await request(app)
        .delete(`/articles/${id}`);

      return app;
    };

    test(`Article has been deleted`, async () => {
      const app = await setup({id: VALID_ARTICLE_ID});
      const result = await request(app)
        .get(`/articles`);
      const foundArticlesIds = result.body.map(({id}) => id);
      expect(response.status).toBe(HttpCode.NO_CONTENT);
      expect(result.body.length).toBe(articlesMockData.length - 1);
      expect(foundArticlesIds).not.toContain(VALID_ARTICLE_ID);
    });

    test(`Status code is NOT FOUND if the article does not exist`, async () => {
      await setup({id: INVALID_ARTICLE_ID});
      expect(response.status).toBe(HttpCode.NOT_FOUND);
    });
  });

  describe(`Get article comments`, () => {
    beforeAll(async () => {
      const app = createAPI();
      response = await request(app)
        .get(`/articles/${VALID_ARTICLE_ID}/comments`);
    });

    test(`Returns correct article comments`, async () => {
      expect(response.status).toBe(HttpCode.OK);
      expect(response.body).toEqual(commentsMockData);
    });
  });

  describe(`Delete an article comment`, () => {
    const setup = async ({id}) => {
      const app = createAPI();
      response = await request(app)
        .delete(`/articles/${VALID_ARTICLE_ID}/comments/${id}`);

      return app;
    };

    test(`Article comment has been deleted`, async () => {
      const app = await setup({id: VALID_ARTICLE_COMMENT_ID});
      const commentsResponse = await request(app)
        .get(`/articles/${VALID_ARTICLE_ID}/comments`);
      const foundArticleCommentsIds = commentsResponse.body.map(({id}) => id);
      expect(commentsResponse.body.length).toBe(commentsMockData.length - 1);
      expect(response.status).toBe(HttpCode.NO_CONTENT);
      expect(foundArticleCommentsIds).not.toContain(VALID_ARTICLE_COMMENT_ID);
    });

    test(`Status code is NOT FOUND if the article does not exist`, async () => {
      await setup({id: INVALID_ARTICLE_COMMENT_ID});
      expect(response.status).toBe(HttpCode.NOT_FOUND);
    });
  });

  describe(`Create new comment`, () => {
    const VALID_NEW_COMMENT = {
      "text": `New article comment with text that is long enough to pass validation`
    };
    const INVALID_NEW_COMMENT = {
      "text": ``
    };
    const setup = async ({body}) => {
      const app = createAPI();

      response = await request(app)
        .post(`/articles/${VALID_ARTICLE_ID}/comments`)
        .send(body);

      return app;
    };


    test(`Article comments count is increased by 1`, async () => {
      const app = await setup({
        body: VALID_NEW_COMMENT
      });
      const commentsResponse = await request(app)
        .get(`/articles/${VALID_ARTICLE_ID}/comments`);
      expect(response.status).toBe(HttpCode.CREATED);
      expect(commentsResponse.body.length).toBe(commentsMockData.length + 1);
    });

    test(`Returns correct status and error message when provided invalid data`, async () => {
      await setup({
        body: INVALID_NEW_COMMENT
      });
      const expectedInvalidKeys = Object.keys(INVALID_NEW_COMMENT);
      expect(response.status).toBe(HttpCode.BAD_REQUEST);
      expect(response.text).toBe(`Invalid request body keys: ${expectedInvalidKeys.join(`, `)}`);
    });
  });
});
