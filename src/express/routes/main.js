const { Router } = require('express');

const mainRouter = new Router();

mainRouter.get('/', (req, res) => {
  res.send(req.originalUrl);
});

module.exports = mainRouter;
