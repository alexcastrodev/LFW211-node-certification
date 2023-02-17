const { deepStrictEqual } = require('assert')

function printId() { return this.id }
deepStrictEqual(printId.call({ id: 10 }), 10)

const printId2 = printId.bind({ id: 10 })
deepStrictEqual(printId2(), 10)


// While normal functions have a prototype property, fat arrow functions do not
function normalFunction () { }
const fatArrowFunction = () => {}

deepStrictEqual(typeof normalFunction.prototype, 'object')
deepStrictEqual(typeof fatArrowFunction.prototype, 'undefined')