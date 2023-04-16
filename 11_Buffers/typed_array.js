const {deepEqual} = require('assert')
// int8_t 
// 8-bit two's complement signed integer
let data = new Int8Array(2)
data[0] = -128
data[1] = 127
deepEqual(data[0], -128)
deepEqual(data[1], 127)

// uint8_t
// 8-bit unsigned integer
data = new Uint8Array(2)
data[0] = 0
data[1] = 255
deepEqual(data[0], 0)
deepEqual(data[1], 255)

// uint8_t
// 8-bit unsigned integer
data = new Uint8ClampedArray(2)
data[0] = 0
data[1] = 255
deepEqual(data[0], 0)
deepEqual(data[1], 255)

// A Uint8ClampedArray is similar to Uint8Array, 
// but it has a different behavior when values are out of range. 
// Instead of wrapping or truncating the value, it clamps it to the range 0 to 255. 
// This means that if you set a value of -1 or 300, it will be clamped to 0 or 255, respectively.
const data1 = new Uint8Array(1)
data1[0] = 256
const data2 = new Uint8ClampedArray(1)
data2[0] = 256
deepEqual(data1[0], 0)
deepEqual(data2[0], 255)

// int16_t
// 16-bit two's complement signed integer
data = new Int16Array(2)
data[0] = -32768
data[1] = 32767
deepEqual(data[0], -32768)
deepEqual(data[1], 32767)

// uint16_t
// 16-bit unsigned integer
data = new Uint16Array(2)
data[0] = 0
data[1] = 65535
deepEqual(data[0], 0)
deepEqual(data[1], 65535)

// int32_t
// 32-bit two's complement signed integer

data = new Int32Array(2)
data[0] = -2147483648
data[1] = 2147483647
deepEqual(data[0], -2147483648)
deepEqual(data[1], 2147483647)

// uint32_t
// 32-bit unsigned integer
data = new Uint32Array(2)
data[0] = 0
data[1] = 4294967295
deepEqual(data[0], 0)
deepEqual(data[1], 4294967295)

// float
// 32-bit IEEE 754 floating point
data = new Float32Array(2)
data[0] = 0
data[1] = 1.7976931348623157e+308
deepEqual(data[0], 0)
deepEqual(data[1], 1.7976931348623157e+308)

// double
// 64-bit IEEE 754 floating point
data = new Float64Array(2)
data[0] = 0
data[1] = 1.7976931348623157e+308
deepEqual(data[0], 0)
deepEqual(data[1], 1.7976931348623157e+308)

// BigInt64Array
// 64-bit two's complement signed integer
data = new BigInt64Array(2)
data[0] = -9223372036854775808n
data[1] = 9223372036854775807n
deepEqual(data[0], -9223372036854775808n)
deepEqual(data[1], 9223372036854775807n)

// BigUint64Array
// 64-bit unsigned integer
data = new BigUint64Array(2)
data[0] = 0n
data[1] = 18446744073709551615n
deepEqual(data[0], 0n)
deepEqual(data[1], 18446744073709551615n)

// ArrayBuffer
// A buffer of bytes, used to store data for typed arrays.
// ArrayBuffer is a low-level interface for handling raw binary data.
// It is used by typed arrays and data views to represent binary data in memory.
// It cannot be read or written directly, but can be passed to a typed array or data view object to interpret the raw data as needed.

// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8)
// Create a typed array with a view on the same memory as the buffer
const data = new Int32Array(buffer)
data[0] = 42
data[1] = 33
deepEqual(data[0], 42)
deepEqual(data[1], 33)

// DataView
// A low-level interface for reading and writing
// multiple number types in an ArrayBuffer regardless of the platform's endianness.

// Create an ArrayBuffer with a size in bytes
const buffer2 = new ArrayBuffer(8)
// Create a data view with a view on the same memory as the buffer
const data = new DataView(buffer2)
data.setInt32(0, 42)
data.setInt32(4, 33)
deepEqual(data.getInt32(0), 42)
deepEqual(data.getInt32(4), 33)

// TypedArray
// A typed array is a one-dimensional array-like object that stores a sequence of elements of a specific type.
// The type is specified by the constructor used to create the typed array.
// The typed array is created with a length, which is the number of elements it will store.
// The length is specified when the typed array is created and cannot be changed.
// The elements of a typed array are initialized to 0 when the typed array is created.
// Typed arrays are similar to arrays, but the types of the elements are fixed.
// Once created, a typed array's type cannot be changed.
// The length of a typed array cannot be changed.
// Typed arrays are similar to arrays, but the types of the elements are fixed.
// Once created, a typed array's type cannot be changed.
// The length of a typed array cannot be changed.

// Create a typed array with a size in bytes
const data = new Int32Array(2)
data[0] = 42
data[1] = 33
deepEqual(data[0], 42)
deepEqual(data[1], 33)

// TypedArray.from()
// Creates a new typed array from an array-like or iterable object.
// The type of the typed array is determined by the type of the elements in the array-like or iterable object.
// If the type cannot be determined, an error is thrown.

// Create a typed array from an array
const data = Int32Array.from([42, 33])
deepEqual(data[0], 42)
deepEqual(data[1], 33)

// Create a typed array from a set
const data = Int32Array.from(new Set([42, 33]))
deepEqual(data[0], 42)
deepEqual(data[1], 33)

// TypedArray.of()
// Creates a new typed array with a variable number of arguments, regardless of number or type of the arguments.
// The type of the typed array is determined by the type of the arguments.
// If the type cannot be determined, an error is thrown.

// Create a typed array from arguments
const data = Int32Array.of(42, 33)
deepEqual(data[0], 42)
deepEqual(data[1], 33)

// TypedArray.prototype.buffer
// The ArrayBuffer referenced by the typed array at construction time.
// The ArrayBuffer is fixed at construction time and cannot be changed.

// Create a typed array with a size in bytes
const data = new Int32Array(2)
data[0] = 42
data[1] = 33
deepEqual(data.buffer.byteLength, 8)

// TypedArray.prototype.byteLength

// The length in bytes of the typed array.
// This is fixed at construction time and cannot be changed.

// Create a typed array with a size in bytes
const data = new Int32Array(2)
data[0] = 42
data[1] = 33
deepEqual(data.byteLength, 8)

// TypedArray.prototype.byteOffset

// The offset in bytes of the typed array from the start of its ArrayBuffer.
// This is fixed at construction time and cannot be changed.

// Create a typed array with a size in bytes
const data = new Int32Array(2)
data[0] = 42
data[1] = 33
deepEqual(data.byteOffset, 0)

// TypedArray.prototype.length

// The length of the typed array.
// This is fixed at construction time and cannot be changed.

// Create a typed array with a size in bytes
const data = new Int32Array(2)
data[0] = 42
data[1] = 33
deepEqual(data.length, 2)

// TypedArray.prototype[Symbol.toStringTag]

// The initial value of the @@toStringTag property is the String value "TypedArray".
// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.

// Create a typed array with a size in bytes
const data = new Int32Array(2)
data[0] = 42
data[1] = 33
deepEqual(data[Symbol.toStringTag], 'Int32Array')

// TypedArray.prototype.copyWithin()

// Copies a sequence of array elements within the typed array.
// The copy is performed in-place, so existing elements in the typed array are overwritten.

// Create a typed array with a size in bytes
const data = new Int32Array(2)
data[0] = 42
data[1] = 33

// Copy the first element to the second element
data.copyWithin(1, 0)

deepEqual(data[0], 42)
deepEqual(data[1], 42)

// TypedArray.prototype.entries()

// Returns a new Array Iterator object that contains the key/value pairs for each index in the typed array.

// Create a typed array with a size in bytes
const data = new Int32Array(2)
data[0] = 42
data[1] = 33

// Create an iterator for the typed array
const iterator = data.entries()

// Get the first entry
let entry = iterator.next()
deepEqual(entry.value[0], 0)
deepEqual(entry.value[1], 42)

// Get the second entry
entry = iterator.next()
deepEqual(entry.value[0], 1)
deepEqual(entry.value[1], 33)

// TypedArray.prototype.every()

// Tests whether all elements in the typed array pass the test implemented by the provided function.
// It returns a Boolean value.

// Create a typed array with a size in bytes
const data = new Int32Array(2)
data[0] = 42
data[1] = 33

// Test if all elements are greater than 10
const result = data.every((value) => value > 10)
deepEqual(result, true)

// TypedArray.prototype.fill()

// Fills all the elements of a typed array from a start index to an end index with a static value.
// The end index is not included.

// Create a typed array with a size in bytes
const data = new Int32Array(2)
data[0] = 42
data[1] = 33

// Fill the typed array with 0
data.fill(0)

deepEqual(data[0], 0)
deepEqual(data[1], 0)
