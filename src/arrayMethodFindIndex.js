'use strict';

/**
 * Implement method FindIndex
 */
function applyCustomFindIndex() {
  [].__proto__.findIndex2 = function(callback) {
    let result = -1;

    for (let i = 0; i < this.length; i += 1) {
      if (callback(this[i], i, this)) {
        result = i;

        return result;
      }
    }

    return result;
  };
}

module.exports = applyCustomFindIndex;
