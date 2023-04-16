# Buffers

The Buffer constructor is a global.


```bash
10_handling_errors git:(main) ✗ node -p "Buffer"
[Function: Buffer] {
  poolSize: 8192,
  from: [Function: from],
  of: [Function: of],
  alloc: [Function: alloc],
  allocUnsafe: [Function: allocUnsafe],
  allocUnsafeSlow: [Function: allocUnsafeSlow],
  isBuffer: [Function: isBuffer],
  compare: [Function: compare],
  isEncoding: [Function: isEncoding],
  concat: [Function: concat],
  byteLength: [Function: byteLength],
  [Symbol(kIsEncodingSymbol)]: [Function: isEncoding]
}
```

Node introduced Buffer before Javascript.

```bash
➜  10_handling_errors git:(main) ✗ node
Welcome to Node.js v18.12.1.
Type ".help" for more information.
> const buffer = Buffer.alloc(10)
undefined
> buffer instanceof Buffer
true
> buffer instanceof Uint8Array
true
```

When a buffer is printed to the terminal it is represented 
with ```<Buffer ...>``` where the ellipsis (…) in this case signifies a list of bytes represented as hexadecimal numbers. 

For instance a single byte buffer, where the byte's decimal value is 100 (and its binary value is 1100100), would be represented as <Buffer 64>.

Using Buffer.alloc is the safe way to allocate buffers. There is an unsafe way:

```javascript
const buffer = Buffer.allocUnsafe(10)
````

When you log the buffer created by Buffer.allocUnsafe(10) or Buffer.alloc(10), you may see the same output <Buffer 00 00 00 00 00 00 00 00 00 00> because the buffer may contain zeros by chance, but the contents of the buffer are not guaranteed to be the same every time. Therefore, it is recommended to use Buffer.alloc() when you want to create a buffer with initialized contents.


Any time a buffer is created, its allocated from unallocated memory. Unallocated memory is only ever unlinked, it isnt wiped. This means that unless the buffer is overwritten (e.g. zero-filled) then an allocated buffer can contain fragments of previously deleted data. This poses a security risk, but the method is available for advanced use cases where performance advantages may be gained and security and the developer is fully responsible for the security of the implementation.


# JavaScript Has a Unicode Problem

In order to convert a string to a binary representation, an encoding must be assumed. The default encoding that Buffer.from uses is UTF8. The UTF8 encoding may have up to four bytes per character, so it isn't safe to assume that string length will always match the converted buffer size.

For instance, consider the following:

console.log('👀'.length) // will print 2
console.log(Buffer.from('👀').length) // will print 4

Even though there is one character in the string, it has a length of 2. This is to do with how Unicode symbols work, but explaining the reasons for this in depth are far out of scope for this subject. However, for a full deep dive into reasons for a single character string having a length of 2 see the following article "JavaScript Has a Unicode Problem" by Mathias Bynes.


https://mathiasbynens.be/notes/javascript-unicode
http://ujinbot.blogspot.com/2013/10/blog-post.html

# References:
https://www.linuxfoundation.org/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays
https://courses.cs.washington.edu/courses/cse467/08au/labs/l5/fp.pdf


# Json serializing and deserializing Buffers