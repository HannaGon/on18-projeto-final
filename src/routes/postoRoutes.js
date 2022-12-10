const express = require('express')
const { get } = require('mongoose')
const router = express.Router()

const controller = require('../controllers/postoController')
const authController = require('../controllers/authController')
const userController = require('../controllers/userController')

const { checkAuth } = require('../middlewares/auth')

router.post('/u/login', authController.login)
router.post('/u/cadastro', userController.cadastraUser)

router.get('/lista', controller.exibePosto)
router.post('/p/cadasto', checkAuth, controller.cadastraPosto)
router.get('/busca/:id', checkAuth, controller.buscaPostoPorId)
router.patch('/p/atualizar/:id', checkAuth, controller.atualizaPosto)
router.delete('/p/apagar', checkAuth, controller.apagaPosto)

module.exports = router