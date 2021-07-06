'use strict';

/**
 * Implement method FindIndex
 */
function applyCustomFindIndex() {
  [].__proto__.findIndex2 = function(callback) {
    const items = this;

    for (let i = 0; i < items.length; i++) {
      if (callback(items[i], i, items)) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomFindIndex;
