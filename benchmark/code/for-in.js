'use strict';

module.exports = function(arr) {
  var len = arr.length;
  var res = [];
  var o = {};
  var i;

  for (i = 0; i < len; i += 1) {
    o[arr[i]] = arr[i];
  }

  for (i in o) {
    res.push(o[i]);
  }
  return res;
};
