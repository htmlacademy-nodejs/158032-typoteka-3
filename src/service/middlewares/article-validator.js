'use strict';

const {isNonEmptyString, isNonEmptyArray, lengthIsInRange, isOptional} = require(`../../utils`);
const {requestValidatorFactory} = require(`./factories/resource-validator`);

const rules = {
  title: [isNonEmptyString, lengthIsInRange(30, 250)],
  createdDate: [isNonEmptyString],
  category: [isNonEmptyArray],
  announce: [isNonEmptyString, lengthIsInRange(30, 250)],
  image: [isOptional, isNonEmptyString],
  fullText: [isOptional, isNonEmptyString, lengthIsInRange(30, 1000)]
};

module.exports.articleValidator = requestValidatorFactory(rules);

