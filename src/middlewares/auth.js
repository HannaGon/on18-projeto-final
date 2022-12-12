const jwt = require('jsonwebtoken')
const SECRET = process.env.JWT_SECRET

exports.checkAuth = (req,res,next) =>{
    const authHeader = req.get('authorization')
    if (!authHeader){
        return res.status(401).send({
            message: 'Operação não autorizada'
        })
    }
    const token = authHeader.split(' ')[1]
    if (!token){
        return res.status(401).send({
            message: 'Erro na Geração do token'
        })
    }
    try {
        jwt.verify(token, SECRET, (error)=>{
            if (error){
                return res.status(401).send({
                    message: 'Não autorizado'
                })
            }
            next()
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}