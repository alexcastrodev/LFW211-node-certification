'use strict'

const fs = require('fs')

const readable = fs.createReadStream('16_kb_data.txt')
readable.on('data', (chunk) => {
  console.log('read chunk', chunk, chunk.byteLength )
})

readable.on('end', (() => {
  console.log('stop reading')
}))