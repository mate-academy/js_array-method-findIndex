'use strict';

/**
 * Implement method FindIndex
 */
function applyCustomFindIndex() {
  [].__proto__.findIndex2 = function(callback) {
    if (this.length === 0) {
      return -1;
    }

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return i;
      }

      if (i === (this.length - 1) && !callback(this[i], i, this)) {
        return -1;
      }
    }
  };
}

module.exports = applyCustomFindIndex;
