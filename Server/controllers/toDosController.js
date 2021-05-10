const express = require('express')
const toDosBL = require('../models/toDosBL')

const router = express.Router()

router.route('/').get(async(req, resp) => {
    let data = await toDosBL.getAllToDos()
    return resp.json(data)
})

router.route('/:id').get(async(req, resp) => {
    let id = req.params.id
    let data = await toDosBL.getToDoById(id)
    return resp.json(data)
})

router.route('/').post(async(req, resp) => {
    let toDoObj = req.body
    let data = await toDosBL.addToDo(toDoObj)
    return resp.json(data)
})

router.route('/:id').put(async(req, resp) => {
    let id = req.params.id
    let toDoObj = req.body
    let data = await toDosBL.updateToDo(id, toDoObj)
    return resp.json(data)
})

router.route('/:id').delete(async(req, resp) => {
    let id = req.params.id
    let data = await toDosBL.deleteToDo(id)
    return resp.json(data)
})

module.exports = router