process.stdin.pipe(process.stdout)
    .on('data', (chunk) => {
        console.log(chunk)
    })
    .on('end', () => {
        console.log('Fim da leitura')
    })
    .on('close', () => {
        console.log('Stream foi fechado')
    })