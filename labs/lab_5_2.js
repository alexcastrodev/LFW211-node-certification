const assert = require('assert')

// TODO:
// implement a way to create a prototype chain
// of leopard -> lynx -> cat

// leopard prototype must have ONLY a hiss method
const leopard = function() {}

leopard.prototype.hiss = function() {
    console.log('hsss')
}

const lynx = function() {}

lynx.prototype.purr = function() {
    console.log('prr')
}
Object.setPrototypeOf(lynx.prototype, leopard.prototype)

// lynx prototype must have ONLY a purr method
const cat = function() {}

cat.prototype.meow = function() {
    console.log('meow')
}
Object.setPrototypeOf(cat.prototype, lynx.prototype)


const felix = new cat() //TODO replace null with instantiation of a cat
felix.meow() // prints Felix the cat: meow
felix.purr() // prints Felix the cat: prrr
felix.hiss() // prints Felix the cat: hsss


// prototype checks, do not remove
const felixProto = Object.getPrototypeOf(felix)
const felixProtoProto = Object.getPrototypeOf(felixProto)
const felixProtoProtoProto = Object.getPrototypeOf(felixProtoProto)
assert(Object.getOwnPropertyNames(felixProto).length, 1)
assert(Object.getOwnPropertyNames(felixProtoProto).length, 1)
assert(Object.getOwnPropertyNames(felixProtoProto).length, 1)
assert(typeof felixProto.meow, 'function')
assert(typeof felixProtoProto.purr, 'function')
assert(typeof felixProtoProtoProto.hiss, 'function')
console.log('prototype checks passed!')