const { Readable, Writable } = require('stream');

// Create a readable stream

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
const readableStream = new Readable({
  read() {
    if(!randomNames.length) {
      this.push(null)
    } else {
      this.push(randomNames.pop())
    }
  }
});


// create a writable stream
const writerStream = new Writable({
  write(chunk, encoding, callback) {
    console.log('🥹', chunk.toString());
    callback();
  }
});


readableStream.pipe(writerStream)
