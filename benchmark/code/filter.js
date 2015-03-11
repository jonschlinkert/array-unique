'use strict';

module.exports = function (arr) {
  var stack = [];
  return arr.filter(function (ele) {
    if (stack.indexOf(ele) > -1) {
      return false;
    }
    stack.push(ele);
    return true;
  });
};
