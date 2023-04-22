import { exec } from 'child_process'

const subProcess = exec(
    `"${process.execPath}" -e "console.log('subprocess stdio output')"`,
)

console.log('pid is', process.pid)

subProcess.stdout.pipe(process.stdout)

subProcess.on('close', (status) => {
    console.log('exit status was', status)
})