const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👏 assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🙀 assertion Failed: ${actual} !== ${expected}`);
  }
};
// search for a key on an object where its value matches a given value
// scan the object and return the first key which contains the given value
// if no key is found, return undefined

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(theObjectToSearch, keyValue) {
  for (const item of Object.keys(theObjectToSearch)) {
    if (theObjectToSearch[item] === keyValue) {
      return item;
    } 
    }
  }

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);