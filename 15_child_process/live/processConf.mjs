// import { spawn } from 'child_process'

// process.env.API_URL = 'google.com'

// const sp = spawn(process.execPath, [
//     '-p', 'process.env'
// ], {
//     env: { 
//         API_URL: 'microsoft.com'
//     }
// })

// sp.stdout.pipe(process.stdout) 
// node processConf.mjs
// { API_URL: 'microsoft.com', __CF_USER_TEXT_ENCODING: '0x1F5:0x0:0x0' }


// =============
import { parse } from 'path'
import { spawn } from 'child_process'
import { fileURLToPath } from 'url'

const { IS_CHILD } = process.env
console.log("🚀 ~ file: processConf.mjs:23 ~ IS_CHILD:", IS_CHILD)

if(IS_CHILD) {
    console.log('Subprocess cwd: ', process.cwd())
    console.log('env', process.env)
} else {
    const { root } = parse(process.cwd())
    const filename = fileURLToPath(import.meta.url)
    const sp = spawn(process.execPath, [filename], {
        cmd: root,
        env: {IS_CHILD: '1'}
    })
    
    sp.stdout.pipe(process.stdout)
}
