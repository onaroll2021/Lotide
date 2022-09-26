const middle = require('../middle').middle
const assert = require('chai').assert

//TEST CODE
// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5]));// => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

describe("#MiddleTest", () => {
  it('should be passed if occrect', () => {
    assert.deepEqual(middle([1]), [])
  });
  it('should be passed if occrect', () => {
    assert.deepEqual(middle([1, 2]), [])
  });
  it('should be passed if occrect', () => {
    assert.deepEqual(middle([1, 2, 3]), [2])
  });
  it('should be passed if occrect', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])
  });
  it('should be passed if occrect', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3])
  });
  it('should be passed if occrect', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  });
})