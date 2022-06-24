const { Router } = require('express');

const authRouter = new Router();

authRouter.get('/register', (req, res) => {
  res.send(req.originalUrl);
});
authRouter.get('/login', (req, res) => {
  res.send(req.originalUrl);
});

module.exports = authRouter;
