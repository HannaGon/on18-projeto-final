const userSchema = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET

const login = (req,res)=> {
    try {
        userSchema.findOne({email: req.body.email}, (error,user)=>{
            console.log(`Usuário encontrado: ${user}`)
            if(!user){
                return res.status(404).send({
                    message: 'Usuário não encontrado',
                    email: req.body.email
                })
                }
            const senhaValida = bcrypt.compareSync(req.body.senha, user.senha)
            console.log('Senha válida?  ', senhaValida)
            if (!senhaValida){
                return res(401).send({
                    message: 'Senha inválida'
                })}
            const token = jwt.sign(user.nome, SECRET)
            console.log(`Token gerado: ${token}`)
            res.status(200).send({
                message: 'Login efetuado com sucesso',
                token
            })
            })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

module.exports = {
    login
}