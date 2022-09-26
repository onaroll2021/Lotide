
const eqArrays = require('./eqArrays').eqArrays;

const assertArraysEqual = function(testOne, testTwo) {
  if (eqArrays(testOne, testTwo) === true) {
    console.log(`👏 Yeah! Two Arrays are exactly the same!`);
  } else {
    console.log(`🥴 Two arrays are not the same!`);
  }
};
module.exports = {
  assertArraysEqual: assertArraysEqual,
}
