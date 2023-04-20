const tap = require('tap');

const mam = (num) => {
    if (num % 2 === 0) {
        return 'even';
    }
    return 'odd';
}

tap.equal(mam(1), 'odd')
tap.equal(mam(2), 'even')