'use strict';

/**
 * Implement method FindIndex
 */
function applyCustomFindIndex() {
  [].__proto__.findIndex2 = function(callback) {
    // write code here
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this) === true) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomFindIndex;
