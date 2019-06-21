'use strict';

/**
 * Implement method FindIndex
 */
function applyCustomFindIndex() {
  [].__proto__.findIndex2 = function(callback) {
    for (let index = 0; index < this.length; index++) {
      if (callback(this[index], index, this)) {
        return index;
      }
    }
    return -1;
  };
}

module.exports = applyCustomFindIndex;
