'use strict'
const { exec } = require('child_process')

exec(
  `"${process.execPath}" -e "console.log('A');console.error('B'); console.log('C'); console.log('D')"`,
  (err, stdout, stderr) => {
    console.log('err', err) // err null
    console.log('subprocess stdout: ', stdout.toString()) // subprocess stdout:  A
    console.log('subprocess stderr: ', stderr.toString()) // subprocess stderr:  B
  }
)

// exec(
//     `"${process.execPath}" -e "console.log('A'); throw Error('B')"`,
//     (err, stdout, stderr) => {
//       console.log('err', err)
//       console.log('subprocess stdout: ', stdout.toString())
//       console.log('subprocess stderr: ', stderr.toString())
//     }
//   )