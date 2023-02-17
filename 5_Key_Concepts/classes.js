const { deepEqual } = require("assert");

class Human {}
class Person extends Human {}

deepEqual(Person.__proto__, Human)