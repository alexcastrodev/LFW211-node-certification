// References: https://openjsf.org/blog/2022/04/29/using-abortsignal-in-node-js/

import { deepEqual } from 'assert';
import { setTimeout } from 'timers/promises'

const cancelTimeout = new AbortController()
const cancelTask = new AbortController()

// First version of abort
// //Figure out long time work
// function longFunctionRunning () {
//     const { signal } = cancelTask
    
//     // Check when reach here, if it already aborted....
//     if(signal.aborted === true) {
//         throw new Error('Canceled')
//     }

//     // Otherwise, if not aborted, i send the signal to cancel
//     // whenever it aborts.
//     return new Promise(async (resolve) => {
//         try {
//             const data = []
//             await setTimeout(4000, undefined, { signal })
//             resolve(data)
//         } catch {
//             console.log('Should take here!')
//         }
//     })
// }


// Self Abort
function longFunctionRunning (options = {}) {
    const { signal } = options
    
    // Check when reach here, if it already aborted....
    if(signal.aborted === true) {
        throw new Error('Canceled')
    }

    const taskDone = new AbortController()

    signal.addEventListener('abort', () => {
        console.log('Should take here!')
    }, {
        once: true,
        signal: taskDone.signal
    })

    // Otherwise, if not aborted, i send the signal to cancel
    // whenever it aborts.
    return new Promise(async (resolve) => {
        try {
            const data = []
            await setTimeout(4000, undefined, { signal })
            resolve(data)
        } finally {
            taskDone.abort()
        }
    })
}

async function timeout() {
    try {
        // Resolve the timeout
        const result = await setTimeout(1000, 'timeout ok', { signal: cancelTimeout.signal });
        // Here a must cancel the task
        cancelTask.abort()
        return result
    } catch {
        // somee ignore rejection
    }
}

async function task() {
    try {
        // This should be canceled in 1 second
        const result = await longFunctionRunning({ signal: cancelTask.signal })
        console.log('result of long task:', result) // this should not print the result
        return result
    } finally {
        cancelTimeout.abort()
    }
}

cancelTask.signal.addEventListener('abort', () => {
    console.log('Long task was aborted')
})

;(async () => {
    console.time('running')
    const solution = await Promise.race([ timeout(), task()])
    console.timeEnd('running') // Should take 1 sec to finish => running: 1.002s

    // Test
    deepEqual(solution, 'timeout ok')
})()


// ;(async () => {
//     // Test
//     const solution = await timeout()
//     deepEqual(solution, 'timeout ok')
// })()
