const { deepEqual } = require('assert')

const howlSound = ': awooooo'
const woofSound = ': woof'


class Wolf {
    constructor(name) {
        this.name = name;
    }

    howl() {
        return this.name + howlSound
    }
}

deepEqual(new Wolf('Jake').howl(), 'Jake' + howlSound)

class Dog extends Wolf {
    constructor(name) {
        super(name);
    }

    woof() {
        return this.name + woofSound
    }
}

deepEqual(new Dog('Jake').woof(), 'Jake' + woofSound)
