'use strict'

const repository = require('../repositories/task-repository');

exports.get = async(req, res, next) =>{
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao processar sua requisicao'
        })
    }
}

exports.getById = async(req,res,next)=>{
    try {
        var data = await repository.getById(req.params.id)
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send({
            message: 'Falha ao processar sua requisicao'
        })
    }
}

exports.post = async(req, res)=>{
    try {
        await repository.create(req.body)
        res.status(201).send({
            message:'Task salva com sucesso'
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: 'Falha ao processar sua requisicao'
        })
    }
}

exports.put = async(req,res,next)=>{
    try {
        await repository.update(req.params.id, req.body)
        res.status(200).send({
            message: 'Task atualizada com sucesso'
        })
    } catch (error) {
       res.status(400).send({
        message:'Falha ao atualizar a sua task'
       }) 
    }
}

exports.delete = async(req,res,next)=>{
    try {
        await repository.delete(req.body.id)
        res.status(200).send({
            message: 'Task removida com sucesso!'
        })
    } catch (error) {
    res.status(500).send({
        message: 'Falha ao remover a sua task'
    })        
    }
}
