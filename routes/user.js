const express = require('express')
const router = express.Router()
const cuser = require('../controllers/user')

router.post( "/create", cuser.create_usuarios)

router.get( "/show/:id", cuser.show_usuarios)

router.put( '/update/:id', cuser.update_usuarios)

router.get( '/read', cuser.read_usuarios)

router.delete('/delete/:id', cuser.delete_usuarios)


module.exports = router