const express = require('express'); 
const router = express.Router(); 

const cuser = require('../controllers/insumos')

router.use(express.json());

router.post('/insumos', cuser.lista_insumos)

router.get('/insumos', cuser.read_insumos)

router.get('/insumos/:id', cuser.read_parametros)

router.put('/insumos/:id', cuser.update_insumos)

router.delete('/insumos/:id', cuser.delete_insumos)

module.exports = router

router.listen(3000, () => {
    console.log('http://localhost:3000')
})