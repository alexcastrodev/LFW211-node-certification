const { deepStrictEqual } = require('assert');

function init (type) {
  var id = 0
  return (name) => {
    id += 1
    return { id: id, type: type, name: name }
  }
}

// States
const createUser = init('user')
const createBook = init('book')

const dave = createUser('Dave')
const annie = createUser('Annie')

// User
deepStrictEqual(dave.id, 1)
deepStrictEqual(dave.type, 'user')

// User
deepStrictEqual(annie.id, 2)
deepStrictEqual(annie.type, 'user')

// Book
const ncb = createBook('Node Cookbook')
deepStrictEqual(ncb.id, 1)
deepStrictEqual(ncb.type, 'book')



// Another example of encapsulating state using closure scope would be to enclose a secret:

const cryptoSign = () => ({ publicKey: 'works' })
const generateKeyPair = () => ({ publicKey: 'works' })

function createSigner (secret) {
  const keypair = generateKeyPair(secret) // you neve see this
  return function (content) {
     return {
        signed: cryptoSign(content, keypair.privateKey),
        publicKey: keypair.publicKey
     }
  }
}

const secret = 'super secret thing'
const signed = createSigner(secret)
const signedContent = signed('sign me')
deepStrictEqual(signedContent, { signed: { publicKey: 'works' }, publicKey: 'works' })



// Closure scope can also be used as an alternative to prototypal inheritance

const howlSound = ': awooooo'
const woofSound = ': woof'

function wolf (name) {
  const howl = () => {
    return name + howlSound
  }
  return { howl }
}

function dog (name) {
  name = name
  const woof = () => { return name + woofSound }
  return {
    ...wolf(name),
    woof
  }
}
const caramelo = dog('caramelo')

deepStrictEqual(caramelo.howl(), 'caramelo' + howlSound)
deepStrictEqual(caramelo.woof(), 'caramelo' + woofSound)

