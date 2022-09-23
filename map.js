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

const words = ["ground", "control", "to", "major", "tom"];
console.log(results1 = words.map(word => word[0]));
console.log(results1 = words.map(word => word[1]));
console.log(results1 = words.map(word => word[2]));