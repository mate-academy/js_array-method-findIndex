'use strict';

/**
 * Implement method FindIndex
 */
function applyCustomFindIndex() {
  [].__proto__.findIndex2 = function(callback) {
    const result = [];
    let index = 0;

    for (const item of this) {
      if (callback(item, index, this)) {
        result.push(index);
      }
      index++;
    }

    return (result.length === 0) ? -1 : result[0];
  };
}

module.exports = applyCustomFindIndex;
