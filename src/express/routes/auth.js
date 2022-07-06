const { Router } = require('express');

const authRouter = new Router();

authRouter.get('/register', (req, res) => {
  res.render('sign-up');
});
authRouter.get('/login', (req, res) => {
  res.render('login');
});

module.exports = authRouter;
