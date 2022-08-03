'use strict';

const {HttpCode, ErrorMessage} = require(`../../../constants`);
const {isOptional} = require(`../../../utils`);

module.exports.resourceValidatorFactory = (rules) => {
  return (req, res, next) => {
    const invalidKeys = Object.entries(rules).reduce((acc, [key, validators]) => {
      const value = req.body[key];

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
    }

    next();
  };
};
