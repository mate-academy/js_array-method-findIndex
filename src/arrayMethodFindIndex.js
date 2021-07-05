'use strict';

/**
 * Implement method FindIndex
 */
function applyCustomFindIndex() {
  [].__proto__.findIndex2 = function(callback) {
    const arr = this;
    let counter = 0;

    for (const item of arr) {
      if (callback(item, counter, arr)) {
        return counter;
      }
      counter++;
    };

    return -1;
  };
}

module.exports = applyCustomFindIndex;
