import { Readable, Transform, Writable } from 'node:stream'
import { createWriteStream } from 'node:fs'
const readable = Readable({
    read() {
        for (let index = 0; index < 1e6; index++) {
            this.push(JSON.stringify({ id: index, name: 'chunk' }))
        }
        this.push(null)
    }
})


const processingHeaderCsv = Transform({
    transform(chunk, encoding, cb) {
        this.counter = this.counter ?? 0

        if(this.counter) {
            return cb(null, chunk)
        }

        this.counter += 1

        cb(null, "id,name\n".concat(chunk))
    }
})

const processingDataCsv = Transform({
    transform(chunk, encoding, cb) {
        const data = JSON.parse(chunk)
        const result = `${data.id},${data.name}\n`

        cb(null, result)
    }
})

// Its not necessary
// const writable = Writable({
//     write(chunk, encoding, cb) {
//         console.log(chunk.toString())
//         // end stream
//         cb()
//     }
// })

readable
    .pipe(processingDataCsv)
    // Add headers
    .pipe(processingHeaderCsv)
    // Writable is our output, or save, or ignore
    // .pipe(writable)
    // We can replace with Stdout
    // .pipe(process.stdout)
    .pipe(createWriteStream('data.csv'))
