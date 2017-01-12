'use strict';

module.exports = function(arr) {
  return arr.filter(firstOccuring);
};

function firstOccuring(el, idx, arr) {
  return (idx === arr.indexOf(el));
}
