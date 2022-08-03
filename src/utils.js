'use strict';

module.exports.getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports.shuffle = (someArray) => {
  for (let i = someArray.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [someArray[i], someArray[randomPosition]] = [someArray[randomPosition], someArray[i]];
  }

  return someArray;
};

module.exports.isOptional = (_) => {
  return true;
};

module.exports.isNonEmptyString = (value) => {
  return value && (typeof value === `string` || value instanceof String);
};

module.exports.isNonEmptyArray = (value) => {
  return Array.isArray(value) && value.length > 0;
};

module.exports.lengthIsInRange = (min, max) => {
  return (value) => value.length > min && value.length < max;
};
