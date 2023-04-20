const { Readable, Writable } = require('stream');


const readableStream = new Readable({
    read() {
        const seila = 'Minha mãe'
        this.push(seila)
        this.push(null)
    }
})

const writeableStream = new Writable({
    write(chunk, encoding, callback) {
        console.log('🥹 ', chunk.toString());
        callback();
    }
})

readableStream.pipe(writeableStream)