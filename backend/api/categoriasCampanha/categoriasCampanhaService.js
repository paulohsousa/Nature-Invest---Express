/**
 * Created by matheus on 11/09/17.
 */
const _ = require('lodash')
const categoriasCampanha = require('./categoriasCampanha')


categoriasCampanha.methods(['get', 'post', 'put', 'delete'])
categoriasCampanha.updateOptions({new: true, runValidators: true})

categoriasCampanha.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

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


module.exports = categoriasCampanha
