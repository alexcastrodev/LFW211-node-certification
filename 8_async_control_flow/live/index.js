const { readFile } = require('fs').promises

function getData(data) {
    return data.toString()
}

async function read() {
    return getData((await readFile(__filename)))
}

;(async () => {
    console.log(await read())
})()