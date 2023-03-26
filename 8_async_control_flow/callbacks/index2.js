const { readFile } = require('fs')

const onError = (err) => {
    console.error(err)
}

const onSuccess = (contents, fileName) => {
  console.log(fileName, '=>', contents.toString())
}


const read = (filename) => {
  readFile(`./${filename}`, (err, contents) => {
    if (err) {
      onError(err)
      return
    }
    onSuccess(contents, filename)
  })
}

read('file.txt')
read('file_size_1.txt')
read('file_size_2.txt')