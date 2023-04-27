import { Readable, Writable } from 'node:stream'
const readable = Readable({
    read() {
        this.push('Chunk 1')
        this.push('Chunk 2')
        this.push('Chunk 3')
        this.push('Chunk 4')
        this.push('Chunk 5')
        this.push('Chunk 6')
        this.push('Chunk 7')
        this.push('Chunk 8')
        this.push('Chunk 9')
        this.push('Chunk 10')

        this.push(null)
    }
})

const writable = Writable({
    write(chunk, encoding, cb) {
        console.log(chunk.toString())
        // end stream
        cb()
    }
})

readable
    // Writable is our output, or save, or ignore
    .pipe(writable)
