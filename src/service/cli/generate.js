'use strict';

const {shuffle, getRandomInt} = require(`../../utils/utils`);
const fs = require(`fs`).promises;
const chalk = require(`chalk`);

const DEFAULT_COUNT = 1;
const MAX_MONTH_OFFSET_IN_PAST = 3;
const MAX_SENTENCES_IN_ANNOUNCE = 5;
const FILE_NAME = `mocks.json`;
const TITLES_FILE_PATH = `./data/titles.txt`;
const SENTENCES_FILE_PATH = `./data/sentences.txt`;
const CATEGORIES_FILE_PATH = `./data/categories.txt`;

const generateCreatedDate = () => {
  const currentDate = new Date();
  const minimalDate = new Date();
  minimalDate.setMonth(currentDate.getMonth() - MAX_MONTH_OFFSET_IN_PAST);

  return new Date(getRandomInt(minimalDate.getTime(), currentDate.getTime()));
};

const generateArticles = (count, titles, sentences, categories) => (
  Array(count).fill({}).map(() => ({
    title: titles[getRandomInt(0, titles.length - 1)],
    createdDate: generateCreatedDate(),
    announce: shuffle(sentences).slice(0, MAX_SENTENCES_IN_ANNOUNCE).join(` `),
    fullText: shuffle(sentences).slice(0, getRandomInt(MAX_SENTENCES_IN_ANNOUNCE, sentences.length)).join(` `),
    category: [categories[getRandomInt(0, categories.length - 1)]],
  }))
);

const readFileContent = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, `utf8`);
    return content.trim().split(`\n`);
  } catch (err) {
    console.error(chalk.red(`Failed to read file content: `, err));
    return [];
  }
};

module.exports = {
  name: `--generate`,
  async run(args) {
    const titles = await readFileContent(TITLES_FILE_PATH);
    const sentences = await readFileContent(SENTENCES_FILE_PATH);
    const categories = await readFileContent(CATEGORIES_FILE_PATH);

    const [count] = args;
    const articleCount = Number.parseInt(count, 10) || DEFAULT_COUNT;
    const content = JSON.stringify(generateArticles(articleCount, titles, sentences, categories));

    try {
      await fs.writeFile(FILE_NAME, content);
      return console.info(chalk.green(`Operation success. File created.`));
    } catch (err) {
      return console.error(chalk.red(`Failed to write data to file: `), err);
    }
  }
};
