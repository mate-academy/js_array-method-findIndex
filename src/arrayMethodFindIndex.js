'use strict';

/**
 * Implement method FindIndex
 */
function applyCustomFindIndex() {
  [].__proto__.findIndex2 = function(callback) {
    let foundIndex = 0;

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        foundIndex = i;

        return foundIndex;
      }
    }

    return -1;
  };
}

module.exports = applyCustomFindIndex;
