# Creating a event emmiter

Node.JS Event Emitter and Listener

## Extra

Is the emit method synchronous or asynchronous?

Synchronous - event is emitted in current tick
Why ?

1 - The Question is about only ```emit``` function.
2 - Check on: node_source/lib/events.js (on node 18.x LTS - line 430)
search by: ```EventEmitter.prototype.emit = function emit(type, ...args) {```

The emit run the callback or array of callback immediately in this line:

```const result = handler.apply(this, args);```

Another Points:
- All listener should be declared before emitterers
- Listener can be declared many times
- Listener can be declared with once, on, addListener

emitter._eventsCount => This is the total of Setted events name

for example

ee.on('event1', cb1)
ee.on('event1', cb2)
ee.on('event2', cb3)

The total of events is 2, independent of number of listeners.