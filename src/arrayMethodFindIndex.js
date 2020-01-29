'use strict';

/**
 * Implement method FindIndex
 */
function applyCustomFindIndex() {
  [].__proto__.findIndex2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
      const isCallback = callback(this[i], i, this);

      if (isCallback) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomFindIndex;
