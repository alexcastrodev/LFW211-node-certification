import { pathToFileURL } from 'url'
import { createRequire } from 'module'

// Until import.meta.resolve becomes stable, NodeJS use createRequire to resolve modules
const require = createRequire(import.meta.url)

console.log(
  `import 'pino'`,
  '=>',
  pathToFileURL(require.resolve('pino')).toString()
)

console.log(
    `import 'tap'`,
    '=>',
    pathToFileURL(require.resolve('tap')).toString()
)