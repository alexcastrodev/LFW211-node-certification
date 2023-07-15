const fs = require('fs')
const path = require('path')
console.log('oi')

const currentFile = __filename
const currentPath = path.dirname(currentFile)
const filesAndDirectories = fs.readdirSync(currentPath)
const currentFileName = path.basename(currentFile)
const filteredList = filesAndDirectories.filter(file => file !== currentFileName)
console.log(filteredList)
