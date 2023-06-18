// Even => PAR
// ODD => impar

class OddError extends Error {
    constructor(varName = '') {
        super(`${varName} must be even`)
    }

    get name() {
        return `OddError [${this.code}]`
    }
}

function codify(err, code) {
    err.code = code
    return err
}


async function doTask(amount) {
    if(typeof amount !== 'number') {
        throw codify(
            new TypeError('amount must be a number'),
            'ERR_AMOUNT_MUST_BE_A_NUMBER'
        )
    }

    if(amount <= 0) {
        throw codify(
            new RangeError('amount must be greater than zero'),
            'ERR_AMOUNT_MUST_BE_GREATER_THAN_ZERO'
        )
    }


    if(amount % 2) {
        throw new OddError(amount)
    }

    return amount / 2
}

async function run() {
    try {
        await doTask('3')
    } catch (err) {
        if(err instanceof TypeError) {
            throw Error('Cannot be a string')
        }
    }
}

run().catch(erro => {
    console.log(erro)
})