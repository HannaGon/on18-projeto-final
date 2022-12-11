const { response } = require('express')
const mongoose = require ('mongoose')
const postoSchema = require('../models/postoSchema')
const { find } = require('../models/userSchema')

const cadastraPosto = async (req,res)=>{
    const { nome, endereco, servicos } = req.body
    try {
        const posto = new postoSchema({
            nome: nome,
            endereco: endereco,
            servicos: servicos
        })
        const postos = await postoSchema.find()
        postoNomeBairro = {
            nome: nome,
            endereco: endereco
        }
        for (contador in postos){
            const cadastroNomeBairro = {
                nome: postos[contador].nome,
                endereco: postos[contador].endereco
            }
        if (cadastroNomeBairro.nome == postoNomeBairro.nome && postoNomeBairro.endereco.bairro == postoNomeBairro.endereco.bairro){
            return res.status(400).json({
                message: 'Erro: Posto com mesmo nome e bairro já cadastrado'
            })
        }}
        const salvarPosto = await posto.save()
        res.status(201).json({
            posto: salvarPosto
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}
const exibePosto = async (req,res)=>{
    let query = {}
    try {
        const postos = await postoSchema.find(query)
        res.status(200).json({postos})
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const buscaPostoPorId = async (req,res)=>{
    try {
        const postos = await postoSchema.findById(req.params.id)
        res.status(200).json(postos)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const apagaPosto = async (req,res)=>{
    try {
        const posto = await postoSchema.findById(req.params.id)
        await posto.delete()
        res.status(200).json({
            message: 'Posto apagado com sucesso'
        })
    }
    catch (error){
        res.status(400).json({
            message: error.message
        })
    }
}

const atualizaPosto = async (req,res)=>{
    const posto = await postoSchema.findById(req.params.id)
    if (!posto){
        return res.status(404).send({
            message: `Posto com o ID ${req.params.id} não encontrado no sistema`
        })
    }
    const { nome, endereco, servicos } = req.body
    if (typeof nome!= 'string'|| nome.trim()==''){
        return res.status(400).send({
            message: 'O campo "nome" é obrigatório'
        })
    }
    if (typeof endereco.cep!= 'string'|| endereco.cep.trim()==''){
        return res.status(400).send({
            message: 'O campo "CEP" é obrigatório'
        })
    }
    if (typeof endereco.rua!= 'string'|| endereco.rua.trim()==''){
        return res.status(400).send({
            message: 'O campo "Rua" é obrigatório'
        })
    }
    if (typeof endereco.numero!= 'string'|| endereco.numero.trim()==''){
        return res.status(400).send({
            message: 'O campo "Número" é obrigatório'
        })
    }
    if (typeof endereco.estado!= 'string'|| endereco.estado.trim()==''){
        return res.status(400).send({
            message: 'O campo "Estado" é obrigatório'
        })
    }
    if (typeof endereco.cidade!= 'string'|| endereco.cidade.trim()==''){
        return res.status(400).send({
            message: 'O campo "Cidade" é obrigatório'
        })
    }
    if (typeof endereco.cidade!= 'string'|| endereco.cidade.trim()==''){
        return res.status(400).send({
            message: 'O campo "Bairro" é obrigatório'
        })
    }
    if (posto.servicos[0].trim()==''){
        return res.status(400).send({
            message: 'O campo "Serviços" é obrigatório'
        })
    }
    
    if(nome) posto.nome=nome
    if (endereco.cep) posto.endereco.cep = endereco.cep
    if (endereco.rua) posto.endereco.rua = endereco.rua
    if (endereco.numero) posto.endereco.numero = endereco.numero
    if (endereco.complemento) posto.endereco.complemento = endereco.complemento
    if (endereco.referencia) posto.endereco.complemento = endereco.complemento
    if (endereco.estado) posto.endereco.estado = endereco.estado
    if (endereco.cidade) posto.endereco.cidade = endereco.cidade
    if (endereco.bairro) posto.endereco.bairro = endereco.bairro
    if (servicos) posto.servicos = servicos

    const salvarPosto = await posto.save()
    res.status(200).json({ posto: salvarPosto})
}

module.exports={
    cadastraPosto,
    exibePosto,
    buscaPostoPorId,
    apagaPosto,
    atualizaPosto
}