'use strict';

/**
 * Implement method FindIndex
 */
function applyCustomFindIndex() {
  [].__proto__.findIndex2 = function(callback) {
    // write code here
    let result = -1;

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this) === true) {
        result = i;
        return result;
      }
    };
    return result;
  };
}

module.exports = applyCustomFindIndex;
