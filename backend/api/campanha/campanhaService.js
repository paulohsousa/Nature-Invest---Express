/**
 * Created by matheus on 23/09/17.
 */
const _ = require('lodash')
const campanhas = require('./campanhas')


campanhas.methods(['get', 'post', 'put', 'delete'])
campanhas.updateOptions({new: true, runValidators: true})

campanhas.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next) {
    const bundle = res.locals.bundle

    if(bundle.errors) {
        var errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    } else {
        next()
    }
}

function parseErrors(nodeRestfulErrors) {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}

module.exports = campanhas
