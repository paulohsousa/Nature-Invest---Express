/**
 * Created by matheus on 23/09/17.
 */
const _ = require('lodash')
const categoriasCampanha = require('./categoriasCampanha')



const getCategorias = (req, res, next) => {
    categoriasCampanha.find((err, categorias) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(categorias)
        }
    })

}


module.exports =  { getCategorias }
