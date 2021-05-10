const ToDo = require('./toDosSchema')

let getAllToDos = () => {
    return new Promise((resolve, reject) => {
        ToDo.find({}, (err, toDos) => {
            if(err){
                reject(err)
            } else {
                resolve(toDos)
            }
        })
    })
}

let getToDoById = (id) => {
    return new Promise((resolve, reject) => {
        ToDo.findById(id, (err, toDo) => {
            if(err){
                reject(err)
            } else {
                resolve(toDo)
            }
        })
    })
}

let addToDo = (toDoObj) => {
    return new Promise((resolve, reject) => {
        let toDo = new ToDo({
            toDo: toDoObj.toDo,
            date: toDoObj.date,
            time: toDoObj.time,
            completed: false
        })
        toDo.save(async (err) => {
            if(err){
                reject(err)
            } else {
                let allTodos = await getAllToDos()
                resolve(allTodos)
            }
        })
    })
}

let updateToDo = (id, toDoObj) => {
    return new Promise((resolve, reject) => {
        ToDo.findByIdAndUpdate(id, {
            toDo: toDoObj.toDo,
            // date: toDoObj.date,
            // time: todoObj.time,
            completed: toDoObj.completed
        }, async (err) => {
            if(err){
                reject(err)
            } else {
                let allTodos = await getAllToDos()
                resolve(allTodos)
            }
        })
    })
}

let deleteToDo = (id) => {
    return new Promise((resolve, reject) => {
        ToDo.findByIdAndDelete(id, async (err) => {
            if(err){
                reject(err)
            } else {
                let todos = await getAllToDos()
                resolve(todos)
            }
        })
    })
}

module.exports = {getAllToDos, getToDoById, addToDo, updateToDo, deleteToDo}