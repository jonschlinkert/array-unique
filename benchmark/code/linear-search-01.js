'use strict';

module.exports = function(arr) {
  var set = [];

  for (var i = 0, len = arr.length; i < len; i++) {
    var value = arr[i];
    for (var j = len; --j > i;) {
      if (value === arr[j]) {
        break;
      }
    }

    if (j == i) {
      set.push(value);
    }
  }
  return set;
};
