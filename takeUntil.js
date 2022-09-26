// take in two parameters
// the array to work with
// the callback function
// callback should only be provided one value, which is the item in the array

const { exit } = require("process");

// implement takeUntil which will keep collecting item until the callback provide a truth value
const takeUntil = function(array, callback) {
  // ...
  let resultTest = [];
  for (const arr of array) {
    if (!callback(arr)) {
      resultTest.push(arr)
    } else {
      break;
    }
    callback(arr) && resultTest.push(arr) 
  }
  return resultTest;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);