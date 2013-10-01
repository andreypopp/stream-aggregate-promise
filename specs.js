var assert = require('assert'),
    through = require('through'),
    aggregate = require('./index');

describe('stream-aggregate-promise', function() {

  it('aggregates object stream', function(done) {
    var stream = through();

    aggregate(stream)
      .then(function(result) {
        assert.ok(Array.isArray(result));
        assert.deepEqual(result, [1, 2]);
      })
      .fail(assert.notOk)
      .fin(done);

    stream.write(1);
    stream.write(2);
    stream.end();
  });

  it('aggregates stream of string data', function(done) {
    var stream = through();

    aggregate(stream)
      .then(assert.deepEqual.bind(null, 'xy'))
      .fail(assert.notOk)
      .fin(done);

    stream.write('x');
    stream.write('y');
    stream.end();
  });

  it('aggregates binary stream', function(done) {
    var stream = through();
    aggregate(stream).then(function(result) {
      assert.deepEqual(result.toString(), 'xy');
    }).fail(assert.notOk).fin(done);

    stream.write(new Buffer('x'));
    stream.write(new Buffer('y'));
    stream.end();
  });

  it('returns an error on stream error', function(done) {
    var stream = through();
    aggregate(stream)
      .then(assert.notOk)
      .fail(assert.ok)
      .fin(done);

    stream.emit('error');
    stream.end();
  });

});
