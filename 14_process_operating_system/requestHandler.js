const http = require('http');


// We can see from the output that CPU usage significantly increases on the third call to outputStats. This is because prior to the third call the Date.now function is called repeatedly in a while loop until 5000 milliseconds has passed.

// create a server that takes a long time to respond
http.createServer((req, res) => {
  setTimeout(() => {
    res.writeHead(200);
    res.end('hello world\n');
  }, 5000); // wait for 5 seconds before responding
}).listen(3000);

// print the active handles every 2 seconds
setInterval(() => {
  const handles = process._getActiveHandles();
  console.log(`Active handles: ${handles}`);
  console.log(`Active handles: ${handles.length}`);
  console.log('Process Memory Usage', process.memoryUsage())
  console.log('Process CPU Usage', process.cpuUsage())
}, 2000);

// Test with wrk
// wrk -t12 -c400 -d30s http://127.0.0.1:3000
