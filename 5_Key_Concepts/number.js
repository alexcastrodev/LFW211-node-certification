const { equal } = require('assert')

// Definition of largest integer that can be precisely stored is 253, much less then your 263-1.
// https://en.wikipedia.org/wiki/Double-precision_floating-point_format
const minNumber = -9223372036854776000 // 64bits min
const maxNumber = 9223372036854775807 // 64bits max


// Double precision floats => Min Value
const numberA = Number(-9223372036854775808)
const numberB = Number(-9223372036854775900)
equal(numberA, minNumber)
equal(numberB, minNumber)

// Double precision floats => Max Value
const numberC = Number(9223372036854775907)
const numberD = Number(9223372036854775920)

equal(numberC, maxNumber)
equal(numberD, maxNumber)

/**
 * The value of the largest integer n such that n and n + 1 are both exactly representable as
 * a Number value.
 * The value of Number.MAX_SAFE_INTEGER is 9007199254740991 2^53 − 1.
*/
const maxSafeNumber = 9007199254740991
equal(maxSafeNumber, Number.MAX_SAFE_INTEGER)

/**
 * The value of the smallest integer n such that n and n − 1 are both exactly representable as
 * a Number value.
 * The value of Number.MIN_SAFE_INTEGER is −9007199254740991 (−(2^53 − 1)).
*/
const minSafeNumber = -9007199254740991
equal(minSafeNumber, Number.MIN_SAFE_INTEGER)


// 1e-4
equal(1e-4, 0.0001)

