const { deepEqual, throws } = require('assert')

function Wolf (name){
    this.name = name
}
const howlSound = ': awooooo'
const woofSound = ': woof'

Wolf.prototype.howl = function() {
    return this.name + howlSound
}

// Function does not have prototype without new
throws(() => Wolf('Jake').howl())

// It works
deepEqual(new Wolf('Jake').howl(), 'Jake' + howlSound)


function inherit(proto) {
    function ChainLink() {}
    ChainLink.prototype = proto;
    return new ChainLink()
}

function Dog(name){
    Wolf.call(this, name + ' the dog')
}

Dog.prototype = inherit(Wolf.prototype);

Dog.prototype.woof = function() {
    return this.name + woofSound
}

const doguin = new Dog('Doguin')

deepEqual(doguin.howl(), 'Doguin the dog' + howlSound)
deepEqual(doguin.woof(), 'Doguin the dog' + woofSound)


/**
 * To describe the full prototype chain:
    the prototype of doguin is Dog.prototype
    the prototype of Dog.prototype is Wolf.prototype
    the prototype of Wolf.prototype is Object.prototype.
 */
deepEqual(Object.getPrototypeOf(doguin), Dog.prototype)
deepEqual(Object.getPrototypeOf(Dog.prototype), Wolf.prototype)


/**
 * In legacy code bases, creating a prototype chain between Dog and Wolf 
 * for the purposes of inheritance may be performed many different ways. 
 * There was no standard or native approach to this before EcmaScript 5.
 *  In the example code an inherit utility function is created, 
 *  which uses an empty constructor function to create a new object with a prototype pointing, 
 *  in this case, to Wolf.prototype.
 */

function Cat (name) {
  Wolf.call(this, name + ' the cat')
}

Object.setPrototypeOf(Cat.prototype, Dog.prototype) // node.util.inherits(Dog, Wolf)

// Cat {
//   name: 'kitty the cat',
//   __proto__: { howl: ƒ (), constructor: ƒ Cat() }
// }
const kitty = new Cat('Kate')
deepEqual(Object.getPrototypeOf(kitty), Cat.prototype)
