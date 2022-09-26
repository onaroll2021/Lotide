// const head = require('../head').head
// const assertEqual = require('../assertEqual').assertEqual

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), undefined);
// assertEqual(head([2]), 2);
// assertEqual(head(0), undefined);
// assertEqual(head("0"), undefined);
const assert = require('chai').assert;
const head = require('../head').head;

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});