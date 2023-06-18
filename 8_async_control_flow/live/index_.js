const { readFile } = require('fs')

// Exec => callback
// Leitura de arquivo, callback => err, buffers
// Fazer requisição, callback => err, buffers

const x = {
    value: 1,
    data: [],
}


const read = (err, data) => {
    x.data.push(data.toString())
    console.log(x)
}

class FileNotFoundError extends Error {
    filename = ''

    constructor(filename, message = 'File not found', name = 'FileNotFoundError') {
        super(name, message)
        this.filename = filename
    }
}

// Promises
function AsyncReadFile(filename = '') {
    return new Promise((resolve, reject) => {
        readFile(filename, (err, contents) => {
            if(err) {
                reject(new FileNotFoundError(filename))
            }

            resolve({
                data: contents
            })
        })
    })
}


// Callback
// readFile(__filename, read)

AsyncReadFile(__filename).then(({ data }) => {
    console.log('data', data)
}).catch((err) => {
    console.log(err.filename)
})