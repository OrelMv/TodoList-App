import axios from 'axios'

let getAllData = async(url) => {
    let todos = await axios.get(url)
    return todos.data
}

let getTodoById = async(url, id) => {
    let todo = await axios.get(url+id)
    return todo.data
}

let addTodo = async(url, todoObj) => {
    let resp = await axios.post(url, todoObj)
    return resp.data
}

let updateTodo = async(url, id, todoObj) => {
    let resp = await axios.put(url+id, todoObj)
    return resp.data
}

let deleteTodo = async(url, id) => {
    let resp = await axios.delete(url+id)
    return resp.data
}

export default {getAllData, getTodoById, addTodo, updateTodo, deleteTodo}