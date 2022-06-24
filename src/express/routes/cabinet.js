const { Router } = require('express');

const cabinetRouter = new Router();

cabinetRouter.get('/', (req, res) => {
  res.send(req.originalUrl);
});
cabinetRouter.get('/comments', (req, res) => {
  res.send(req.originalUrl);
});
cabinetRouter.get('/categories', (req, res) => {
  res.send(req.originalUrl);
});

module.exports = cabinetRouter;
