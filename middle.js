//TEST ASSERTION FUNCTIONS

//ACTUAL FUNCTION
const middle = function(testArray) {
  let middleArray = [];
  if (testArray.length <= 2) {
    return middleArray;
  }
  if (testArray.length > 2) {
    if (testArray.length % 2 === 0) {
      middleArray.push(testArray[testArray.length / 2 - 1]);
      middleArray.push(testArray[testArray.length / 2]);
      return middleArray
    } else {
      middleArray.push(testArray[(testArray.length - 1) / 2]);
      return middleArray
    }
  }
};

module.exports = {
  middle: middle
}

