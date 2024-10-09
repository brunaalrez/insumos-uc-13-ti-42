const express = require('express')
const router = express.Router()
router.use(express.json())

const chistorico = require('../controllers/historico')

router.post('/create_user', chistorico.create_user)


router.get('/read_user', chistorico.read_users)


router.get('/encontrar_id/:id', chistorico.encontrar_id)


router.put('/atualizar_user/:id',chistorico.encontrar_user)


router.delete('/delete/:id', chistorico.delete_user)


module.exports = router