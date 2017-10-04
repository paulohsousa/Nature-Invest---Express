const express = require('express')
const auth = require('./auth')
module.exports = function (server) {

  /*
     * Rotas abertas
  */
    const openApi = express.Router()
    server.use('/oapi', openApi)
    const AuthService = require('../api/user/AuthService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
    const Categorias = require('../api/categoriasCampanha/getsCategoriasService')
    openApi.get('/getCategorias', Categorias.getCategorias)
    const campanhaGetService = require('../api/campanha/getsCampanhasService')
    openApi.get('/getCampanhas', campanhaGetService.getCampanhas)
  /*
     * Rotas protegidas por Token JWT
  */

    const protectedApi = express.Router()
    server.use('/api', protectedApi)
    protectedApi.use(auth)

    const billingCycleService = require(
        '../api/billingCycle/billingCycleService')
    billingCycleService.register(protectedApi, '/billingCycles')

    const billingSummaryService =
        require('../api/billingSummary/billingSummaryService')
    protectedApi.route('/billingSummary').get(billingSummaryService.getSummary)

    const campanhaService = require('../api/campanha/campanhaService')
    campanhaService.register(protectedApi, '/campanha')
}