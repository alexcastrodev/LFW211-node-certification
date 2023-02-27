
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