'use strict'
const outputStats = () => {
  const uptime = process.uptime()
  const { user, system } = process.cpuUsage()
  console.log(uptime, user, system, (user + system)/1000000)
}

outputStats()


// In this example the outputStats function prints the process uptime in seconds, 
// the user CPU usage in microseconds, the system CPU usage in microseconds, 
// and the total CPU usage in seconds so we can compare it against the uptime.

// We print the stats when the process starts. 
// After 500 milliseconds we print the stats again. 
// Then we make the CPU do some work for roughly five seconds and print the stats one last time.

setTimeout(() => {
  outputStats()
  const now = Date.now()
  // make the CPU do some work:
  while (Date.now() - now < 10000) {}
  outputStats()
}, 500)