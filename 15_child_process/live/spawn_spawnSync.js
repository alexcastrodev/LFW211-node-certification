'use strict'

const { spawnSync } = require('child_process')

const result = spawnSync(
    process.execPath, [
        '-e', `console.log('subprocess stdio output')`
    ]
)
const result2 = spawnSync(
    process.execPath, [
        '-e', `throw error('xubilu')`
    ]
)

const result3 = spawnSync(
    process.execPath, [
        '-e', `process.exit(1)`
    ]
)

console.log(result)
console.log(result2)
console.log(result3)
