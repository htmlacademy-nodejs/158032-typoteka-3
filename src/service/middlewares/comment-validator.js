'use strict';

const {isNonEmptyString, lengthIsInRange} = require(`../../utils`);
const {resourceValidatorFactory} = require(`./factories/resource-validator`);

const rules = {
  text: [isNonEmptyString, lengthIsInRange(1, 1000)]
};

module.exports.commentValidator = resourceValidatorFactory(rules);

