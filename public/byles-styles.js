"use strict";

var one = 1;
var two = 2;
var arr = [1, 2, 3, 4, 5];

var add = function add(a, b) {
  return a + b;
};

var doubleValues = function doubleValues(arr) {
  return arr.map(function (v) {
    return v * 2;
  });
};

console.log(add(one, two), doubleValues(arr));

//# sourceMappingURL=byles-styles.js.map