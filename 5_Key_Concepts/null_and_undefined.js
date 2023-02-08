const { equal } = require('assert')

let anyVariable

// The null primitive is typically used to describe the absence of an object, 
// whereas undefined is the absence of a defined value. 
// Any variable initialized without a value will be undefined. 
equal(anyVariable, undefined)


// Any expression that attempts access of a non-existent property on an object will result in undefined. 
let expressionWhatever = {}
equal(expressionWhatever.dude, undefined)

// A function without a return statement will return undefined.
function whateverFunction(x, y) {
    x + y
}
equal(whateverFunction(1,2), undefined)
