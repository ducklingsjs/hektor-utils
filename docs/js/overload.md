# Overload

Define multiple functions with different argument types

## Example

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

## Options

* typeMap
  * object where
    * keys are argument types (comma separated)
    * values are functions that will be called if the argument types match
* matchLength
  * if true, function will match only if number of used arguments matches number of defined arguments in typeMap
* scope
  * scope that will be used when called the overloaded function