const { deepEqual } = require("assert");
const { it, describe } = require("node:test");

const obj1 = {
    name: "Alex"
}

const obj2 = {
    name: "Alex"
}

describe('Objects', () => {
    it('Should validate strict equal', () => {
        deepEqual(obj1, obj2, "obj1 is deeply equal to obj3")
    })
})

// https://nodejs.org/dist/latest-v20.x/docs/api/test.html