var vusers = []

function create_user (req, res){
    let {genero, idade, nome, profissao} = req.body

    var ouser = {
        "id": vusers.length+1,
        "genero":genero,
        "idade":idade,
        "nome":nome,
        "profissao":profissao,
        "deletedAt": null
    }
    vusers.push(ouser)

    return res.status(200).json({
        message: "usuario criado",
        
    })
}

function read_users (req, res){

    return res.status(200).json({
        message: "Todos usuarios",
        db: vusers.filter(u => u.deletedAt == null)
    })

}

function encontrar_id (req, res){ 
    
    let {id} = req.params;
    
    const idx = vusers.findIndex(u => u.id == id)

    if(idx ==-1 || vusers.delete_user != null){
        return res.status(404).json({
            message: "nao encontrado",
            db: null

        })

    }
    
    return res.status(202).json({
        message: "Encontrei",
        db: vusers[idx]
    })

}

function atualizar_user (req, res){

    let {id} = req.params;
    
    const idx = vusers[idx].findIndex(u => u.id == id)

    if(idx ==-1 || vusers.delete_user != null){
        return res.status(404).json({
            message: "nao encontrado",
            db: null

        })

    }

    let {genero, idade, nome, profissao} = req.body

    if(genero) vusers[idx].genero = genero
    if(idade) vusers[idx].idade = idade
    if(nome) vusers[idx].nome = nome
    if(profissao) vusers[idx].profissao = profissao

    
    return res.status(202).json({
        message: "Encontrei",
        db: vusers[idx]
    })

}

function delete_user(req, res){
    let{id} = req.params 

    const idx = vusers[idx].findIndex(u => u.id == id)
    if(idx != -1){
        //vusers.slice(idx) - Deletar definitivamente
        vusers[idx].deletedAt = new Date
        return res.status(203).jason({
            message: "Usuario excluido"
        })
    }
        return res.status(404).jason({
            message: "Usuario nao encontrado"
        })
}

module.exports = {
    create_user,
    read_users,
    encontrar_id,
    atualizar_user,
    delete_user
}