# Readable-Writable Streams

We will consider 3 stream constructor

- Duplex
- Transform
- PassThrough

With Duplex stream, both read and write method are implemented

## Terminal 1
```bash
node index.js
```

## Terminal 2
```bash
➜  ~ telnet localhost 3000
Trying ::1...
Connected to localhost.
Escape character is '^]'.
Connection ok
```

// The purpose of this example is not to understand the net module in its entirety but to understand that it exposes a common API abstraction, a Duplex stream and to see how interaction with a Duplex stream works.

# Transform Constructor 

The Transform constructor inherits from the Duplex constructor

Example in transform.js


# End-of-Stream

There are at least 4 ways for a stream become inoperative.

- close
- error
- finish
- end

```javascript
'use strict'
const net = require('net')
const { finished } = require('stream')
net.createServer((socket) => {
  const interval = setInterval(() => {
    socket.write('beat')
  }, 1000)
  socket.on('data', (data) => {
    socket.write(data.toString().toUpperCase())
  })
  finished(socket, (err) => {
    if (err) {
      console.error('there was a socket error', err)
    }
    clearInterval(interval)
  })
}).listen(3000)
```

# Piping streams

We can now put everything we've learned together and discover how to use a terse yet powerful abstraction: piping. Piping has been available in command line shells for decades, for instance here's a common Bash command:

cat some-file | grep find-something

The pipe operator instructs the console to read the stream of output coming from the left-hand command (cat some-file) and write that data to the right-hand command (grep find-something). The concept is the same in Node, but the pipe method is used.


Example:
piping.js