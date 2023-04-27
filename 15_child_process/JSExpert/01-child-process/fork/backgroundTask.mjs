process.on('message', msg => {
    console.log('Message from parent', msg)
})

console.log(`Process ready ${process.pid}`)