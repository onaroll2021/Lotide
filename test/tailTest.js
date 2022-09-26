// const assertEqual = require('../assertEqual').assertEqual
// const tail = require('../tail').tail
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const tail = require('../tail').tail;
const assert = require('chai').assert;
const result = tail(["Hello", "Lighthouse", "Labs"]);
describe('#tail', () => {
  it(" should be the same", () => {
    assert.strictEqual(result.length, 2)
  });
  it(" should be the same", () => {
    assert.strictEqual(result[0], "Lighthouse")
  });
  it(" should be the same", () => {
    assert.strictEqual(result[1], "Labs")
  });
}
)

