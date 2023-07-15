import { realpath } from 'fs/promises';
import url from 'url';
import count from './count.js'

const isMain = process.argv[1] && realpath(process.argv[1]) === realpath(url.fileURLToPath(import.meta.url))

if(isMain) {
  process.stdin.resume()
}

export default async function counter(...args) {
  const result = await count(...args)
  return result
}