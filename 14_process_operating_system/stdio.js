'use strict'

console.log('initialized')
process.stdin.pipe(process.stdout)

const { Transform } = require('stream')

const createUppercaseStream = () => {
  return new Transform({
    transform (chunk, enc, next) {
      const uppercased = chunk.toString().toUpperCase()
      next(null, uppercased)
    }
  })
}

const uppercase = createUppercaseStream()
process.stdin.pipe(uppercase).pipe(process.stdout)
console.log("🚀 ~ file: index.js:19 ~ process.stdout:", process.stdout)

// console.log(process.stdin.isTTY ? 'terminal' : 'piped to')

process.stderr.write(process.stdin.isTTY ? 'terminal\n' : 'piped to\n')

