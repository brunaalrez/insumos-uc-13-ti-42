const express =  require('express')
const app = express()
var vusuarios = []

const  cr_usuarios = require('./user')
app.user('/usuarios', cr_usuarios)

const cr_historico =  require('./Historico')
app.use('/historico', cr_historico)

app.listen(3000, () => {
    console.log('http://localhost:3000')
})