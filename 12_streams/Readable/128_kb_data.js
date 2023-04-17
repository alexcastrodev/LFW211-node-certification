'use strict'

const fs = require('fs')

// 64kb => 65536
const readable = fs.createReadStream('128_kb_data.txt')
readable.on('data', (chunk) => {
  console.log('read chunk', chunk, chunk.byteLength )
})

readable.on('end', (() => {
  console.log('stop reading')
}))