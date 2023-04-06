const { readFile } = require('fs')

const onError = (err) => {
    console.error(err)
}

const onSuccess = (contents) => {
  console.log(contents.toString())
}
readFile('../assets/file.txt', (err, contents) => {
  if (err) {
    onError(err)
    return
  }
  onSuccess(contents)
})