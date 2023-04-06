const { readFile } = require('fs').promises

const files = Array.from(['file', 'file_size_1', 'file_size_2'])
    .map((name) => `${name}.txt`)

let index = 0
let count = files.length
const data = []
const print = (contents) => {
  console.log(contents.toString())
}

const read = (filename) => {
    return readFile(`../assets/${filename}`).then((contents) => {
        index += 1
        data.push(contents)
        if (index < count) return read(files[index])
        return data
    })
  }

// In this code block, the print() function 
// takes the concatenated data as a Buffer object and 
// converts it to a string using the .toString() 
// method before printing it to the console. 
// The Buffer.concat() method is used to merge all the Buffer objects 
// read from the files into a single Buffer object.

// With String
  read(files[index])
    .then((data) => {
    print(data)
    })
    .catch(console.error)
  
// In this code block, 
// the print() function takes the data array directly and prints it to the console. 
// This array contains all the data read from the files, 
// but it is not concatenated into a single Buffer object.
// read(files[index])
// .then((data) => {
//   print(Buffer.concat(data))
// })
// .catch(console.error)
