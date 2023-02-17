const { throws, deepStrictEqual, ok, notEqual } = require('assert')

const letterA = Symbol('a')

let letterAclone = letterA

deepStrictEqual(letterA, letterAclone)

// Now, its not the same reference 
letterAclone = Symbol('b')
throws(() => deepStrictEqual(letterA, letterAclone))

const numb1 = Symbol('one')
const numb2 = Symbol('one')

throws(() => deepStrictEqual(numb1, numb2))

const numb3 = Symbol.for('onne')
const numb4 = Symbol.for('onne')

deepStrictEqual(numb3, numb4)

/**
 * you can check if two Symbols in JavaScript are the same 
 * reference in memory using the Object.is() method. 
 * The Object.is() method is used to compare if two values are the same, 
 * and it returns a boolean value indicating whether the two values are the same or not.
 */
ok(Object.is(numb3, numb4))


// Same reference
const letterA2 = Symbol.for('a')
let letterA2clone = letterA2
deepStrictEqual(letterA2, letterA2clone)

// Is not equal anymore
letterA2clone = Symbol.for('b')
throws(() => deepStrictEqual(letterA2, letterA2clone))

/**
 * Example about symbols in object
 */
const queue = {
    [Symbol('kMessages')]: [],
    [Symbol('kEvents')]: [],
}

notEqual(queue[Symbol('kMessages')], [])


// Example working
const messages = Symbol('kMessages')
const events = Symbol('kEvents')

const queue2 = {
    [messages]: [],
    [events]: [],
}

deepStrictEqual(queue2[messages], [])