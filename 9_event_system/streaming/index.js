import { EventEmitter, once } from 'events'

// Só pra lembrar os Key concepts of Javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
// const MyEmiter = function() {}
// Object.setPrototypeOf(MyEmiter.prototype, EventEmitter.prototype)
// MyEmiter.prototype.destroy = function(err) {
//     if(err) {
//         this.emit('error', err)
//     }
//     this.emit('close')
// }

class MyEmiter extends EventEmitter {
    constructor(opts = {}) {
        super(opts)
        this.name = opts.name
    }
    destroy (err) {
        if(err) {
            this.emit('error', err)
        }
        this.emit('close')
    }
}


const args = ['a', 'b', 'c', 3, 5]
const evt = new MyEmiter()

setTimeout(() => {
    evt.emit('cow-call', 'hihi')
}, 200)

await once(evt, 'cow-call')

console.log('passou')
