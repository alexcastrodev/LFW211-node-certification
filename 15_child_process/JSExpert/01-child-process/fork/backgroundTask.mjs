import { Readable } from "stream"


async function onMessage(msg) {
    const readable = new Readable({
        read() {
            this.push(Buffer.from(msg))
            this.push(null)
        }
    })

    readable.on('data', (chunk) => {
        console.log("🚀 ~ file: backgroundTask.mjs:14 ~ readable.on ~ chunk:", chunk)
        console.log(`Received ${chunk.length} bytes`)
    })

    readable.on('end', () => {
        console.log('There will be no more data.')
    })

    process.send(readable)
}

process.on('message', onMessage)


console.log(`Process ready ${process.pid}`)