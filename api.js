const express = require('express')
const app = express()
app.use( express.json())

const  cr_usuarios = require('./routes/user')
app.use('/usuarios', cr_usuarios)

const cr_historico =  require('./routes/historico')
app.use('/historico', cr_historico)

//const cr_insumos = require('./routes/insumos')
//app.use('/insumos', cr_insumos)

app.listen(3000, () => {
    console.log('http://localhost:3000')
})