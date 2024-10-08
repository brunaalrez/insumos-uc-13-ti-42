const express =  require('express')
const app = express()
var vusuarios = []

const  cr_usuarios = require('./user')
app.user('/usuarios', cr_usuarios)

app.listen(3000, () => {
    console.log('http://localhost:3000')
})