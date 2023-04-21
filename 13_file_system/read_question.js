
// Qual é a ordem do stdout ( ou a ordem que irá aparecer no console )  ?

// A) Irá imprimir os "sync", e no meio vai imprimir o "async" e a "promise"
// B ) Irá imprimir todos "sync", depois o "async" e por último a "promise" ( Correta )
// C ) Irá imprimir todos "sync", depois a "promise" e por último o "async"


const { readdir, readdirSync  } = require('fs');
const { readdir: readdirPromise } = require('fs').promises;

async function run() {
    const files = await readdirPromise(__dirname)
    console.log('promise', files)
}


readdir(__dirname, (err, files) => {
    if (err) {
        console.error(err)
    } else {
        console.log('async', files)
    }
})
for (let index = 0; index < 2; index++) {
    console.log('sync', readdirSync(__dirname))
}

run()

console.log(process._getActiveRequests())
console.log(process._getActiveHandles())
