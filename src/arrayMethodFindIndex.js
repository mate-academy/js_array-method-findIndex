'use strict';

/**
 * Implement method FindIndex
 */
function applyCustomFindIndex() {
  Array.prototype.findIndex2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return i;
      }
    }
    
    return -1;
  };
}

module.exports = applyCustomFindIndex;
