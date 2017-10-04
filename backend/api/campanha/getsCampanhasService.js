/**
 * Created by matheus on 23/09/17.
 */
const _ = require('lodash')
const campanhas = require('./campanhas')

const getCampanhas = (req, res, next) => {
    campanhas.find((err, campanhas) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(campanhas)
        }
    })

}


module.exports = { getCampanhas }