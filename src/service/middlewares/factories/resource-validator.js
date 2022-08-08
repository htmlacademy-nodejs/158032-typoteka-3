'use strict';

const {HttpCode, ErrorMessage} = require(`../../../constants`);
const {isOptional} = require(`../../../utils`);

module.exports.requestValidatorFactory = (rules, propName = `body`) => {
  return (req, res, next) => {
    const propToValidate = req[propName];
    const invalidKeys = Object.entries(rules).reduce((acc, [key, validators]) => {
      const value = propToValidate[key];

      if (!value && validators.includes(isOptional)) {
        return acc;
      }

      if (!validators.every((rule) => rule(value))) {
        acc.push(key);
      }

      return acc;
    }, []);

    if (invalidKeys.length) {
      res.status(HttpCode.BAD_REQUEST).send(ErrorMessage.invalidRequestBody(invalidKeys));
      return;
    }

    next();
  };
};
