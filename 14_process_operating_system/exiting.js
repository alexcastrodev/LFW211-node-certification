
// Close process after process.exit() is called

setInterval(() => {
    console.log('Process CPU Usage', process.cpuUsage())
}, 1)

setTimeout(() => {
    //Handles are a way for Node.js to represent resources that require asynchronous processing, 
    // such as network sockets or timers. ( Or a setTimeout like this one.)
    // The getActiveHandles() method can be useful for debugging and performance analysis purposes, 
    // as it allows you to see which resources are currently being used by your Node.js application.
    console.log('Current open handles:', process._getActiveHandles())
    
    // The getActiveRequests() method can be useful for debugging and performance analysis purposes,
    // as it allows you to see which resources are currently being used by your Node.js application.
    console.log('Current open requests:', process._getActiveRequests())

    // The cwd() method returns the current working directory of the Node.js process.
    console.log('Current Directory', process.cwd())
    // The chdir() method changes the current working directory of the Node.js process.
    console.log('Process chdir', process.chdir('.'))

    // The pid property returns the process ID of the Node.js process.
    console.log('Process ID', process.pid)

    // The title property returns the title of the Node.js process.
    console.log('Process Title', process.title)

    // The argv property returns an array containing the command line arguments passed when the Node.js process was launched.
    console.log('Process Platform', process.platform)

    // The arch property returns a string identifying the operating system CPU architecture for which the Node.js binary was compiled.
    console.log('Process Architecture', process.arch)

    // The env property returns an object containing the user environment.
    console.log('Process Version', process.version)

    // The versions property returns an object listing the version strings of Node.js and its dependencies.
    console.log('Process Versions', process.versions)

    // The config property returns an object used to configure the current Node.js process.
    console.log('Process Memory Usage', process.memoryUsage())

    // The uptime() method returns the number of seconds Node.js has been running.
    console.log('Process Uptime', process.uptime())
    process.exit()
}, 100)

// process.on('exit', (exitCode) => {
//     console.log('exiting with code', exitCode)
// })