const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length === arrayTwo.length) {
    for(i = 0; i < arrayOne.length; i++) {
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
    console.log(`👏 Yeah! Two Arrays are exactly the same!`)
  } else {
    console.log(`🥴 Two arrays are not the same!`)
  }
}
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]));
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]));
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]));