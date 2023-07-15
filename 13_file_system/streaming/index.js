const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, '/files/small.txt'), () => {
    console.log('done small')
})
fs.readFile(path.join(__dirname, '/files/medium.txt'), () => {
    console.log('done medium')
})
fs.readFile(path.join(__dirname, '/files/bigger.txt'), () => {
    console.log('done bigger')
})