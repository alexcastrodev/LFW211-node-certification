import { setTimeout } from 'timers/promises'

// Set the timeout
const timeout = setTimeout(1000, 'will be logged anyway')
const controller = new AbortController()
const { signal } = controller
const timeout2 = setTimeout(1000, 'will NOT be logged anyway', { signal })
// Set the immediate
// This will run before the timeout

setImmediate(() => {
    console.log('Abort the timeout')
    controller.abort()
})

try {
    console.log(await timeout)
    console.log(await timeout2)
} catch (err) {
    // ignore abort errors:
    if (err.code !== 'ABORT_ERR') {
        console.log('error')
    }
}
  
  