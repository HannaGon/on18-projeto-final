const express = require('express')
const { get } = require('mongoose')
const router = express.Router()

const controller = require('../controllers/postoController')
const authController = require('../controllers/authController')
const userController = require('../controllers/userController')

const { checkAuth } = require('../middlewares/auth')
//rota raíz: /posto

router.post('/u/login', authController.login)
router.post('/u/cadastro', userController.cadastraUser)

router.get('/lista', controller.exibePosto)
router.get('/busca/:id', controller.buscaPostoPorId)

router.post('/cadastro', checkAuth, controller.cadastraPosto)
router.patch('/atualizar/:id', checkAuth, controller.atualizaPosto)
router.delete('/apagar/:id', checkAuth, controller.apagaPosto)

module.exports = router