var q = require('kew'),
    aggregate = require('stream-aggregate');

module.exports = function(stream) {
  var promise = q.defer();
  aggregate(stream, promise.makeNodeResolver());
  return promise;
}
