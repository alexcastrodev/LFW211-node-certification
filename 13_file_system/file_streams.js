'use strict'
const { pipeline, Transform } = require('stream')
const { join } = require('path')
const { createReadStream, createWriteStream } = require('fs')

const createUpperCaseTransformStream = () => {
    return new Transform({
        transform(chunk, encoding, callback) {
            console.log("🚀 ~ Chunk:", chunk.toString())
            callback(null, chunk.toString().toUpperCase())
        }
    })
}

//source: ReadStream or this file,
// transform1: createUpperCaseTransformStream,
// destination: out.txt,
// callback?: PipelineCallback<B>
pipeline(
    createReadStream(__filename),
    createUpperCaseTransformStream(),
    createWriteStream(join(__dirname, 'buffers', 'out.txt')),
    (err) => {
        if (err) {
            console.error('Pipeline failed', err)
        } else {
            console.log('Pipeline succeeded')
        }
    }
)

