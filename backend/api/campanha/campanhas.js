/**
 * Created by matheus on 23/09/17.
 */

const restful = require('node-restful')
const mongoose = restful.mongoose


const categoria = new mongoose.Schema({

    name: { type: String, required: true },
    icon: { type: String, required: true },

})

const usuario = new mongoose.Schema({

    name: { type: String, required: true },
    email: { type: String, required: true },

})

const equipe = new mongoose.Schema({

    nome: { type: String, required: false },
    email: { type: String, required: false },
    telefone: { type: String, required: false },

})

const recompensa = new mongoose.Schema({
    valor: { type: Number, min: 0, required: false },
    moeda: ['EUR', 'BRL', 'USD'],
    descricao: { type: String, required: false },
    detalhes:{ type: String, required: false },
    limit:{ type: Boolean, required: false },
    valor_limit:{ type: Number, required: false }

})


const impactosQuantitativosSchema = new mongoose.Schema({

    descricao: { type: String, required: false },
    quantidade: { type: Number, min: 0, required: false },

})

const campanhasSchema = new mongoose.Schema({

    titulo: { type: String, required: true },
    orcamento: { type: Number, required: true },
    moeda: ['EUR', 'BRL', 'USD'],
    status: ['EM ANALISE', 'APROVADO', 'REPROVADO'],
    imagem: { type: String, required: false },
    estado: { type: String, required: true },
    endereco: { type: String, required: true },
    cep: { type: String, required: true },
    telefone: { type: String, required: true },
    dataInicial:{ type: String, required: true},
    dataFinal:{ type: String, required: true },
    link_youtube: {type: String, required: false},
    descricao_projeto:{type: String, required: true},
    impactos_quantitativos:[impactosQuantitativosSchema],
    boolRecompensa: { type: Boolean, required: true },
    recompensas:[recompensa],
    equipe:[equipe],
    usuario: usuario,
    categoria: categoria


})

module.exports = restful.model('Campanhas', campanhasSchema)