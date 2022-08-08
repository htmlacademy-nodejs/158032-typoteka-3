'use strict';

const {isNonEmptyString} = require(`../../utils`);
const {requestValidatorFactory} = require(`./factories/resource-validator`);

const rules = {
  query: [isNonEmptyString]
};

module.exports.searchQueryValidator = requestValidatorFactory(rules, `query`);

