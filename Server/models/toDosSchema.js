const mongoose = require('mongoose');

const toDosSchema = mongoose.Schema;

let toDo = new toDosSchema({
    toDo: String,
    date: Date,
    time: String,
    completed: Boolean
})

module.exports = mongoose.model('todolist', toDo)