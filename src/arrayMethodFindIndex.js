'use strict';

/**
 * Implement method FindIndex
 */
function applyCustomFindIndex() {
  [].__proto__.findIndex2 = function(callback) {
    for (const [index] of this.entries()) {
      if (callback(this[index], index, this)) {
        return index;
      }
    }
    return -1;
  };
}

module.exports = applyCustomFindIndex;
