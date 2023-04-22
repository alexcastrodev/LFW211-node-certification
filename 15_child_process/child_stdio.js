'use strict'
const { spawn } = require('child_process')
const sp = spawn(
  process.execPath,
  [
   '-e',
   `console.error('err output'); process.stdin.pipe(process.stdout)`
  ],
  // The options object has an stdio property set to ['pipe', 'pipe', 'pipe']. This is the default, but we've set it explicitly as a starting point. 
  // { stdio: ['pipe', 'pipe', 'pipe'] } // In this context pipe means expose a stream for a particular STDIO device.
  // { stdio: ['pipe', 'inherit', 'pipe'] } // In this context pipe means expose a stream for a particular STDIO device.
  { stdio: ['pipe', 'inherit', process.stdout] }  // In this context pipe means expose a stream for a particular STDIO device.
)
// ['pipe', 'pipe', 'pipe'] is the default value for stdio.
// sp.stdout.pipe(process.stdout)
// sp.stderr.pipe(process.stdout)
// sp.stdin.write('this input will become output\n')


// ['pipe', 'inherit', 'pipe']
// sp.stderr.pipe(process.stdout)
// sp.stdin.write('this input will become output\n')

// ['pipe', 'inherit', 'process.stdout']
sp.stdin.write('this input will become output\n')

// Keep this line
sp.stdin.end()

