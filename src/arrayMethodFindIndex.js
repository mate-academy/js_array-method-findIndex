'use strict';

/**
 * Implement method FindIndex
 */
function applyCustomFindIndex() {
  [].__proto__.findIndex2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
      const item = this[i];
      const index = i;
      const arr = this;
      if (callback(item, index, arr)) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomFindIndex;
