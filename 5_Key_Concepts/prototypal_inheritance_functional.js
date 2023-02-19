const { deepEqual, throws, ok } = require('assert')

const Person = {
    talk: function() {
        return this.name + ': Hi'
    }
}

/**
 * Creates an object that has the specified prototype (Person)
 * Person is the Object to use as a prototype.
 * Then, object that contains one or more property descriptors.
 */

// Definition of Dog Object
// {
//  name: 'Caramelo the dog',
//  __proto__: { talk: ƒ talk() }
// }
const Dog = Object.create(Person, {
    name: {
        value: 'Caramelo the dog',
        enumerable: true
    }
})

deepEqual(Dog.talk(), 'Caramelo the dog: Hi')

// Enumerable properties are those properties whose 
// internal enumerable flag is set to true, 
// which is the default for properties created via simple assignment or via a property initializer. 
// Properties defined via Object.defineProperty 
// and such are not enumerable by default. 
// Most iteration means (such as for...in loops and Object.keys) only visit enumerable keys.
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties

deepEqual(Object.values(Dog), ['Caramelo the dog'])


// {
//  name: 'Ragdoll the cat',
//  __proto__: { talk: ƒ talk(), name: 'Caramelo the dog' }
// }
const Cat = Object.create(Dog, {
    name: { 
        value: 'Ragdoll the cat',
        enumerable: false,
     }
})

deepEqual(Cat.talk(), 'Ragdoll the cat: Hi')
deepEqual(Object.values(Cat), [])


// Others Properties
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description

// configurable
// when this is set to false: 

const Cat2 = Object.create(Dog, {
    name: { 
        value: 'Ragdoll the cat',
        enumerable: true,
        configurable: false,
     }
})

// 1 - The property may not be deleted
delete Cat2['name']
deepEqual(Cat2.name, 'Ragdoll the cat')

// 2 - Preventing property redefinition:
throws(() => Object.defineProperty(Cat2, "name", { value: "Pitbull the cat" }))
deepEqual(Cat2.name, 'Ragdoll the cat')

const Cat3 = Object.create(Dog, {
    name: { 
        value: 'Ragdoll the cat',
        enumerable: true,
        configurable: true,
     }
})

Object.defineProperty(Cat3, "name", { value: "Pitbull the cat" })
deepEqual(Cat3.name, 'Pitbull the cat')

// 3 - Preventing property descriptor modification:

const person2 = { name: "John", age: 30 };

// Set the "name" property to non-configurable
Object.defineProperty(person2, "name", { configurable: false, writable: false });
throws(() => Object.defineProperty(person2, "name", { writable: true }));

person2.name = 'Someone'
deepEqual(person2.name, 'John')

// BUT...........

const person = { name: "John", age: 30 };
Object.defineProperty(person, "name", { configurable: false });
Object.defineProperty(person, "name", { writable: true });

// Although the first Object.defineProperty call sets the "configurable" attribute of the "name" property to false, 
// the second Object.defineProperty call sets the "writable" attribute of the "name" property to true. 
// This means that while the property cannot be deleted or have its attributes changed, its value can still be changed.
// Therefore, when the code attempts to assign a new value to person.name with person.name = 'Someone', 
// it succeeds and the value of person.name becomes "Someone".

person.name = 'Someone'
deepEqual(person.name, 'Someone')



// ---------------------------------------------------
// Get and Setter

const person3 = Object.create({}, {
  name: {
    get: function() {
      return this._name + ' :)';
    },
    set: function(value) {
      this._name = value.toUpperCase();
    }
  },
  age: {
    value: 30,
    writable: true
  }
});

person3.name = 'Alex'

deepEqual(person3.name, 'ALX :)')
