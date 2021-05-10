import React,{useEffect, useState} from 'react'
import utils from '../utils'

import {useDispatch} from 'react-redux'

//components
import Popup from './Popup'

function Todo(props) {

    const [completedStatus, setCompletedStatus] = useState('')
    const [date, setDate] = useState('')
    const [isCurrentDate, setIsCurrentDate] = useState(false)
    const [isCurrentTime, setIsCurrentTime] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {

        let taskStatus = "todo"
        if(props.todoData.completed){
            taskStatus = "todo-completed"
        }

        let reminderDate = new Date(props.todoData.date)
        let todaysDate = new Date()
        if(reminderDate.toLocaleDateString() == todaysDate.toLocaleDateString()){
            setIsCurrentDate(true)
        }

        setDate(reminderDate.toLocaleDateString())
        setCompletedStatus(taskStatus)

    }, [props.todoData])


    let deleteTodo = async() => {
        alert(`Todo: ${props.todoData.toDo} has been deleted`)
        let todos = await utils.deleteTodo('http://localhost:8000/toDos/',props.todoData._id)
        dispatch({type: 'ALL_TODOS', payload: todos})
    }


    let changeTodoCompletedStatus = async(completed) => {
        let todoObj = {
            toDo: props.todoData.toDo,
            date: props.todoData.date,
            time: props.todoData.time,
            completed: completed
        }
        let todos = await utils.updateTodo('http://localhost:8000/toDos/', props.todoData._id, todoObj)
        dispatch({type: 'ALL_TODOS', payload: todos})
    }
    


    if(isCurrentDate){
        setInterval(() => {
            let dt = new Date()
            let hou = dt.getHours()
            let min = dt.getMinutes()
            let sec = dt.getSeconds()
            let currentTime = `${hou}:${min}:${sec}`
            if(min < 10){
                currentTime = `${hou}:0${min}:${sec}`
            }
            let todoTime = `${props.todoData.time}:0`
            if(currentTime == todoTime){
                setIsCurrentTime(true)
            }

        }, 1000)
    }



    let showPopup = () => {
        if(isCurrentTime){
            let date = new Date(props.todoData.date)
            return (
                <Popup trigger={isCurrentTime} closeWindow={setIsCurrentTime}>
                    {props.todoData.completed? 
                        <div>
                            <h2>Well Done For Doing Task: {props.todoData.toDo}! Keep Going!</h2>
                            <p style={{fontSize: '17px'}}>Task: completed</p>
                        </div>
                        :
                        <div>
                            <h2>Reminder to {props.todoData.toDo} at {date.toLocaleDateString()}, {props.todoData.time}!</h2>
                            <p style={{fontSize: '17px'}}>Task: uncompleted</p>
                            <input type="button" value="Mark As Completed" 
                                onClick={() => changeTodoCompletedStatus(true)} style={{marginLeft: '10px'}} />
                        </div>
                    }
                </Popup>
            )
        }
        else {
            return ""
        }
    }


    return (
        <div >
            <div className="date-time-display">{date}, {props.todoData.time}</div>

            <div className="single-todo-body">
                <div className={completedStatus}>{props.todoData.toDo}</div>
                <div>
                {
                    props.todoData.completed? 
                        <input type="button" value="✘" title="Mark As Uncompleted" className="check-btn" onClick={() => changeTodoCompletedStatus(false)}/> 
                        : 
                        <input type="button" value="✓" title="Mark As Completed" className="check-btn" onClick={() => changeTodoCompletedStatus(true)}/>
                }
                </div> 
                <div>
                    <input type="button" value="Delete" title="Delete" className="del-btn" onClick={deleteTodo}/>
                </div>
            </div>

            {showPopup()}

        </div>
    )
}

export default Todo
