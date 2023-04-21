
const { readdir, readdirSync  } = require('fs');
const { readdir: readdirPromise } = require('fs').promises;

// Will print after all the sync, and after callback
async function run() {
    const files = await readdirPromise(__dirname)
    console.log('promise', files)
}

// Show the difference between async and sync
readdir(__dirname, (err, files) => {
    if (err) {
        console.error(err)
    } else {
        console.log('async', files)
    }
})

// Will print all before the async
for (let index = 0; index < 100; index++) {
    console.log('sync', readdirSync(__dirname))
}


run()