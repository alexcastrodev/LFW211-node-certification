// Modern node.js event system
// const { EventEmitter } = require('events');

// My Emitter
const EventEmitter = require('./Event');

// Create an event emitter
const emitter = new EventEmitter();
var count = 0;

// Listen can be used with addListener callback
emitter.addListener('test', (payload) => {
    console.log('[addListener]: test was fired with:', payload);
    console.log('');
    count += 1;
})
emitter.addListener('test', (payload) => {
    console.log('[addListener]: test was fired with:', payload);
    console.log('');
    count += 1;
})

emitter.emit('test', { id: 1, message: 'Hello World' });

setTimeout(() => {
    emitter.removeAllListeners()
    emitter.destroy()
    console.log(count, 'count')
}, 10)