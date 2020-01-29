'use strict';

/**
 * Implement method FindIndex
 */
function applyCustomFindIndex() {
  [].__proto__.findIndex2 = function(callback) {
    for (let i = 0; i < this.length; i += 1) {
      const isTestPassed = callback(this[i], i, this);

      if (isTestPassed) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomFindIndex;
