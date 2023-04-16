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

const interval = setInterval(() => {
    console.log('Interval is running')
    emitter.emit('test', { id: 1, message: 'Hello World' });
}, 100)

setTimeout(() => {
    console.log(emitter._eventsCount, 'emitter._eventsCount')
    emitter.removeAllListeners()
    emitter.destroy()
    console.log(count, 'count')

    // If we dont remove the interval, the interval will keep running
    clearInterval(interval)
}, 1000)