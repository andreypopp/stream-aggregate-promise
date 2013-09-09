# stream-aggregate

Aggregates a Node.js stream and calls a callback with the accumulated result of
first encountered error.

    var aggregate = require('stream-aggregate')

    aggregate(stream, function(err, result) {
      ...
    });

Binary streams (which emit buffer objects) are aggregated into a single buffer,
object streams -- into an array of emitted objects and streams of strings --
into a single concatenated string.

The main difference between this library and `concat-stream` is that
`stream-aggregate` calls callback with an error which is usually desired
behaviour.
