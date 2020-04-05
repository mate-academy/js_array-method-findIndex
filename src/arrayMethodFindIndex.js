'use strict';

/**
 * Implement method FindIndex
 */
function applyCustomFindIndex() {
  [].__proto__.findIndex2 = function(callback) {
    // write code here
    const arr = this;

    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr) === true) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomFindIndex;
