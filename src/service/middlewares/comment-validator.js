'use strict';

const {isNonEmptyString, lengthIsInRange} = require(`../../utils`);
const {requestValidatorFactory} = require(`./factories/resource-validator`);

const rules = {
  text: [isNonEmptyString, lengthIsInRange(1, 1000)]
};

module.exports.commentValidator = requestValidatorFactory(rules);

