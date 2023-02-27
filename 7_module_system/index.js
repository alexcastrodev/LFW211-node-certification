'use strict'
const pino = require('pino')
const format = require('./format')

const logger = pino()
logger.info('my-package started')
logger.info(format.upper('my-package started'))

process.stdin.resume()