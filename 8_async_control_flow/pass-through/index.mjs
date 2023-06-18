
import { pipeline } from 'stream/promises'
import { setTimeout } from 'timers/promises'

const ac = new AbortController()
const { signal } = ac

async function * MyReadable () {
    yield Buffer.from('teste 1')
    await setTimeout(100)
    yield Buffer.from('custom 2')
}

async function * MyWritable (stream) {
    for await (const chunk of stream) {
        console.log('[writable]', chunk)
        yield chunk
    }
}


async function * MyDuplex (stream) {
    let bytesRead = 0
    const full_string = []
    for await (const chunk of stream) {
        console.log('[duplex writable]', chunk)
        bytesRead += chunk.length
        full_string.push(chunk)
    }

    yield full_string.join()
    yield `bytes read: ${bytesRead}`
}


async function * MyTransform (stream) {
    for await (const chunk of stream) {
        yield chunk.toString().replace(' ', '_')
    }
}

setImmediate(() => {
   ac.abort()
})

await pipeline(
    MyReadable,
    MyTransform,
    MyDuplex,
    MyWritable,
    { signal }
)