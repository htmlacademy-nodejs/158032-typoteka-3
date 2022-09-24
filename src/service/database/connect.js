const {Sequelize} = require('sequelize');
const {PGUSER, PGPASSWORD, PGDATABASE, PGHOST, PGPORT} = require('../../../config');
const {getLogger} = require('../lib/logger');

const logger = getLogger({name: `database`});

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHOST,
  port: parseInt(PGPORT),
  dialect: `postgres`,
});

(async function() {
  try {
    await sequelize.authenticate();
    logger.info(`Connected to database!`);
  } catch (err) {
    logger.info(`Could not connect to database: ${err}`);
  }
})();
