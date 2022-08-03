'use strict';

const fs = require(`fs`).promises;
const MOCK_DATA_PATH = `mocks.json`;
let data = null;

const getMockData = async () => {
  if (Array.isArray(data)) {
    return data;
  }

  try {
    const fileContent = await fs.readFile(MOCK_DATA_PATH, `utf8`);
    data = JSON.parse(fileContent);
  } catch (err) {
    console.error(err);
    return err;
  }

  return data;
};

module.exports = getMockData;
