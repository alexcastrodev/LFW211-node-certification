'use strict'

// const { spawnSync } = require('child_process')
// const result = spawnSync(process.execPath, [`-e`, `process.exit(1)`])
// console.log(result)


const { spawn } = require('child_process')
const sp = spawn(
  process.execPath,
  [`-e`, `setTimeout(() => {console.log('subprocess stdio output'), 10000}`]
)

console.log('pid is', sp.pid)

sp.stdout.pipe(process.stdout)

sp.on('close', (status) => {
  console.log('exit status was', status)
})