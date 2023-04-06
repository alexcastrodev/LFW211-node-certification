const { promisify } = require('util')

// Callback example
async function handleDoSomehingAsync(err, result) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('result')
            resolve(result)
        }, 10)
    })
}

function doSomething() {
    handleDoSomehingAsync((err, result) => {cb(err, result)})
}

doSomething()

// Promises example

const doSomething2 = promisify(handleDoSomehingAsync)

function myAsyncOperation () {
  return doSomething2()
}

const promise = myAsyncOperation()
promise
  .then((value) => { console.log(value) })
  .catch((err) => { console.error(err) })