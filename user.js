const express = requires('express')
const router = express.Router()
router.use(express.json())

function create_usuarios(req, res){

let {pnome, pdataNascimento, psenha} = req.body

    var ousuarios = {
        "id": vusuarios.length, 
        "nome": pnome,
        "dataNascimento": pdataNascimento,
        "senha": psenha,
        "deletedAt":null
    }
    vusuarios.push(ousuarios)

    return res.status(201).json({
        message:"Usuario Criado"
    })
}

router.post( '/create', create_usuarios)

function read_usuarios(res, res){
    return res.status(200).json({
        message: "todos Usuarios",
        db: vusuarios.filter(u => u.deletedAt == null)
    })
}

router.get( "/show/:id", show_usuarios)

function show_usuarios(req, res){
    let {id} = req.params

    const idx = vusuarios.findIndex(u => u.id == id)

    if(idx === -1){
        return res.status(404).json({
            message:"Não encontrado",
            db: null
        })
    }

    return res.status(202).json({
        message:"Encontrei",
        db: vusuarios[idx]
    })
}

router.put( '/update/:id', update_usuarios)
function update_usuarios(req, res){
    let {id} = req.params

    const idx = vusuarios.findIndex(u => u.id == id)
    if(idx == -1){
        return res.status(404).json({
            message:"Não encontrado",
            db: null
        })
    }

    let {nome, dataNascimento, senha} = req.body

    if(nome) vusuarios[idx].nome = nome
    if(dataNascimento) vusuarios[idx].dataNascimento = dataNascimento
    if(senha) vusuarios[idx].senha = senha

    return res.status(202).json({
        message:"Encontrei",
        db: vusuarios[idx]
    })
}

router.get( '/read', read_usuarios)

function show_usuarios(req, res){
    let{id} = req.params

    const idx = vusuarios.findIndex(u => u.id === id)

    if(idx === -1){
    return res.status(404).json({
        message:"Não encontrado",
        db: null
    })
}

return res.status(202).json({
    message:"Encontrei",
    db: vusuarios[idx]
})
}

function delete_usuarios(req, res){
    let {id} = req.params

    const idx = vusuarios.findIndex(u => u.id == id)
    if(idx != -1){
        vusuarios[idx].deletedAt = new Date()
        return res.status(203).json({
            message: "foi de base"
        })
    }

    return res.status(404).json({
        message: "não encontrado"
    })
}
router.delete('/delete/:id', delete_usuarios)


module.exports = router