# Promising

Transform node style asyncronous functions to functions that use promises.

## Example

    var fs = require('fs');
    var P = require('hektor-utils/js/promising');

    P(fs.readFile.bind('fs'), 'test.txt').then(function(data) {
      // Do stuff
    });

If lodash is used:

    var _ = require('lodash');
    var fs = _.bindAll(require('fs'));
    var P = require('hektor-utils/js/promising');

    P(fs.readFile, 'test.txt').then(function(data) {
      // Do stuff
    });

## ES7 Example
Very useful when using the [experimental](https://babeljs.io/docs/usage/experimental/) ES7 [async/await](https://github.com/lukehoban/ecmascript-asyncawait) and [function bind](https://github.com/zenparsing/es-function-bind) syntax:

    var fs = require('fs');
    var P = require('hektor-utils/js/promising');

    var data = await P(::fs.readFile, 'test.txt');
    // Do stuff