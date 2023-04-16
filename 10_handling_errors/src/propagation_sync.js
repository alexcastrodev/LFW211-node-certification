class OddError extends Error {
    constructor (varName = '') {
      super(varName + ' must be even')
      this.code = 'ERR_MUST_BE_EVEN'
    }
    get name () {
      return 'OddError [' + this.code + ']'
    }
}

  function codify (err, code) {
    err.code = code
    return err
  }
  function doTask (amount) {
    if (typeof amount !== 'number') throw codify(
      new TypeError('amount must be a number'),
      'ERR_AMOUNT_MUST_BE_NUMBER'
    )
    if (amount <= 0) throw codify(
      new RangeError('amount must be greater than zero'),
      'ERR_AMOUNT_MUST_EXCEED_ZERO'
    )
    if (amount % 2) throw new OddError('amount')
    throw Error('some other error')
    return amount/2
  }
  
  function run () {
    try {
      const result = doTask('not a valid input')
      console.log('result', result)
    } catch (err) {
      if (err.code === 'ERR_AMOUNT_MUST_BE_NUMBER') {
        throw Error('wrong type')
      } else if (err.code === 'ERR_AMOUNT_MUST_EXCEED_ZERO') {
        throw Error('out of range')
      } else if (err.code === 'ERR_MUST_BE_EVEN') {
       throw Error('cannot be odd')
      } else {
        throw err
      }
    }
  }
  
  try { run() } catch (err) { console.error('Error caught', err) }