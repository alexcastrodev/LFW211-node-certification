# Async Await

Most of notes are in index.js

In the end of day, All async function are Promises.

# Canceling Asynchronous Operations

This context talk aboute AbortController with AbortSignal web APIs.

Using global timeout

```bash
$ ~ node abort_controller.mjs

Timeout {
  _idleTimeout: 1000,
  _idlePrev: [Timeout],
  _idleNext: [TimersList],
  _idleStart: 31,
  _onTimeout: [Function (anonymous)],
  _timerArgs: undefined,
  _repeat: null,
  _destroyed: false,
  [Symbol(refed)]: true,
  [Symbol(kHasPrimitive)]: false,
  [Symbol(asyncId)]: 9,
  [Symbol(triggerId)]: 0
}
Abort the timeout
```

Using Function exported from the ```Core timers/promises``` module

```bash
$ ~ node abort_controller_timer.mjs

Abort the timeout
will be logged
```

This now behaves as the typical timeout example, nothing is logged out because the timer is canceled before it can complete. The AbortController constructor is a global, so we instantiate it and assign it to the controller constant. An AbortController instance has an AbortSignal instance on its signal property. 

We pass this via the options argument to timers/promises setTimeout, internally the API will listen for an abort event on the signal instance and then cancel the operation if it is triggered. We trigger the abort event on the signal instance by calling the abort method on the AbortController instance, this causes the asynchronous operation to be canceled and the promise is fulfilled by rejecting with an AbortError. An AbortError has a code property with the value 'ABORT_ERR', so we wrap the await timeout in a try/catch and rethrow any errors that are not AbortError objects, effectively ignoring the AbortError.

Many parts of the Node core API accept a signal option, including fs, net, http, events, child_process, readline and stream. In the next chapter, "Node's Event System", there's an additional AbortController example where it's used to cancel promisified events.

