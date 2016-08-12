'use strict';

module.exports = function(arr) {
  var len = arr.length;
  var res = [];

  for (var i = 0; i < len; i++) {
    var curr = arr[i];
    if (res.indexOf(curr) === -1) {
      res.push(curr);
    }
  }
  return res;
};
