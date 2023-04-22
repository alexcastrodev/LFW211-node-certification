# Child Process Creation

The child_process module has the following methods, all of which spawn a process some way or another:

- exec & execSync
- spawn & spawnSync
- execFile & execFileSync
- fork


# execFile and execFileSync

It attempt to execute provided path to a binary executable directly

# Fork

the fork method spawn method. it will spawn a new Node process of the currently executing Javascript file.

It setup IPC with the subprocess by default

# Subprocess

in subprocess.js

The exec function from the built-in child_process module in Node.js is used to run a child process that executes the specified command in a shell.

The command being executed is a string that invokes the Node.js executable (process.execPath) with the -e flag followed by a JavaScript code block that logs "A" to the console, logs "B" to the error console (stderr), and logs "C" and "D" to the console.

When the child process runs, its standard output (stdout) and standard error (stderr) streams are captured separately and passed to the callback function provided to exec.

In this case, the stdout stream of the child process will contain only the string "A\nC\nD\n" because "B" is logged to the error console (stderr) instead of the regular console (stdout). The stderr stream of the child process will contain only the string "B\n".

Therefore, when the callback function is executed, the stdout.toString() method will return the string "A\nC\nD\n" and the stderr.toString() method will return the string "B\n".

# spawn and spawnSync

SpawnSync function from the built-in child_process module in Node.js to spawn a child process that runs a JavaScript code block that watches for file changes in the current directory using the fs module's watch function.

```javascript
const result = spawnSync(
  process.execPath,
  ['-e', `const { watch } = require('fs')

  watch('.', (evt, filename) => {
    console.log(evt, filename)
  })`]
)
console.log(result)
```

However, the spawnSync function is a synchronous function, which means it will block the main thread of execution until the child process completes. In this case, the child process will run indefinitely because it is watching for file changes in the current directory.

As a result, the console.log(result) statement will never execute because the spawnSync function is still running and has not yet returned a result.

To make this code work, you can use the spawn function instead of spawnSync, which will run the child process asynchronously in the background and allow the main thread to continue running. You can then use event listeners to handle the output and errors from the child process.

How to fix:

```javascript
const child = spawn(process.execPath, ['-e', `
  const { watch } = require('fs')

  watch('.', (evt, filename) => {
    console.log(evt, filename)
  })
`])

child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`)
})

child.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`)
})

child.on('close', (code) => {
  console.log(`child process exited with code ${code}`)
})
```

The spawn method and the exec method both returning a ChildProcess instance can be misleading. 

There is one highly important differentiator between spawn and the other three methods we've been exploring (namely exec, execSync and spawnSync): the spawn method is the only method of the four that doesn't buffer child process output. 

Even though the exec method has stdout and stderr streams, they will stop streaming once the subprocess output has reached 1 mebibyte (or 1024 * 1024 bytes). 

example in ```break_spawn.js```

This happen

```exec error: RangeError [ERR_CHILD_PROCESS_STDIO_MAXBUFFER]: stdout maxBuffer length exceeded```

This can be configured with a maxBuffer option, but no matter what, the other three methods have an upper limit on the amount of output a child process can generate before it is truncated. Since the spawn method does not buffer at all, it will continue to stream output for the entire lifetime of the subprocess, no matter how much output it generates. Therefore, for long running child processes it's recommended to use the spawn method.


```bash
node -p "process.cwd()"
/Users/x/study/LFW211/15_child_process
```