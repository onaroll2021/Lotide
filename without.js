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
const assertArraysEqual = function(testLogic) {
  if (testLogic === true) {
    console.log(`👏 Yeah! Two Arrays are exactly the same!`);
  } else {
    console.log(`🥴 Two arrays are not the same!`);
  }
};
const without = function(toBeModified, element) {
  let modifiedArray = [];
  for (let i = 0; i < toBeModified.length; i++) {
    // if (element.includes(toBeModified[i])) {
    //   let modifiedArray = toBeModified.slice(i, 1);
    //   console.log("modifiedArray is", modifiedArray);
    //   return modifiedArray;
    // }
    if (!element.includes(toBeModified[i])) modifiedArray.push(toBeModified[i]);
  }

  console.log(modifiedArray);
};
// assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));
// assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]));
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]));
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]));
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse", 'world']); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log("words is", words)
assertArraysEqual(eqArrays(words, ["hello", "world", "lighthouse"]), true);