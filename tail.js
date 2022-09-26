let leo = [];
const assertEqual = require('./assertEqual').assertEqual

const tail = function(q) {
  for (let i = 1; i < q.length; i++) {
    leo.push(q[i]);
  }
  return leo;
};
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!


module.exports = {
  tail: tail
}