import { fork } from 'child_process'
import { createReadStream } from 'fs'
import { join } from 'path'
import { Writable } from 'stream'
import { pipeline } from 'stream/promises'

const process_count = 10
const file = 'data.csv'
const backgroundTaskFile = 'backgroundTask.mjs'


const processes = new Map()
for(let index = 0; index < process_count; index++) {
    const child = fork(backgroundTaskFile, [file])

    child.on('exit', () => {
        processes.delete(child.pid)
        console.log(`Process ${child.pid} finished`)
    })
    processes.set(child.pid, child)
}

function roundRobin(array, index = 0) {
    return function() {
            if (index >= array.length) {
                index = 0
            }
            return array[index++]
    }
}

const getProcess = roundRobin([...processes.values()])

function onChildMessage(msg) {
    console.log(`Message from child ${this.pid}: ${msg}`)
}

;(async function() {
    await pipeline(
        createReadStream(file),
        async function* (source) {
            for await (const chunk of source) {
                const child = getProcess()
                child.on('message', onChildMessage)
                child.send(chunk)
                yield chunk // send to next stream
            }
        },
        Writable({
            write(chunk, encoding, cb) {
                cb()
            }
        })
    )
})()