import { Duplex } from 'stream'

let count = 0
const server = Duplex({
    objectMode: true, // Use more memory than buffer
    read() {
        const everySecond = (intervalContext) => {
            if(count++ <= 5) {
                this.push(`Yoooo index ${count}\n`)
                return
            }
            clearInterval(intervalContext)
            this.push(null)
        }

        setInterval(function() {
            everySecond(this)
        }, 1)
    },
    write(chunk, enconding, callback) {
        console.log(chunk)
        callback()
    }
})

// This will be execute after
server
    .pipe(process.stdout)

server.push('this is a readable also, modafoca\n') // This will be executed after writable

server.write('testing writable') // This will execute first

server.on('data', (msg) => {
    console.log('This is a event on read push', msg)
})