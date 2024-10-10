const express = require('express'); 
const router = express.Router(); 

const cuser = require('../controllers/insumos')

router.use(express.json());

router.post('/create', cuser.lista_insumos)

router.get('/read', cuser.read_insumos)

router.get('/show/:id', cuser.read_parametros)

router.put('/update/:id', cuser.update_insumos)

router.delete('/delete/:id', cuser.delete_insumos)

module.exports = router
