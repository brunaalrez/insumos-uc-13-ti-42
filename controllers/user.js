var vusuarios = []

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

function read_usuarios(res, res){
    return res.status(200).json({
        message: "todos Usuarios",
        db: vusuarios.filter(u => u.deletedAt == null)
    })
}

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

module.exports = {
    create_usuarios,
    show_usuarios,
    read_usuarios,
    update_usuarios,
    delete_usuarios
}