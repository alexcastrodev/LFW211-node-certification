// Modern node.js event system
const { EventEmitter } = require('events');

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
    console.log('[addListener2]: test was fired with:', payload);
    console.log('');
})

// Listener can be used with on callback
emitter.on('test', (payload) => {
    console.log('[on]: test was fired with', payload);
    console.log('');
})

emitter.once('test', (payload) => {
    console.log('[once]: test was fired with', payload);
    console.log('');
})

// Emit an event
// emitter.emit('test', { id: 1, message: 'Hello World' });
// emitter.emit('test', { id: 2, message: 'Hello World' });
// emitter.emit('test', { id: 3, message: 'Hello World' });
// emitter.emit('test', { id: 4, message: 'Hello World' });
// emitter.emit('test', { id: 5, message: 'Hello World' });

setTimeout(() => {
    emitter.removeAllListeners()
}, 2)


for (var i = 0; i <= 999; i++) {
    setTimeout(() => {
        emitter.emit('test', { id: i, message: 'Hello World' });
    }, 1)
}

setTimeout(() => {
    console.log(count, 'count')
}, 100)