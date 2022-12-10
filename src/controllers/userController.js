const UserSchema = require('../models/userSchema')
const bcrypt = require ('bcrypt')
const userSchema = require('../models/userSchema')

const cadastraUser = async(req,res)=>{
    const senhaHashed = bcrypt.hashSync(req.body.senha, 10)
    req.body.senha = senhaHashed
    const emailCadastrado = await userSchema.exists({email: req.body.email})
    if (emailCadastrado){
        return res.status(409).send({
            message: 'Cadastro com este email já existe'
        })
    }
    try {
        const novoUser = new userSchema(req.body)
        const userSalvo = await novoUser.save()
        res.status(201).send({
            message: 'Usuário cadastrado com sucesso',
            userSalvo
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    cadastraUser
}