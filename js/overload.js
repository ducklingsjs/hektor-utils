module.exports = function(typeMap, matchLength, scope) {
  function getTypes(args) {
    return Array.prototype.map.call(args, function(arg) {
      if (arg instanceof Array) {
        return 'array';
      } else if (arg instanceof Date) {
        return 'date';
      } else {
        return typeof arg;
      }
    });
  }

  function getMatch(types) {
    var defs = Object.keys(typeMap);
    for (var i = 0; i < defs.length; i++) {
      var def = defs[i];
      var defFrags = def.toLowerCase().split(/,\s*/);
      if (matches(defFrags, types)) {
        return def;
      }
    }
    return null;
  }

  function matches(def, types) {
    if (matchLength && def.length != types.length) {
      return false;
    }
    for (var i = 0; i < def.length; i++) {
      if (def[i] !== types[i] && def[i] !== '*') {
        return false;
      }
    }
    return true;
  }

  return function() {
    var types = getTypes(arguments);
    var match = getMatch(types);
    if (match) {
      console.log(match);
      return typeMap[match].apply(scope, arguments);
    } else {
      throw new Error('No matching function');
    }
  }

  // TODO: regex matching
  // TODO: Abillity to override the getTypes function
  // TODO: default function - has types and defaults defined - for every argument that doesn't match, it's replaced with the default value
};
