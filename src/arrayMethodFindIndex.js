'use strict';

/**
 * Implement method FindIndex
 */
function applyCustomFindIndex() {
  [].__proto__.findIndex2 = function(callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        result.push(i);
      }
    }

    return result.length > 0 ? result[0] : -1;
  };
}

module.exports = applyCustomFindIndex;
