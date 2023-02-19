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

# Symbols

You can find some assertion in Symbols.js and understand 

# Functions

Functions are first class citizens in JavaScript. 
A function is an object, and therefore a value that can be used like any other value.

I Highlight 2 interest topic here

## Call method
Functions have a call method that can be used to set their this context

Examples in functions.js

## Bind method
Functions have a bind method that can be used to create a reference of function setting a context

Examples in functions.js


# Prototypal Inheritance (Functional)

There are many approaches and variations to creating a prototype chain in JavaScript but we will explore three common approaches: 

functional
constructor functions
class-syntax constructors

The functional approach to creating prototype chains is to use Object.create

Examples in: prototypal_inheritance_functional.js