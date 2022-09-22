// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👏 assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🙀 assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(stringLine) {
  let newChr = {};
  for (const chr of stringLine) {
    if (newChr[chr] && chr !== " ") {
      newChr[chr] += 1;
    } 
    else if (chr !== " ") {
      newChr[chr] = 1;
    }
  }
  return newChr;
  console.log(newChr);
};

console.log(countLetters("lighthouse in the house"));