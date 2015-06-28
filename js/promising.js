module.exports = function(fn) {
  var args = Array.prototype.slice(arguments, 1);
  return new Promise(function(resolve, reject) {
    args.push(function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
    fn.apply(fn, args);
  });
};
