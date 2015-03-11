'use strict';

module.exports = function(arr) {
  var len = arr.length;
  var res = [];

  while (len--) {
    var curr = arr[len];
    if (res.indexOf(curr) === -1) {
      res.push(curr);
    }
  }
  return res;
};
