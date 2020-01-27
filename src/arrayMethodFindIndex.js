'use strict';

/**
 * Implement method FindIndex
 */
function applyCustomFindIndex() {
  [].__proto__.findIndex2 = function(callback) {
    if (!arguments) {
      return -1;
    }

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomFindIndex;
