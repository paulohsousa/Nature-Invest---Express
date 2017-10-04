/**
 * Created by matheus on 11/09/17.
 */
const restful = require('node-restful')
const mongoose = restful.mongoose
const categoriasCampanhaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    icon: { type: String, required: true },
})

module.exports = restful.model('CategoriasCampanha', categoriasCampanhaSchema)