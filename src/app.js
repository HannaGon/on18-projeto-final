require("dotenv").config()
const express = require("express")
const cors = require("cors")
const database = require("./config/mongoConnect")
const indexRouter = require("./routes/indexRoutes")
const routerPosto = require('./routes/postoRoutes')

const app = express()

app.use(express.json())
app.use(cors())
database.connect()

//app.use(indexRouter)
app.use('/posto', routerPosto)

module.exports = app