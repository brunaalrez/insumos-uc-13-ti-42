var vhistoricos = []

function create_historico (req, res){
    let {genero, idade, nome, profissao} = req.body

    var ohistorico = {
        "id": vhistoricos.length+1,
        "genero":genero,
        "idade":idade,
        "nome":nome,
        "profissao":profissao,
        "deletedAt": null
    }
    vhistoricos.push(ohistorico)

    return res.status(200).json({
        message: "usuario criado",
        
    })
}

function read_historico (req, res){

    return res.status(200).json({
        message: "Todos usuarios",
        db: vhistoricos.filter(u => u.deletedAt == null)
    })

}

function encontrar_historico (req, res){ 
    
    let {id} = req.params;
    
    const idx = vhistoricos.findIndex(u => u.id == id)

    if(idx ==-1 || vhistoricos.delete_historico != null){
        return res.status(404).json({
            message: "nao encontrado",
            db: null

        })

    }
    
    return res.status(202).json({
        message: "Encontrei",
        db: vhistoricos[idx]
    })

}

function atualizar_historico (req, res){

    let {id} = req.params;
    
    const idx = vhistoricos[idx].findIndex(u => u.id == id)

    if(idx ==-1 || vhistoricos.delete_historico != null){
        return res.status(404).json({
            message: "nao encontrado",
            db: null

        })

    }

    let {genero, idade, nome, profissao} = req.body

    if(genero) vhistoricos[idx].genero = genero
    if(idade) vhistoricos[idx].idade = idade
    if(nome) vhistoricos[idx].nome = nome
    if(profissao) vhistoricos[idx].profissao = profissao

    
    return res.status(202).json({
        message: "Encontrei",
        db: vhistoricos[idx]
    })

}

function delete_historico(req, res){
    let{id} = req.params 

    const idx = vhistoricos[idx].findIndex(u => u.id == id)
    if(idx != -1){
        //vhistoricos.slice(idx) - Deletar definitivamente
        vhistoricos[idx].deletedAt = new Date
        return res.status(203).jason({
            message: "Usuario excluido"
        })
    }
        return res.status(404).jason({
            message: "Usuario nao encontrado"
        })
}

module.exports = {
    create_historico,
    read_historico,
    encontrar_historico,
    atualizar_historico,
    delete_historico
}