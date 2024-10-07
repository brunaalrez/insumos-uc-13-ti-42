const express =  require('express')
const app = express()
var vusuarios = []

app.use(express.json())

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

app.post( '/usuarios', create_usuarios)

function read_usuarios(res, res){
    return res.status(200).json({
        message: "todos Usuarios",
        db: vusuarios.filter(u => u.deletedAt == null)
    })
}

app.get( "/usuarios/:id", read_usuarios)

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

app.put( '/usuarios/:id', show_usuarios)
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

app.get( '/usuarios', read_usuarios)

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
app.delete('/usuarios/:id', delete_usuarios)



app.listen(3000, () => {
    console.log('http://localhost:3000')
})