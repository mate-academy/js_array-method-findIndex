'use strict';

/**
 * Implement method FindIndex
 */
function applyCustomFindIndex() {
  [].__proto__.findIndex2 = function(callback) {
    let matchedIndex;

    for (let index = 0; index < this.length; index++) {
      if (callback(this[index], index, this)) {
        matchedIndex = index;

        return matchedIndex;
      }
    }

    return -1;
  };
}

module.exports = applyCustomFindIndex;
