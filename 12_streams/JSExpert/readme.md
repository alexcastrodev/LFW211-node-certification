# Streams

We use streams long time. Our request and response are streams.

We can use streams and pipe using terminal for example.

it will show the result

```bash
LFW211 git:(main) ✗ ls -la
total 12
drwxr-xr-x 20 admin staff  640 Apr 23 01:38 .
drwxr-xr-x 72 admin staff 2304 Apr 27 16:56 ..
-rw-r--r--  1 admin staff 6148 Apr 23 01:37 .DS_Store
drwxr-xr-x 12 admin staff  384 Apr 23 08:44 .git
drwxr-xr-x  4 admin staff  128 Apr 16 14:25 10_handling_errors
drwxr-xr-x  6 admin staff  192 Apr 16 18:15 11_Buffers
drwxr-xr-x  7 admin staff  224 Apr 27 17:23 12_streams
drwxr-xr-x 12 admin staff  384 Apr 21 22:20 13_file_system
drwxr-xr-x  9 admin staff  288 Apr 21 16:30 14_process_operating_system
drwxr-xr-x 17 admin staff  544 Apr 22 00:44 15_child_process
drwxr-xr-x  7 admin staff  224 Apr 21 19:43 16_writing_unit_tests
drwxr-xr-x 10 admin staff  320 Feb  4 16:21 3_NodeBinary
drwxr-xr-x  7 admin staff  224 Feb  8 22:26 4_Debugging_and_Diagnostics
drwxr-xr-x 12 admin staff  384 Apr 22 19:49 5_Key_Concepts
drwxr-xr-x  3 admin staff   96 Feb 20 21:23 6_packages_dependencies
drwxr-xr-x 12 admin staff  384 Mar 25 21:39 7_module_system
drwxr-xr-x  7 admin staff  224 Apr  6 16:11 8_async_control_flow
drwxr-xr-x  4 admin staff  128 Apr 16 14:23 9_event_system
drwxr-xr-x  6 admin staff  192 Apr 23 08:19 labs
-rw-r--r--  1 admin staff  559 Feb  4 14:16 readme.md
```

I want to pipeling a filter

```bash
LFW211 git:(main) ✗ ls | grep package
6_packages_dependencies
```

I want to move the current folder readme.md to previous folder 

```bash
ls | grep package | xargs mv readme.md
```


# Processing STDIN and write stdout

based on ```javascript
process.stdin.pipe(process.stdout)
.on('data', (chunk) => {
    console.log(chunk)
})
```

and run

```bash
➜  JSExpert git:(main) ✗ node native-stream.js
a
<Buffer 61 0a>
```