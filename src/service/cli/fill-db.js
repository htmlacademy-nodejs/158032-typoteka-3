'use strict';

const fs = require(`fs`).promises;
const chalk = require(`chalk`);
const {getRandomInt, shuffle} = require(`../../utils`);
const {usersMockData} = require('../../testing/mocks');

const DEFAULT_COUNT = 1;
const MAX_MONTH_OFFSET_IN_PAST = 3;
const MAX_SENTENCES_IN_TITLE = 2;
const MAX_SENTENCES_IN_ANNOUNCE = 2;
const GENERATED_FILE_PATH = `./database/fill-db.sql`;
const TITLES_FILE_PATH = `./data/titles.txt`;
const SENTENCES_FILE_PATH = `./data/sentences.txt`;
const CATEGORIES_FILE_PATH = `./data/categories.txt`;
const COMMENTS_FILE_PATH = `./data/comments.txt`;
const MAX_COMMENTS = 5;

const generateCreatedDate = () => {
  const currentDate = new Date();
  const minimalDate = new Date();
  minimalDate.setMonth(currentDate.getMonth() - MAX_MONTH_OFFSET_IN_PAST);

  return new Date(getRandomInt(minimalDate.getTime(), currentDate.getTime()));
};

const generateArticles = (articlesCount, usersCount, titles, articlesSentences, categories, commentsSentences) => (
  Array(articlesCount).fill({}).map((_, articleIndex) => ({
    userId: getRandomInt(1, usersCount),
    comments: generateComments(getRandomInt(1, MAX_COMMENTS), usersCount, articleIndex + 1, commentsSentences),
    title: titles[getRandomInt(0, MAX_SENTENCES_IN_TITLE)],
    createdDate: generateCreatedDate(),
    announce: shuffle(articlesSentences).slice(0, MAX_SENTENCES_IN_ANNOUNCE).join(` `),
    fullText: shuffle(articlesSentences).slice(0, getRandomInt(MAX_SENTENCES_IN_ANNOUNCE, articlesSentences.length)).join(` `),
    category: [getRandomInt(1, categories.length)]
  }))
);

const generateComments = (commentsCount, usersCount, articleId, comments) => (
  Array(commentsCount).fill({}).map(() => ({
    userId: getRandomInt(1, usersCount),
    articleId,
    text: shuffle(comments)
      .slice(0, getRandomInt(1, 3))
      .join(` `)
  }))
);

const readFileContent = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, `utf8`);
    return toPostgreQuotes(content).trim().split(`\n`);
  } catch (err) {
    console.error(chalk.red(`Failed to read file content: `, err));
    return [];
  }
};

const toPostgreQuotes = string => {
  return string.replace(/'/g, `''`);
}

module.exports = {
  name: `--fill-db`,
  async run(args) {
    const titles = await readFileContent(TITLES_FILE_PATH);
    const sentences = await readFileContent(SENTENCES_FILE_PATH);
    const categories = await readFileContent(CATEGORIES_FILE_PATH);
    const commentsSentences = await readFileContent(COMMENTS_FILE_PATH);

    const [count] = args;
    const articleCount = Number.parseInt(count, 10) || DEFAULT_COUNT;
    const usersCount = usersMockData.length;
    const articles = generateArticles(articleCount, usersCount, titles, sentences, categories, commentsSentences);
    const comments = articles.flatMap(article => article.comments);
    const articlesCategories = articles.map((article, index) => ({articleId: index + 1, categoryId: article.category[0]}));

    const usersValues = usersMockData.map(
      ({email, passwordHash, firstName, lastName, avatar}) =>
        `('${email}', '${passwordHash}', '${firstName}', '${lastName}', '${avatar}')`
    ).join(`,\n`);

    const categoriesValues = categories.map((name) =>
      `('${name}')`
    ).join(`,\n`);

    const articlesValues = articles.map(
      ({title, userId, announce, fullText}) =>
        `('${title}', '${userId}', '${announce}', '${fullText}')`
    ).join(`,\n`);

    const articlesCategoriesValues = articlesCategories.map(
      ({articleId, categoryId}) =>
        `(${articleId}, ${categoryId})`
    ).join(`,\n`);

    const commentsValues = comments.map(
      ({text, userId, articleId}) =>
        `('${text}', ${userId}, ${articleId})`
    ).join(`,\n`);

    const content = `
      INSERT INTO users("email", "passwordHash", "firstName", "lastName", "avatar") VALUES
      ${usersValues};
      INSERT INTO categories("name") VALUES
      ${categoriesValues};
      ALTER TABLE articles DISABLE TRIGGER ALL;
      INSERT INTO articles("title", "userId", "announce", "fullText") VALUES
      ${articlesValues};
      ALTER TABLE articles ENABLE TRIGGER ALL;
      ALTER TABLE articles_categories DISABLE TRIGGER ALL;
      INSERT INTO articles_categories("articleId", "categoryId") VALUES
      ${articlesCategoriesValues};
      ALTER TABLE articles_categories ENABLE TRIGGER ALL;
      ALTER TABLE comments DISABLE TRIGGER ALL;
      INSERT INTO COMMENTS("text", "userId", "articleId") VALUES
      ${commentsValues};
      ALTER TABLE comments ENABLE TRIGGER ALL;
    `;

    try {
      await fs.writeFile(GENERATED_FILE_PATH, content);
      return console.info(chalk.green(`Operation success. File created.`));
    } catch (err) {
      return console.error(chalk.red(`Failed to write data to file: `), err);
    }
  }
};
