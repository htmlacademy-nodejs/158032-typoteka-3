'use strict';

const {shuffle, getRandomInt} = require('../../utils');
const fs = require('fs');

const DEFAULT_COUNT = 1;
const MAX_MONTH_OFFSET_IN_PAST = 3;
const MAX_SENTENCES_IN_ANNOUNCE = 5;
const FILE_NAME = `mocks.json`;

const TITLES = [
  `Here's What No One Tells You About Blog.`,
  `20 Wonderful Blog. Number 16 is Absolutely Stunning`,
  `7 Facts That Nobody Told You About Blog.`,
  `All You Need To Know About Blog.`,
  `10 Useful Tips From Experts In Blog.`,
];

const SENTENCES = [
  `You know you have a problem when you light up a cigarette while you already have one lit in the ashtray.`,
  `What could go wrong?`,
  `And West Virginians are angry, right?`,
  `We still need more time.`,
  `Anyway, moral of the story: Don't ask Andrew Garfield about his famous girlfriend.`,
  `Originally from Hidalgo, Mexico, Greisa moved to Dallas, Texas, with her family when she was 7 years old.`,
  `This isn't been a samizdat revolution, sparked by epistles from dissident intellectuals.`,
  `So one of the things I did was explain [in the interview] why I was asking.`,
  `That is, just because you're worried about something doesn't mean it's going to happen.`,
  `Rona continues his description: Descending into the ocean is sheer excitement.`,
];

const CATEGORIES = [
  `Science`,
  `Politics`,
  `Culture`,
  `Sports`,
  `Nature`,
  `Books`,
];

const generateCreatedDate = () => {
  const currentDate = new Date();
  const minimalDate = new Date();
  minimalDate.setMonth(currentDate.getMonth() - MAX_MONTH_OFFSET_IN_PAST);

  return new Date(getRandomInt(minimalDate.getTime(), currentDate.getTime()));
}

const generateArticles = (count) => (
  Array(count).fill({}).map(() => ({
    title: TITLES[getRandomInt(0, TITLES.length - 1)],
    createdDate: generateCreatedDate(),
    announce: shuffle(SENTENCES).slice(0, MAX_SENTENCES_IN_ANNOUNCE).join(` `),
    fullText: shuffle(SENTENCES).slice(0, getRandomInt(MAX_SENTENCES_IN_ANNOUNCE, SENTENCES.length)).join(` `),
    category: [CATEGORIES[getRandomInt(0, CATEGORIES.length - 1)]],
  }))
);

module.exports = {
	name: '--generate',
	run(args) {
		const [count] = args;
		const articleCount = Number.parseInt(count, 10) || DEFAULT_COUNT;
		const content = JSON.stringify(generateArticles(articleCount));

		fs.writeFile(FILE_NAME, content, err => {
			if (err) {
				return console.error('Failed to write data to file: ', err);
			}

			return console.info('Operation success. File created.');
		})
	}
}
