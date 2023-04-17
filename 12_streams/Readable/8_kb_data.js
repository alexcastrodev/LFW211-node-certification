'use strict'

const fs = require('fs')
const readable = fs.createReadStream('8_kb_data.txt')

// In this example we are reading the file in chunks

// Since it's so small only one data event would be emitted, 
// but readable streams have a default highWaterMark option of 16kb (17382)
readable.on('data', (chunk) => {
  console.log('read chunk',chunk )
})
readable.on('end', (() => {
    console.log('stop reading')
}))