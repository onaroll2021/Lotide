const letterPositions = function(sentence) {
  let results = {};
  // logic to update results here
  // define object stucture to return
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) !== " " && results[sentence.charAt(i)]) {
      results[sentence.charAt(i)].push(i)
    }
    else if (sentence.charAt(i) !== " ") {
      results[sentence.charAt(i)] = [];
      results[sentence.charAt(i)].push(i);
    }
  }
  return results;
};
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
assertArraysEqual(letterPositions("hello").e, [1]);
console.log(letterPositions("lighthouse in the house"));