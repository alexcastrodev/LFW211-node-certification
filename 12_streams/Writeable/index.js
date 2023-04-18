'use strict'

// The writeable stream is the opposite of the readable stream
// It is used to write data to a destination

// It is a class that extends the stream class
// It is used to write data to a file, a socket, a database, etc

// const fs = require('fs')
// const writeable = fs.createWriteStream('test.txt')

// writeable.on('finish', () => {
//     console.log('finish writing')
// })

// writeable.write('Sonic\n')
// writeable.write('Mario\n')
// writeable.write('Street fighter\n')

// writeable.end('End of the game')


// I can create a writeable stream from scratch
const { Writable } = require('stream')
const data = []
const createWriteStream = () => {
   return new Writable({
        // each string written to our writable stream instance is converted to a buffer before it becomes the chunk argument passed to the write option function
        decodeStrings: false, // This can be opted out of by setting the decodeStrings option to false
         write(chunk, encoding, callback) {
            console.log('write chunk', chunk, chunk.byteLength)
            data.push(chunk)
            callback()
         }
   })
}

// To create a writable stream, call the Writable constructor with the new keyword. 
// The options object of the Writable constructor can have a write function, which takes three arguments, which we called chunk, enc, and next. The chunk is each piece of data written to the stream, enc is encoding which we ignore in our case and next is callback which must be called to indicate that we are ready for the next piece of data.
// The point of a next callback function is to allow for asynchronous operations within the write option function, 
// this is essential for performing asynchronous I/O. We'll see an example of asynchronous work in a stream prior to calling a callback in the following section.


const writeable2 = createWriteStream()
writeable2.on('finish', () => {
    console.log('finish writing', data)
})
writeable2.write('Sonic\n')
writeable2.write('Mario\n')
writeable2.write('Street fighter the best one\n')

// This will only allow strings or Buffers to be written to the stream, trying to pass any other JavaScript value will result in an error
// TypeError [ERR_INVALID_ARG_TYPE]: The "chunk" argument must be of type string or an instance of Buffer or Uint8Array. Received an instance of Object
// writeable2.write({name: 'Sonic'}) // This will throw an error

writeable2.end('End of the game')

// If we want to support strings and any other JavaScript value, we can instead set objectMode to true to create an object-mode writable stream:
const createWriteStreamWithObjectMode = () => {
    return new Writable({
        objectMode: true,
        write(chunk, encoding, callback) {
            console.log('write chunk', chunk, chunk.byteLength)
            data.push(chunk)
            callback()
        }
    })
}

const writeable3 = createWriteStreamWithObjectMode()

writeable3.on('finish', () => {
    console.log('finish writing', data)
})

writeable3.write('Sonic\n')
writeable3.write('Mario\n')
writeable3.write('Street fighter the best one\n')
writeable3.write({name: 'Sonic'}) // This will not throw an error

writeable3.end('End of the game')
// The write option function is called for each chunk of data written to the stream.
// The write option function is called with the chunk of data to be written, the encoding of the chunk, and a callback function to be called when the chunk has been processed.
// The write option function must call the callback function to indicate that the chunk has been processed.
// If the write option function does not call the callback function, the stream will be stuck in a "writable" state and will not be able to process any more chunks.
// The write option function can be asynchronous, in which case it must call the callback function when the chunk has been processed.
// If the write option function is asynchronous, it must call the callback function with an error as the first argument if an error occurred while processing the chunk.

// Typically writable streams would be binary streams. However, in some cases object-mode readable-writable streams can be useful.
