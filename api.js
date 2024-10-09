const express =  require('express')
const app = express()
app.use( express.json())

const  cr_usuarios = require('../routes/user')
app.user('/usuarios', cr_usuarios)

const cr_historico =  require('./routes/historico')
app.use('/historico', cr_historico)

app.listen(3000, () => {
    console.log('http://localhost:3000')
})