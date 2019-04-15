'use strict';

/**
 * Implement method FindIndex
 */
function applyCustomFindIndex() {
  [].__proto__.findIndex2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
      let element = this[i];
      if (callback(element, i, this)) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomFindIndex;
