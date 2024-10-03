const express = require('express')
const app = express()

app.use( express.json() )

/*var vusers = []

function create_user(pgenero, pidade, pnome, pprofissao){
    var ouser = {
        "id": vusers.length+1,
        "genero":pgenero,
        "idade":pidade,
        "nome":pnome,
        "profissao":pprofissao 
    }
    vusers.push(ouser)
}
*/
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

app.post('/user', create_user)

function read_users (req, res) {

    return res.status(200).json({
        message: "Todos usuarios",
        db: vusers.filter(u => u.deletedAt == null)
    })

}

app.get('/user',read_users)

/*app.get('/user/:id', (req, res) => {

    //let id = req.params.id
    let {id} = req.params;

    for(let i = 0; i < vusers.length; i++){
        if( vusers[i].id == id ){
            return res.status(200).json({
                message: "Usuario encontrado",
                db: vusers[i]
            })

        }

    }
    

    return res.status(404).json({
        message: "Usuario nao encontrado",
        db: []
    })

})*/

function encontrar_id (req, res) { 
    
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

app.get('/user/:id', encontrar_id)

function encontrar_user (req, res) {

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

app.put('/user/:id',encontrar_user)

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

app.delete('/user/:id', delete_user)

app.listen(3000, () => {
    console.log('http://localhost:3000')
})

