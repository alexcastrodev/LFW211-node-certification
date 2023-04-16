# Introduction

Error handling is a broad and opinionated subject. 

We will focus solely on creating, managing and propagating errors in sync, promise-based and async/await and callback based scenarios.

- Understand the general purpose of errors
- Get to grips with different types of errors
- Understand how to create an error
- Intercept and identify errors
- Explore error progation in various scenarious

# Error

The error constructor is a Native to Javascript

its possible to throw a string, with error, but its not ideal. The documentation highly recommend yo only throw object that derive from the native Error contructor either directly or via inheritance.

in ```error.mjs``` you can check the tests

There are 6 Native constructor for Native Javascript API:

# 20.5.5 Native Error Types Used in This Standard
A new instance of one of the NativeError objects below or of the AggregateError object is thrown when a runtime error is detected. All NativeError objects share the same structure, as described in 20.5.6.

# 20.5.5.1 EvalError
The EvalError constructor is %EvalError%.

This exception is not currently used within this specification. This object remains for compatibility with previous editions of this specification.


```bash
    node -p "new EvalError();"
```

# 20.5.5.2 RangeError
The RangeError constructor is %RangeError%.

Indicates a value that is not in the set or range of allowable values.

```bash
    node -p "new RangeError();"
```

# 20.5.5.3 ReferenceError
The ReferenceError constructor is %ReferenceError%.

Indicate that an invalid reference has been detected.

```bash
    node -p "new ReferenceError();"
```

# 20.5.5.4 SyntaxError
The SyntaxError constructor is %SyntaxError%.

Indicates that a parsing error has occurred.

```bash
    node -p "new SyntaxError();"
```

# 20.5.5.5 TypeError
The TypeError constructor is %TypeError%.

TypeError is used to indicate an unsuccessful operation when none of the other NativeError objects are an appropriate indication of the failure cause.

```bash
    node -p "new TypeError();"
```

# 20.5.5.6 URIError
The URIError constructor is %URIError%.

Indicates that one of the global URI handling functions was used in a way that is incompatible with its definition.

```bash
    node -p "new URIError();"
```

References: https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-nativeerror-constructors


# Custom Error

Example in ```HttpError.js```


# Try Catch

```javascript
try {
  try {
  const result = doTask(4)
  result()
  console.log('result', result)
} catch (err) {
  if (err.code === 'ERR_AMOUNT_MUST_BE_NUMBER') {
    console.error('wrong type')
  } else if (err.code === 'ERRO_AMOUNT_MUST_EXCEED_ZERO') {
    console.error('out of range')
  } else if (err.code === 'ERR_MUST_BE_EVEN') {
    console.error('cannot be odd')
  } else {
    console.error('Unknown error', err)
  }
}
}
```

# Rejections

```javascript
function doTask (amount) {
  return new Promise((resolve, reject) => {
    if (typeof amount !== 'number') {
      reject(new TypeError('amount must be a number'))
      return
    }
    if (amount <= 0) {
      reject(new RangeError('amount must be greater than zero'))
      return
    }
    if (amount % 2) {
      reject(new OddError('amount'))
      return
    }
    resolve(amount/2)
  })
}

doTask(3)
```

# Async try Catch

Using an async function with a try/catch around an awaited promise is syntactic sugar. The catch block in the async run function is the equivalent of the catch method handler in the previous section. An async function always returns a promise that resolves to the returned value, unless a throw occurs in that async function, in which case the returned promise rejects. This means we can convert our doTask function from returning a promise where we explicitly call reject within a Promise tether function to simply throwing again.

Essentially we can convert doTask to its original synchronous form but prefix async to the function signature, like so:

async function doTask (amount) {
  if (typeof amount !== 'number') throw new TypeError('amount must be a number')
  if (amount <= 0) throw new RangeError('amount must be greater than zero')
  if (amount % 2) throw new OddError('amount')
  return amount/2
}

# Propagation

```javascript
function doTask (amount, cb) {
  if (typeof amount !== 'number') {
    cb(codify(
      new TypeError('amount must be a number'),
     'ERR_AMOUNT_MUST_BE_NUMBER'
    ))
    return
  }
  if (amount <= 0) {
    cb(codify(
      new RangeError('amount must be greater than zero'),
      'ERR_AMOUNT_MUST_EXCEED_ZERO'
    ))
    return
  }
  if (amount % 2) {
    cb(new OddError('amount'))
    return
  }
  cb(Error('some other error'))
  return
  cb(null, amount/2)
}
```

# Notes

If there is a chance that a function that is sinchronous may throw, use try/catch block

In promises, use Rejection

If you want to identify different Kind of error in a catch, Apply duck-typing to error checks