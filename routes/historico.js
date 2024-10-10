const express = require('express')
const router = express.Router()
router.use(express.json())

const chistorico = require('../controllers/historico')

router.post('/create', chistorico.create_historico)


router.get('/read', chistorico.read_historico)


router.get('/show/:id', chistorico.show_historico)


router.put('/update/:id',chistorico.update_historico)


router.delete('/delete/:id', chistorico.delete_historico)


module.exports = router