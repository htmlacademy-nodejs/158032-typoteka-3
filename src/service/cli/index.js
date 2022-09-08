'use strict';

const help = require(`./help`);
const generate = require(`./generate`);
const fillDb = require(`./fill-db`);
const version = require(`./version`);
const server = require(`./server`);

const Cli = {
  [generate.name]: generate,
  [fillDb.name]: fillDb,
  [help.name]: help,
  [version.name]: version,
  [server.name]: server
};

module.exports = {
  Cli
};
