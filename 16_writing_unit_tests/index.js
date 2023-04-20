const { notEqual, equal, strictEqual, notStrictEqual, deepEqual, notDeepEqual, ok, deepStrictEqual, notDeepStrictEqual, throws, rejects, doesNotReject, ifError, match, doesNotMatch, fail } = require("assert")

const valuea = 1
const valueb = 2
const valuec = 1
const valued = "1"

// the same as assert(val)
ok(valuea, "valuea is truthy")
// coercive equal, val1 == val2
equal(valuea, valuec, "valuea is equal to valuec")
// coercive unequal, val1 != val2
notEqual(valuea, valueb, "valuea is not equal to valueb")
// strict equal, val1 === val2
strictEqual(valuea, valuec, "valuea is strictly equal to valuec")
// strict unequal, val1 !== val2
notStrictEqual(valuea, valued, "valuea is not strictly equal to valued")


const obj1 = {
    name: "Alex"
}

const obj2 = {
    name: "Alex"
}

const obj3 = {
    name: "John"
}

// coercive equal for all values in an object
deepEqual(obj1, obj2, "obj1 is deeply equal to obj3")

// strict equal for all values in an object
notDeepEqual(obj1, obj3, "obj1 is not deeply equal to obj2")

// assert.deepStrictEqual(obj1, obj2) – strict equal for all values in an object
deepStrictEqual(obj1, obj2, "obj1 is deeply strictly equal to obj2")

// assert.notDeepStrictEqual(obj1, obj2) – strict unequal for all values in an object
notDeepStrictEqual(obj1, obj3, "obj1 is not deeply strictly equal to obj3")

// assert.throws(function) – assert that a function throws
throws(() => {
    throw new Error("error message")
}, 'error')

// assert.doesNotThrow(function) – assert that a function doesn't throw
const doesNotThrow = () => {
    return true
}
doesNotThrow(() => doesNotThrow(), 'error')

// assert.rejects(promise|async function) – assert promise or returned promise rejects
;(async () => {
    const promise = async () => {
        throw new TypeError('Wrong value');
    }
    await rejects(
        promise,
        {
          name: 'TypeError',
          message: 'Wrong value',
        },
    );
})


// assert.doesNotReject(promise|async function) – assert promise or returned promise resolves
;(async () => {
    const promise = async () => {
        return true
    }
    await doesNotReject(
        promise,
        {
          name: 'TypeError',
          message: 'Wrong value',
        },
    );
})

// assert.ifError(err) – check that an error object is falsy
const valueNull = null
const valueNil = undefined
ifError(valueNull)
ifError(valueNil)

// assert.match(string, regex) – test a string against a regular expression
match("I will fail", /fail/)

// assert.doesNotMatch(string, regex) – test that a string fails a regular expression
doesNotMatch("I will fail", /pass/)
