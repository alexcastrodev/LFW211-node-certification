'use strict'

// const { createGzip } = require('zlib')
// const transform = createGzip()

// First example with transform.on('data', (data) => { ... })
// transform.on('data', (data) => {
//   console.log('📦 gzip data', data.toString('base64'))
// })

// transform.write('huhuuhuhu')

// setTimeout(() => {
//   transform.end('hahahhahaha')
// }, 500)

// ================================================

const { scrypt } = require('crypto')
const { Transform } = require('stream')

const createTransformStream = (algorithm = 'a-salt', password = 32) => {
    return new Transform({
        decodeStrings: false,
        encoding: 'hex',
        transform (chunk, encoding, callback) {
        console.log("🚀 ~ file: transform.js:27 ~ transform ~ encoding:", encoding)
        scrypt(chunk, algorithm, password, (err, derivedKey) => {
            if (err) {
                return callback(err)
            }
    
            callback(null, derivedKey)
        })
        }
    })
}

const transform = createTransformStream()
transform.on('data', (data) => {
    console.log('📦 scrypt data', data.toString('base64'))
})

transform.write('huhuuhuhu') // scrypt data 3463c64fd2d6ba0e45480c5f83963528a0b28f6c761173d4b4fbaed62453fd27
transform.write('Sonic Mario boom') // scrypt data 403be30ec371da840d87f491dce000333457b42bcc096e720dff10915506e984
transform.end('fui') // scrypt data f687dadc01822e9b004ac979834307cc377823129aa53d25e739c7e7411c110e