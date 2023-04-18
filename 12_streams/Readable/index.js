'use strict'

const { Readable } = require('stream')


// I can create a readable stream from scratch
const createReadStream = () => {
    // This is the data we want to read
    const data = ['sonic', 'mario']
    
    return new Readable({
        // encoding: 'utf8', // I can set the encoding instead return buffers
        read() {
            // Chunk will remove the first element of the array
            const chunk = data.shift()
            if (!chunk) {
                this.push(null)
            } else {
                this.push(chunk)
            }
        }
    })
}

const readable = createReadStream()
readable.on('data', (chunk) => {
    console.log('read chunk', chunk, chunk.byteLength )
})

readable.on('end', () => {
    console.log('end reading')
})