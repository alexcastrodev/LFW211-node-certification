

if(require.main === module) {
  import('./count.js').then(({default: counter}) => {
    console.log(counter(4,2))
    process.stdin.resume()
  })
} else {
    module.exports = require('./count.js')
}