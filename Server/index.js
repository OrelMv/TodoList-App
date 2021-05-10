const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

//connection to data base
require('./configs/toDosDB')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());

const toDosRoutes = require('./controllers/toDosController')

app.use('/toDos', toDosRoutes)

app.listen(8000, () => {
    console.log("server is listening on port 8000")
})