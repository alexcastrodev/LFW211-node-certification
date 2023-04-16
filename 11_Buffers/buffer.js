const { deepEqual } = require("assert");

const buf = Buffer.allocUnsafe(4); // create a new buffer of size 4 bytes
const buf2 = Buffer.allocUnsafe(4); // create a new buffer of size 4 bytes

buf[0] = 0x1; // manually set the first byte to 0x1
buf[1] = 0x2; // manually set the second byte to 0x2
buf[2] = 0x3; // manually set the third byte to 0x3
buf[3] = 0x4; // manually set the fourth byte to 0x4

console.log(buf);
console.log(buf2);

// Converting Strings to Buffers
const buffer = Buffer.from('hello world')
console.log('buffer', buffer)

deepEqual('👀'.length, 2)
deepEqual('🔥'.length, 2)
deepEqual(Buffer.from('👀').length, 4)
deepEqual(Buffer.from('🔥').length, 4)


const eyes = Buffer.from('👀', 'utf16le')
deepEqual(eyes.toString('utf16le'), '👀')

const fire = Buffer.from('🔥', 'utf16le')
deepEqual(fire.toString('utf16le'), '🔥')


deepEqual(Buffer.from('A').toString('hex'), '41')
deepEqual(Buffer.from('A', 'utf16le').toString('hex'), '4100')

console.log('eyes emoji:', Buffer.from('👀').toString('base64'))


// The UTF8 encoding format has between 1 and 4 bytes 
// to represent each character, 
// if for any reason one or more bytes is truncated from a character 
// this will result in encoding errors. 

// So in situations where we have multiple buffers that might split characters across a byte boundary the 
// Node core string_decoder module should be used.

const { StringDecoder } = require('string_decoder')
const frag1 = Buffer.from('f09f', 'hex')
const frag2 = Buffer.from('9180', 'hex')
console.log(frag1.toString()) // prints �
console.log(frag2.toString()) // prints ��
const decoder = new StringDecoder()
console.log(decoder.write(frag1)) // prints nothing
console.log(decoder.write(frag2)) // prints 👀

