var vusers = []

function lista_insumos(req, res){ 
    let {areia, pedra, cimento, pedrisco} = req.body

    var ouser = { 
        "id": vusers.length + 1,
        "areia":areia,
        "pedra":pedra,
        "cimento":cimento,
        "pedrisco":pedrisco,
        "deletedAt":null
    }
    vusers.push(ouser)

    return res.status(201).json({
        message:"Insumos feitos"
    })
}

function read_insumos(req, res){
    return res.status(200).json({
        message:"Todos os insumos",
        db: vusers.filter(u => u.deletedAt == null)
    })
}

function read_parametros(req, res){
    let{id} = req.params;

    const idx = vusers.findIndex(u => u.id === id) 

    if(idx === -1 || vusers[idx].deletedAt != null){
        return res.status(404).json({
            message: "Insumos não encontrado",
            db: null
        })
    }

    return res.status(202).json({
        message:"Insumos encontrado",
        db: vusers[idx]
    })
}

function update_insumos(req, res){
    let{id} = req.params;

    const idx = vusers.findIndex(u => u.id == id) 

    if(idx === -1 || vusers[idx].deletedAt != null){
        return res.status(404).json({
            message: "Insumos não encontrado",
            db: null
        })
    }

    let {areia, pedra, cimento, pedrisco} = req.body

    if(areia) vusers[idx].areia = areia;
    if(pedra) vusers[idx].pedra = pedra;
    if(cimento) vusers[idx].cimento = cimento;
    if(pedrisco) vusers[idx].pedrisco = pedrisco;

    return res.status(202).json({
        message:"Insumos encontrado",
        db: vusers[idx]
    })
}

function delete_insumos(req, res){
    let{id} = req.params;

    const idx = vusers.findIndex(u => u.id == id) 

    if(idx != -1){
        /*vusers.slice(idx)*/
        const express = require('express'); 
        const app = express();              
        
        app.use(express.json());users[idx].deletedAt = new Date()
        return res.status(203).json({ 
            message: "Insomos deletado"
        })
    }

    return res.status(404).json({
        message: "Insumos não encontrado"
    })
    

}

module.exports = {
    lista_insumos,
    read_insumos,
    read_insumos,
    read_parametros,
    update_insumos,
    delete_insumos
}