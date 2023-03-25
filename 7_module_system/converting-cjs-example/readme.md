# Converting a Local CJS File to a Local ESM File

By running:

```bash
node -p "fs.readdirSync('.').join('\t')"
```

You can see the mjs file.

if you try to run the format.mjs with npm run start, the code will throw:

```bash
Error: Cannot find module './format'
Require stack:
Error: Cannot find module at Module._resolveFilename (node:internal/modules/cjs/loader:995:15)
```

But why ?

require function will not resolve a file name without an extension to an .mjs

A imperfection solution for this, call Dynamically Loading an ESM Module in CJS.

