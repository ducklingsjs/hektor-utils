// var overload = require('hektor-utils/js/overload');
var overload = require('../js/overload');

var testFn = overload({
  'array, number, number': function(arr, num1, num2) {
    return arr.length + num1 + num2;
  },
  'number, number, number': function(num1, num2, num3) {
    return num1 + num2 + num3;
  },
  'date, number, number': function(date, num1, num2) {
    return date.getTime() + num1 + num2;
  },
  '*, number, number': function(whatever, num1, num2) {
    return num1 + num2;
  }
});

console.log(testFn([1, 2, 34, 5], 3, 2));
console.log(testFn(1, 3, 2));
console.log(testFn(new Date(12345), 3, 2));
console.log(testFn('foo', 3, 2));
console.log(testFn(1, 'bar', 3));
