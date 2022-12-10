const mongoose = require('mongoose')

const postoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    endereco:{
        cep: {
            type: String,
            required: true
        },
        rua: {
            type: String,
            required: true
        },
        numero: {
            type: String,
            required:true
        },
        complemento: {
            type:String,
            required: false
        },
        referencia: {
            type: String,
            required: false
        },
        estado: {
            type: String,
            required: true
        },
        cidade: {
            type: String,
            required: true
        },
        bairro: {
            type: String,
            required:true
        }},
        servicos: {
            type: Array,
            required: true
        }
})

module.exports = mongoose.model('posto', postoSchema)