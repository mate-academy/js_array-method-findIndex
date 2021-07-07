'use strict';

/**
 * Implement method FindIndex
 */
function applyCustomFindIndex() {
  [].__proto__.findIndex2 = function(callback) {
    if (this.length === 0) {
      return -1;
    }
    let i = 0;
    while (true) {
      if (callback(this[i], i, this)) {
        return i;
      }
      i++;
      if (i >= this.length) {
        break;
      }
    }
    return -1;
  };
}

module.exports = applyCustomFindIndex;
