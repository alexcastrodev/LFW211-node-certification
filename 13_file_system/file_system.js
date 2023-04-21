const fs = require('fs');
const { join, isAbsolute, relative, resolve, normalize, format, parse } = require('path');

console.log('file', __filename);
console.log('dir', __dirname);

console.log('out file', join(__dirname, 'buffers', 'out.txt'));
console.log('out file', isAbsolute(join(__dirname, 'buffers', 'out.txt')));
console.log('out file', relative(__dirname, 'buffers', 'out.txt'));

console.log(join(__dirname, 'buffers', 'out.txt'));
console.log(resolve('buffers', 'out.txt'));
console.log(normalize('buffers//out.txt'));

const formatFile = format({
    root: __dirname,
    dir: 'buffers',
    base: 'out.txt',
    ext: '.txt',
    name: 'out'
})

console.log('format', formatFile);
console.log('format', parse(formatFile));

const file = fs.readFileSync(__filename, { encoding: 'utf8' })
fs.writeFileSync('buffers/out.txt', file.toUpperCase(), { encoding: 'utf8', flag: 'a' })