'use strict';

module.exports = {
	name: '--help',
	run() {
    const text = `
    This programm will generate mock data.
    Guide:
      node src/service/service.js <command>
      Commands:
      --version:            prints the version number
      --help:               prints this text
      --generate <count>    generates mocks.json file
    `;

    console.info(text);
	}
}
