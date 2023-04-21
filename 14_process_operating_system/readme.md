# STDIO

A Readable steram for process input

process.stdin 
- A Readable stream for process input.

process.stdout
- A Writable stream for process output.

process.stderr
- A Writable stream for process error output.


```bash
node -p "crypto.randomBytes(100).toString('hex')"
```

Let's extend our code so that we connect process.stdin to process.stdout:

```bash
➜  14_process_operating_system git:(main) ✗ node -p "crypto.randomBytes(100).toString('hex')" | node index.js
initialized
e24733f935a3ad3036cc17d698d67b063ac9f47f4c85abff8ff1b076f1dd0c1cbb7cf22fe2cacd15d319cdedaa232a11ee010e04021df602712901f57141c34e2301c6fea23b181b4e38366212cb106e745d7f0598e57cb05f5d781f43204c315e878f64
```

### write stdout

```bash
node -p "crypto.randomBytes(100).toString('hex')" | node index.js > out.txt
```


# About stats.js

All of the numbers output by process.memoryUsage are in bytes. We can see each of the memory categories growing in each iteration, except external memory which only grows at index 1. The external metric refers to memory usage by the C layer, so once the JavaScript engine has fully initialized in this case there's no more memory requirements from that layer in our case. The heapTotal metric refers to the total memory allocated for a process. That is the process reserves that amount of memory and may grow or shrink that reserved space over time based on how the process behaves. Process memory can be split across RAM and swap space. So the rss metric, which stands for Resident Set Size is the amount of used RAM for the process, whereas the heapUsed metric is the total amount of memory used across both RAM and swap space. As we increasingly put pressure on the process memory by allocating lots of objects, we can see that the heapUsed number grows faster than the rss number, this means that swap space is being relied on more over time in this case.

On process.exit(), To exit successfully the code is 0

Process.memoryUsage() returns an object with rss, heapTotal, heapUsed and external properties. The rss property is an acronym that stands for Resident Set Size. What's the difference between heap used and Resident Set Size?

So, Heap used is total memory used within the JavaScript engine, Resident Set Size is total used memory in RAM for the process