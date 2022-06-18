'use strict';
const chalk = require(`chalk`);
const http = require(`http`);
const fs = require(`fs`).promises;
const {HttpCode, ErrorMessage} = require(`../../constants`);

const DEFAULT_PORT = 3000;
const DATA_FILE_PATH = `./mocks.json`;

const sendResponse = (res, statusCode, body) => {
  const template = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Typoteka</title>
    </head>
    <body>${body}</body>
    </html>
  `;
  res.writeHead(statusCode, {
    'Content-Type': `text/html; charset=UTF-8`
  });
  res.end(template);
};

const handleUserRequest = async (req, res) => {
  try {
    switch (req.url) {
      case `/`: {
        const fileContent = await fs.readFile(DATA_FILE_PATH, `utf8`);
        const data = JSON.parse(fileContent);
        const titles = data.map((item) => {
          return `<li>${item.title}</li>`;
        });
        const responseBody = `<ul>${titles.join(``)}</ul>`;

        sendResponse(res, HttpCode.OK, responseBody);
        break;
      }
      default: {
        sendResponse(res, HttpCode.NOT_FOUND, ErrorMessage.NOT_FOUND);
      }
    }
  } catch (err) {
    sendResponse(res, HttpCode.INTERNAL_SERVER_ERROR, ErrorMessage.INTERNAL_SERVER_ERROR);
  }
};

module.exports = {
  name: `--server`,
  async run(args) {
    const port = Number.parseInt(args[0], 10) || DEFAULT_PORT;

    http
      .createServer(handleUserRequest)
      .listen(port)
      .on(`listening`, () => {
        console.info(chalk.green(`Server listening on port: ${port}`));
      })
      .on(`error`, ({message}) => {
        console.info(chalk.red(`Failed to start ther server: ${message}`));
      });
  }
};
