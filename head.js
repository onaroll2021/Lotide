// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👏 assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🙀 assertion Failed: ${actual} !== ${expected}`);
  }
};
const head = function(q) {
  return q[0];
};
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");