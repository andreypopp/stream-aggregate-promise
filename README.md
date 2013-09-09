# stream-aggregate-promise

Aggregates a Node.js stream and calls a callback with the accumulated result of
first encountered error.

    var aggregate = require('stream-aggregate-promise')

    aggregate(stream)
      .then(function(result) { ... })
      .fail(function(err) { ... })

Binary streams (which emit buffer objects) are aggregated into a single buffer,
object streams -- into an array of emitted objects and streams of strings --
into a single concatenated string.
