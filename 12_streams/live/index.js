const { Readable, Writable, PassThrough } = require('node:stream')


const createWritable = () => new Writable({
    decodeStrings: false,
    write(chunk, enconding, cb) {
        data.push(chunk.toUpperCase())
        cb()
    }
})

const createWritable2 = () => new Writable({
    decodeStrings: false,
    write(chunk, enconding, cb) {
        data.push(`Ok: ${chunk}`)
        cb()
    }
})
const readable = PassThrough()

readable.on('data', (chunk) => {
    console.log(`Receive ${chunk.length} bytes`)
})

// readable.push('O') // Receive 1 bytes
// readable.push('I') // Receive 1 bytes
const data = []
const writable = createWritable(data)
const writable2 = createWritable2(data)

writable.write('O')
writable.write('i')

readable.pipe(writable2)

readable.push('o')
readable.push('i')

console.log(data)