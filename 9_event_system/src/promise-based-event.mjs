import {EventEmitter, once} from 'events';
import { setTimeout } from 'timers/promises';

// Instances
const emitter = new EventEmitter();
const controller = new AbortController()

// Abort signal
const { signal } = controller

setTimeout(400).then(() => controller.abort())

try {
    await once(emitter, 'test', { signal })
    console.log('Done')
} catch (err) {
    if(err.code === 'ABORT_ERR') {
        console.log('Cancelled')
    }
}