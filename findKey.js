const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👏 assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🙀 assertion Failed: ${actual} !== ${expected}`);
  }
};
// findKey takes in an object and a callback
// scan the object and return the first key for which the callback returns the truthy value
// if not found, return undefined
const findKey = function(objectsScan, callback) {
  for (const objectScan in objectsScan) {
    if (callback(objectsScan[objectScan])) {
      return objectScan;
    }
  }
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"
