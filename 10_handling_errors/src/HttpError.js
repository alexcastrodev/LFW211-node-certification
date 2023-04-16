const HttpNotAuthorizedError = require('./CustomError');
const assert = require('assert');
function doTask() {
    throw new HttpNotAuthorizedError();
}

assert.throws(
() => {
    doTask('string')
},
(err) => {
    assert(err instanceof HttpNotAuthorizedError);
    return true;
},
'unexpected error'
);
    