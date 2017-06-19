'use strict';

module.exports = function(arr) {
  var i = arr.length;

  var hash = Object.create(null);
  var res = [];

  while (i--) {
    if (!(arr[i] in hash)) {
      hash[arr[i]] = true;
      res.push(arr[i]);
    }
  }
  return res;
};
