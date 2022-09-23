const eqObjects = function(object1, object2) {
  if (Object.values(object1).length === Object.values(object2).length) {
    for (let i = 0; i < Object.values(object1).length; i++) {
      if (!Array.isArray(Object.values(object1)[i])) {
        if (object1[Object.keys(object1)[i]] !== object2[Object.keys(object1)[i]]) {
          return false;
        }
      } else {
        if (object1[Object.keys(object1)[i]].length === object2[Object.keys(object1)[i]].length) {
          for (let ii = 0; ii < object1[Object.keys(object1)[i]].length; ii++) {
            if (object1[Object.keys(object1)[i]][ii] !== object2[Object.keys(object1)[i]][ii]) {
              return false;
            }
          }
        } else {
          return false;
        }
      }
    }
    return true;
  } else {
    return false;
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected) === true) {
    return `👏👏👏 Assertion Passed: ${[inspect(actual)]} === ${[inspect(expected)]}`;
  } else {
    return `🥴🥴🥴 Assertion Failed: ${[inspect(actual)]} !== ${[inspect(expected)]}`;
  }

};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(ab, ba)); // => true
console.log(assertObjectsEqual(ab, ba)); // => true
console.log(assertObjectsEqual(ab, abc)); // => false
console.log(assertObjectsEqual(cd, dc)); // => true
console.log(assertObjectsEqual(cd, cd2)); // => false
