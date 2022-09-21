//TEST ASSERTION FUNCTIONS
const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length === arrayTwo.length) {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};
const assertArraysEqual = function(testOne, testTwo) {
  if (eqArrays(testOne, testTwo) === true) {
    console.log(`👏 Yeah! Two Arrays are exactly the same!`);
  } else {
    console.log(`🥴 Two arrays are not the same!`);
  }
};
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);

//ACTUAL FUNCTION
const middle = function(testArray) {
  let middleArray = [];
  if (testArray.length <= 2) {
    return middleArray;
  }
  if (testArray.length > 2) {
    if (testArray.length % 2 === 0) {
      middleArray.push(testArray[testArray.length / 2 - 1]);
      middleArray.push(testArray[testArray.length / 2]);
      return middleArray
    } else {
      middleArray.push(testArray[(testArray.length - 1) / 2]);
      return middleArray
    }
  }
};

//TEST CODE
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5]));// => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]