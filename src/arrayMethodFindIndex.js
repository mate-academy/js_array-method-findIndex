'use strict';

/**
 * Implement method FindIndex
 */
function applyCustomFindIndex() {
  [].__proto__.findIndex2 = function(callback) {
    const arr = this;
    for (let i = 0; i < arr.length; i++) {
      const item = this[i];
      if (callback(item, i, arr) === true) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomFindIndex;
