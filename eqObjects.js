// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// take in two objects and return true or false (based on perfect match)
const eqObjects = function(obj1, obj2) {
  // false if object contains different set of key length
  if(Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  // Loop through the object
  for (const key in obj1) {
    // false if object eky does not exist in the other object
    if (!obj2[key]) return false;

    // If the value is array, return false if arrays are not equal
    if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])) return false;
    } else if (obj1[key] !== obj2[key]) return false; // false if value is a primitive type and object 1 and 2 are not equal
  }

  // true if all test cases passed
  return true
}
// const eqObjects = function(object1, object2) {
//   if (Object.values(object1).length === Object.values(object2).length) {
//     for (let i = 0; i < Object.values(object1).length; i++) {
//       if (!Array.isArray(Object.values(object1)[i])) {
//         if (object1[Object.keys(object1)[i]] !== object2[Object.keys(object1)[i]]) {
//           return false;
//         }
//       } else {
//         if (object1[Object.keys(object1)[i]].length === object2[Object.keys(object1)[i]].length) {
//           for (let ii = 0; ii < object1[Object.keys(object1)[i]].length; ii++) {
//             if (object1[Object.keys(object1)[i]][ii] !== object2[Object.keys(object1)[i]][ii]) {
//               return false;
//             }
//           }
//         } else {
//           return false;
//         }
//       }
//     }
//     return true;
//   } else {
//     return false;
//   }
// };

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false