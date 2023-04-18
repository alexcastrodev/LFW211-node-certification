# Writeable streams

The Writable constructor creates writable streams. 

A writable stream could be used to write a file, write data to an HTTP response, or write to the terminal. 

The Writable constructor inherits from the Stream constructor which inherits from the EventEmitter constructor, 
so writable streams are event emitters.

example on index.js