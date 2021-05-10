import React, {useState} from 'react'
import {DatePickerComponent} from '@syncfusion/ej2-react-calendars'
import utils from '../utils'
import {useDispatch} from 'react-redux'

function AddToDoTimeAndDate(props) {

    const dispatch = useDispatch()

    const [time, setTime] = useState('')
    const [date, setDate] = useState('')

    let addTodo = async() => {
        if(date != "" && time != ""){
            let todoObj = {
                toDo: localStorage.getItem('todoInput') ,
                time: time,
                date: date.toLocaleDateString()
            }

            let todos = await utils.addTodo('http://localhost:8000/toDos', todoObj)
            dispatch({type:'ALL_TODOS', payload: todos})
            alert(`${localStorage.getItem('todoInput')} has been added at ${date.toLocaleDateString()}, ${time} `)
            props.history.push('/')

        } else {
            alert("Cant add empty fields")
        }
    }

    return (
        <div>
            <div className="todo-display-date-page">Todo: {localStorage.getItem('todoInput')}</div>

            <div  className="body-timeDatePage">
                <div className="calendar">
                    <DatePickerComponent placeholder="MM/DD/YYYY" onChange={(e) => setDate(new Date(e.target.value))}/>
                </div>

                <div>
                    <input type="text" placeholder="Enter Time..." className="time-input" onChange={(e)=> setTime(e.target.value)}/>
                </div> 
                
            </div>

            <input type="button" value="ADD TODO" className="add-todo-btn" onClick={addTodo}/>
        </div>
    )
}

export default AddToDoTimeAndDate
