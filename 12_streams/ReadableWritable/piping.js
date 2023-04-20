'use strict'

// run index.js before run this code

const net = require('net')
const socket = new net.connect(3000)

socket.pipe(process.stdout)

socket.write('Hello\n')

setTimeout(() => {
    socket.end('Bye\n')
})
