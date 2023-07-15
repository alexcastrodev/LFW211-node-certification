'use strict'

const { execSync, exec } = require('child_process')

// const output = execSync(
//     'node -e "console.log(\'subprocess stdio output\')"'
// )
// const cmd = process.platform === 'win32' ? 'dir' : 'ls'
// const output = execSync(cmd)

// try {
//     execSync(`${process.execPath} -e "throw Error('damn')"`)
// } catch(error) {
//     console.error(`Caught error: ${error}`)
// }

// exec(`
//     ${process.execPath} -e "console.log('xumbrela'); console.error('no breu')"`,
//     (err, stdout, stderr) => {
//         console.log('err', err) // err null
//         console.log('subprocess stdout:', stdout.toString()) // subprocess stdout: xumbrela
//         console.log('subprocess stderr:', stderr.toString()) // subprocess stderr: no breu
//     }
// )


// exec(`
//     ${process.execPath} -e "console.log('xumbrela'); throw Error('no breu')"`,
//     (err, stdout, stderr) => {
//         console.log('err', err) // No longer null
//         console.log('subprocess stdout:', stdout.toString()) // subprocess stdout: xumbrela
//         console.log('subprocess stderr:', stderr.toString()) // subprocess stderr: [eval]: console.log('xumbrela'); throw Error('no breu')
//     }
// )


const sp = exec(`${process.execPath} -e "console.log('subprocess stdio output')"`)
console.log(sp.stdout.pipe(process.stdout))


