import assert from "assert";
import { throws } from "assert";

const MUST_BE_A_NUMBER = 'ERR_MUST_BE_A_NUMBER'

const doTask = (number) => {
    if(typeof number !== 'number') {
        const err = new Error('number must be a number')
        err.code = MUST_BE_A_NUMBER

        throw err
    }
}

throws(() => {
    doTask('string')
}, 'asd')

throws(
() => {
    doTask('string')
},
(err) => {
    assert(err instanceof Error);
    assert.strictEqual(err.code, MUST_BE_A_NUMBER);
    return true;
},
'unexpected error'
);


const doTask_NotRecommended = (number) => {
    if(typeof number !== 'number') {
        throw 'number must be a number'
    }
    if(number < 0) {
        throw 'number must be a positive number'
    }

    return number / 2
}

throws(() => {
    doTask_NotRecommended(-1)
})