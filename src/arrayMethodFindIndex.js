'use strict';

/**
 * Implement method FindIndex
 */
function applyCustomFindIndex() {
  [].__proto__.findIndex2 = function(callback) {
    const resultIndex = -1;
    const arr = this;
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      const index = i;

      if (callback(item, index, arr)) {
        return index;
      }
    }
    return resultIndex;
  };
}

module.exports = applyCustomFindIndex;
