/**
 * Created by matheus on 04/09/17.
 */
const restful = require('node-restful')
const mongoose = restful.mongoose
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, min: 6, max: 12, required: true },

})

module.exports = restful.model('User', userSchema)