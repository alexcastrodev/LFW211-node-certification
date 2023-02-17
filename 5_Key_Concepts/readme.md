# Introduction

- Understand data types in JavaScript.
- Explain functions as first class citizens.
- Explain the role of closure scope in state management.
- Describe the prototypal nature of all JavaScript-based inheritance.

# Data Types

Javascript has 7 Primitive types

- Null: `null`
- Undefined: `undefined`

## Notes
OBS: the `null` primitive is used to describe absence of an object, and `undefined` is the absense of a defined value.
Any variable initialized without a value will be undefined:

Read this: ./null_and_undefined.js

- Number: `1, 1.5, -1e4, NaN`
- BigInt: `1n, 9007199254740993n`

## Notes

The Number type is double-precision floating-point format. 
It allows both integers and decimals but has an integer range of -253-1 to 253-1. The BigInt type has no upper/lower limit on integers.

## Extra
Number is an object that represents a number of any kind. 
All JavaScript numbers are 64-bit floating-point numbers

PS:

The term "safe" refers to the fact that any number greater than 
the one mentioned above cannot be assumed to be accurately and appropriately represented. 
This restriction is imposed by the doubleprecision 64-bit number format used by Javascript rather than Typescript.
It is essential to use the MAX SAFE INTEGER and MIN SAFE INTEGER because any integer 
higher than these two is not assured to be represented accurately and correctly.


Read `./number.js`

Sources: 

https://www.tutorialspoint.com/what-is-javascript-s-highest-integer-value-that-a-number-can-go-to-without-losing-precision

https://en.wikipedia.org/wiki/Double-precision_floating-point_format

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER

https://en.wikipedia.org/wiki/IEEE_754


## Extra
What does 1e-4 stand for?

1e-4 in decimal form is equal 0.0001

Source:

https://calculator.name/scientific-notation-to-decimal/1e-4



- String: `'str', "str",` `´str ${var}´`
- Boolean: `true, false`
- Symbol: `Symbol('description'), Symbol.for('namespace')`


# Extra
