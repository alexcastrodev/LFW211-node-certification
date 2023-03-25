# Resolver

core modules and relative file paths the ability to resolve an ESM module is important.

But its not stable yet

This feature is only available with the --experimental-import-meta-resolve command flag enabled.


# The Alternative approach

See in index.js how to use ```import { createRequire } from 'module'```


```bash
$ node index.js
import 'pino' => file:///Users/alexcastrodev/study/LFW211/7_module_system/resolving-module-path/node_modules/pino/pino.js
import 'tap' => file:///Users/alexcastrodev/study/LFW211/7_module_system/resolving-module-path/node_modules/tap/lib/tap.js
```

# Extra

We can use import-meta-resolve module to get the best results for now.

```bash
➜  resolving-module-path git:(main) ✗ node --experimental-import-meta-resolve import-resolve-example.js
import 'pino' => file:///Users/x/study/LFW211/7_module_system/resolving-module-path/node_modules/tap/lib/tap.mjs
```

# Flag

--experimental-import-meta-resolve

# Souces 

https://nodejs.org/docs/latest-v18.x/api/esm.html#importmetaresolvespecifier-parent