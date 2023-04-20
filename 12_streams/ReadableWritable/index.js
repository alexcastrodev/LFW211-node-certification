'use strict'

const net = require('net')

net.createServer((socket) => {
  socket.write('Connection ok\n')

  socket.on('data', (data) => {
    console.log('Receive data', data.toString())
    socket.write(data.toString().toUpperCase())
  })

  socket.on('end', () => { 
    console.log('end')
  })
}).listen(3000)
