'use strict'

if (require.main === module) {
  const logger = require('./logger.js')
  console.log('This is a ES module')
  import('./format.mjs').then((format) => {
    logger(format.upper('my-package started'))
    process.stdin.resume()
  }).catch((err) => {
    console.error(err)
    process.exit(1)
  })
} else {
  console.log('This is a common module')
  let format = null
  const reverseAndUpper = async (str) => {
    format = format || await import('./format.mjs')
    return format.upper(str).split('').reverse().join('')
  }
  module.exports = reverseAndUpper
}