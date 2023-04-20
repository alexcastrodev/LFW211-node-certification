const { Readable, Writable } = require('stream');

// create a writable stream
const writerStream = new Writable({
  write(chunk, encoding, callback) {
    console.log('🥹', chunk.toString());
    callback();
  }
});

// const readerStream = new Readable({
//     read() {}
// })

const readableStream = new Readable({
    read() {
        this.push(null)
    }
});

const randomNames = [
    'John',
    'Jane',
    'Mario',
    'Luigi',
    'Sonic',
    'Tails',
    'Knuckles',
    'Amy',
    'Shadow',
    'Silver',
    'Rouge',
]

// write data to the writable stream
randomNames.forEach((name) => {
    writerStream.write(name);
})

// end the writable stream
writerStream.end();

