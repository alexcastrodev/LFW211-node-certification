// Modern node.js event system
const EventEmitter = require('events');

// Create an event emitter
class Emitter extends EventEmitter {
    constructor(opts = {}) {
        super(opts);
        this.name = opts.name;
    }
    destroy(err) {
        if(err) {
            this.emit('error', err);
        }
        this.emit('close')
    }
}

module.exports = Emitter;