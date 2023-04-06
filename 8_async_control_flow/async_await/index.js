const { deepEqual } = require('assert')

// The keywords async aways return a promise.
async function someAsyncFunction() {}
deepEqual(someAsyncFunction(), Promise.resolve())
