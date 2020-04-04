'use strict';

/**
 * Implement method FindIndex
 */
function applyCustomFindIndex() {
  [].__proto__.findIndex2 = function(callback) {
    let index = -1;

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        index = i;

        return index;
      };
    }

    return index;
  };
}

module.exports = applyCustomFindIndex;
