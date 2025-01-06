const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  else if (!arr.length) {
    return arr;
  }
  let transformedArr = [...arr];
  let skipElement = false;
  for (let i = 0; i < transformedArr.length; i++) {
    let current = transformedArr[i];
    if (current === '--discard-next') {
      if (i + 1 < transformedArr.length) {
        transformedArr.splice(i, 2);
        i--;
      } else {
        transformedArr.splice(i, 1);
      }
      skipElement = true;
    } else if (current === '--discard-prev') {
      if (i - 1 >= 0 && skipElement === false) {
        transformedArr.splice(i - 1, 2);
        i--;
      } else {
        transformedArr.splice(i, 1);
        skipElement = false;
      }
    } else if (current === '--double-next') {
      if (i + 1 < transformedArr.length) {
        transformedArr.splice(i, 1, transformedArr[i + 1]);
      } else {
        transformedArr.splice(i, 1);
      }
    } else if (current === '--double-prev') {
      if (i - 1 >= 0 && skipElement === false) {
        transformedArr.splice(i, 1, transformedArr[i - 1]);
      } else {
        transformedArr.splice(i, 1);
        skipElement = false;
      }
    }
  }
  return transformedArr;
}

  module.exports = {
    transform
  };
