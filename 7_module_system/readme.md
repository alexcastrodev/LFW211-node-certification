
# Loading a Module with CJS

This section teaches about loading a module.

Example in index.js

An extra study, you can learn about load modules algorithm, called "All together"

https://nodejs.org/api/modules.html#modules_all_together

# Detect main module in CJS

The "start" script in the package.json file executes node index.js. When a file is called with node that file is the entry point of a program. So currently my-package is behaving more like an application or service than a package module.

```bash
node -e "require('./index.js')"
```

We can detect wether a file is main module.

I created index2.js

```bash
7_module_system git:(main) ✗ node -p "require('./index2.js')('huhuhu')" 
UHUHUH // Output
```

What the hell happen here?

If i run:

```bash
node index2.js
{"level":30,"time":1677540485781,"pid":55590,"hostname":"Alexandros-MBP","msg":"MY-PACKAGE STARTED"}
```

index2 ITS MY MAIN, but when we are running on --print, index2 is not main module anymore.

so when we run:

```bash
node -p "require('./index2.js')"
```

Will print [Function: reverseAndUpper]

# Convert a CJS file to a ESM File

The crucial differentce between CJS and ESM is that CJS loads every module Sync, and ESM loads Async.
Like ```script``` tag on browser do.

And there is a difference between ESM and "Faux-ESM".

Faux-ESM => is a ESM-like syntax that will be transpile with Babel. The syntax is equals but vary significantly.


In the end of day, Faux-ESM will be compiled by node with CommonJS (CJS)

I Will create a sub folder to explain this better.

See: 7_module_system/converting-cjs-example

-----------

I will introduce Dynamically Loading an ESM Module in CJS in this file:

7_module_system/converting-cjs-example/readme.md

This subject will take long time writing and explaining, so that's all.



# Convert a CJS file to a ESM Package

The example will stay on ./converting-cjs-package

In the example, i update the package.json to having type "module" and it will work with CJS and ESM


### Entrypoint index.js

To check if is main, this file has:

- process.argv (https://nodejs.org/docs/latest/api/process.html)

So, when our script is: node index.js

- argv0 => node

- argv1 => our file entrypoint

- argv[x] rest of argument

```javascript
[
    '/Users/x/.nvm/versions/node/v18.12.1/bin/node'
    '/Users/x/study/LFW211/7_module_system/converting-cjs-package/index.js'
]
```

if we add more arguments like this: node index.js -arg1=alex

```javascript
[
    '/Users/x/.nvm/versions/node/v18.12.1/bin/node' // argv[0]
    '/Users/x/study/LFW211/7_module_system/converting-cjs-package/index.js'// argv[1]
    '-arg1=alex' // our argv[2]
]
```

So we check if our file is realpath with: 

```
import { realpath } from 'fs/promises' // get path to a file. If a URL is provided, it must use the `file:` protocol.
import { fileURLToPath } from 'url' // Will convert the argv[1] in Url to path to compare 
```

When running yarn start, the output of process.argv is an array containing the command line passed when nodeJS process was laucheds.



the import.meta wills return:

[Object: null prototype] {
  url: 'file:///Users/x/study/LFW211/7_module_system/converting-cjs-package/index.js'
}



# Extra

In Node.js, the fileURLToPath() function is used to convert a file URL to a file path. However, in some cases, the resulting file path may contain symbolic links, which can cause issues when accessing or manipulating the file.

The realpath() function, on the other hand, resolves any symbolic links in a given file path, returning the canonicalized absolute path to the file.

Therefore, it's a good practice to use the realpath() function in conjunction with the fileURLToPath() function to ensure that the resulting file path is a canonicalized absolute path without any symbolic links.

Here's an example:

```javascript
const { fileURLToPath } = require('url');
const { realpath } = require('fs/promises');

const fileUrl = new URL('file:///path/to/file.txt');
const filePath = fileURLToPath(fileUrl);
const realFilePath = await realpath(filePath);

console.log(realFilePath);
```

In this example, the fileURLToPath() function is used to convert the fileUrl to a file path. Then, the realpath() function is used to resolve any symbolic links in the resulting file path, returning the canonicalized absolute path to the file. The console.log() statement prints the resulting real file path.

The reason is explained on Extra #2


# Extra 2

Since ESM was primarily made with browsers in mind, there is no concept of a filesystem or even namespaces in the original ESM specification. In fact, the use of namespaces or file paths when using Node with ESM is due to the Node.js implementation of ESM modules, and not actually part of the specification. But the original ESM specification deals only with URLs, as a result import.meta.url holds a file:// URL pointing to the file path of the current module. On a side note, in browsers import maps can be used to map namespaces and file paths to URLs.

We can use the fileURLToPath utility function from the Node core url module to convert import.meta.url to a straightforward path, so that we can compare it with the path held in process.argv[1]. We also defensively use realpath to normalize both URLs to allow for scenarios where symlinks are used.


# Sources:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

https://v8.dev/features/modules#mjs


# Resolvers
The require function has a method called require.resolve. This can be used to determine the absolute path for any required module.

I will let some explanation about resolvers on ./resolving-module-path