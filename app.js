
const conn = require('./db/conn.js')
conn().then(r => console.log('Conectado ao mongoDB'))

const express = require('express')
const routes = require('./routes/router')
const cors = require('cors')
const errorMiddleware = require('./middlewares/Error')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use(errorMiddleware)
app.listen(3000, () => {
  console.log('Servidor online!! na porta 3000')
})






