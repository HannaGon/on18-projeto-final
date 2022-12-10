const express = require('express')
const { get } = require('mongoose')
const router = express.Router()

const controller = require('../controllers/postoController')
const authController = require('../controllers/authController')
const userController = require('../controllers/userController')

//não tenho middlewares??