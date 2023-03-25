import { realpath } from 'fs/promises'
import { fileURLToPath } from 'url'
import { argv } from 'node:process';
import * as format from './format.js'

const isMain = argv[1] &&
 await realpath(fileURLToPath(import.meta.url)) ===
 await realpath(argv[1])
console.log(await realpath(fileURLToPath(import.meta.url)))

if (isMain) {
  console.info(format.upper('my-package started'))
  process.stdin.resume()
}

export default (str) => {
  return format.upper(str).split('').reverse().join('')
}