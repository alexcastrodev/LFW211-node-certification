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
            if (!data.length) this.push(null)
            else this.push(data.pop())
        }
    })
}


const createReadStreamWithObjectMode = () => {
    // This is the data we want to read
    const data = ['sonic', 'mario']
    
    return new Readable({
        // encoding: 'utf8', // I can set the encoding instead return buffers
        objectMode: true, // I can set the objectMode to true to return objects
        read() {
            // Chunk will remove the first element of the array
            if (!data.length) this.push(null)
            else this.push(data.pop())
        }
    })
}


// const readable = createReadStream()
const readable = createReadStreamWithObjectMode()
readable.on('data', (chunk) => {
    console.log('read chunk', chunk, chunk.byteLength )
})

readable.on('end', () => {
    console.log('end reading')
})

// Another way to use a readable stream 
// const data = ['sonic', 'mario']
// const readable2 = Readable.from(data)
// readable2.on('data', (chunk) => {
//     console.log('read chunk', chunk, chunk.byteLength )
// })

// readable2.on('end', () => {
//     console.log('end reading')
// })