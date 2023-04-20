'use strict'
const net = require('net')
const { finished } = require('stream')
net.createServer((socket) => {
  const interval = setInterval(() => {
    socket.write('beat')
  }, 1000)
  socket.on('data', (data) => {
    socket.write(data.toString().toUpperCase())
  })
  finished(socket, (err) => {
    if (err) {
      console.error('there was a socket error', err)
    }
    clearInterval(interval)
  })
}).listen(3000)