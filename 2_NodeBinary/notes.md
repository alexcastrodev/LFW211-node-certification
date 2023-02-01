# Printing commands

All Node Command line flags for any Node's version.

```bash
node --help
```

Beyond the Node command line flags there are additional flags for modifying the JavaScript runtime engine: V8

```bash
node --v8-options
```

# Checking Syntax

## Correct 

```bash
node -c appFail.js
```

Dont show errors


## Incorrect 

```bash
node -c appFail.js
```

function something {
                   ^

SyntaxError: Unexpected token '{'
