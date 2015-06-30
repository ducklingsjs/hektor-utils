var _ = require('lodash');

module.exports = {
  extend: function(obj) {
    return _.extend(Object.create({
      contains: function(value) {
        return _.values(this).indexOf(value) !== -1;
      },
      values: function() {
        return _.values(this);
      },
      keys: function() {
        return _.keys(this);
      }
    }), obj);
  }
};