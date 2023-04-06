const { readFile } = require('fs').promises

const files = Array.from(['file', 'file_size_1', 'file_size_2'])
    .map((name) => `${name}.txt`)

const print = (contents) => {
  console.log(contents.toString())
}
const readers = files.map((filename) => readFile(`../assets/${filename}`))

Promise.all(readers).then(print).catch(console.error)