// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👏 assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🙀 assertion Failed: ${actual} !== ${expected}`);
  }
};
// to implement countOnly
// take in a collection of items and return counts for a specific subset of those items
// in order to decide what to count, it will also give an idea of which items we care about; in our case, strings only
// countOnly will be given an array and an object; it will return an object containing counts of everything that the input object listed

const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe'
];

const countOnly = function(allItems, itemsToCount) {
  // allItems: an array of strings that we need to look through
  // itemsToCount: an object specifying what to count
  let results = {};
  for (const item of allItems) {
    console.log(item);
    if (itemsToCount[item]) {
      console.log(item);
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  console.log(results);
  return results;
};

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);