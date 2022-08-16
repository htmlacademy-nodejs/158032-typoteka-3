'use strict';

const {Router} = require(`express`);
const multer = require(`multer`);
const path = require(`path`);

const {getAPI} = require(`../api`);
const {nanoid} = require(`nanoid`);
const {logger} = require(`../../service/lib/logger`);

const UPLOAD_DIR = `../upload/img/`;
const uploadDirAbsolute = path.resolve(__dirname, UPLOAD_DIR);

const storage = multer.diskStorage({
  destination: uploadDirAbsolute,
  filename: (req, file, cb) => {
    const uniqueName = nanoid(10);
    const extension = file.originalname.split(`.`).pop();
    cb(null, `${uniqueName}.${extension}`);
  }
});

const upload = multer({storage});
const api = getAPI();
const articlesRouter = new Router();

articlesRouter.get(`/category/:id`, (req, res) => {
  res.render(`articles-by-category`);
});
articlesRouter.get(`/add`, async (req, res) => {
  const categories = await api.getCategories();
  res.render(`post`, {categories});
});
articlesRouter.post(`/add`, upload.single(`upload`), async (req, res) => {
  const {body, file} = req;
  const newArticle = {
    ...body,
    image: file ? `/img/${file.filename}` : ``
  };

  try {
    await api.createArticle(newArticle);
    res.redirect(`/my`);
  } catch (error) {
    logger.error(error);
    const categories = await api.getCategories();
    res.render(`post`, {categories, prefill: newArticle});
  }
});
articlesRouter.get(`/edit/:id`, (req, res) => {
  res.render(`post`);
});
articlesRouter.get(`/:id`, async (req, res) => {
  const article = await api.getArticle(req.params.id);
  res.render(`post-detail`, {article});
});

module.exports = articlesRouter;
