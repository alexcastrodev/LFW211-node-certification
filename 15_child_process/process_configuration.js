'use strict'
const { spawn } = require('child_process')

// process.env.A_VAR_WE = 'JUST SET'
// const sp = spawn(process.execPath, ['-p', 'process.env'])
// sp.stdout.pipe(process.stdout)

const sp2 = spawn(process.execPath, ['-p', 'process.env'], {
    env: {SUBPROCESS_SPECIFIC: 'ENV VAR'}
})
  
sp2.stdout.pipe(process.stdout)

