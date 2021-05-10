import React,{useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

//components
import Todo from './Todo'


function AllToDos() {

    const todos = useSelector(state => state.allTodos)

    const [todosItems, setTodosItems] = useState('')

    useEffect(() => {

        let items = todos.map(todo => {
            return (
                <Todo todoData = {todo} key={todo._id} />
            )
        })

        setTodosItems(items)

    }, [todos])


    
    return (
        <div className="todos-body">
            {todosItems}
        </div>
    )
}

export default AllToDos
