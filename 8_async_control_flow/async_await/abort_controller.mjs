import { deepEqual } from 'assert'

// Set the timeout
let index = 0
const timeout = setTimeout(() => {
    index = 1
}, 1000)

// Set the immediate
// This will run before the timeout
setImmediate(() => {
    console.log('Abort the timeout')
    clearTimeout(timeout)
})

// Schedule a timeout for checking the index
setTimeout(() => {
    deepEqual(index, 0, 'The timeout should not have run')
}, 1000)

console.log(await timeout)