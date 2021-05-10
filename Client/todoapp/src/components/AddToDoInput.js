import React, {useState} from 'react'


function AddToDo(props) {

    const [todoInput, setTodoInput] = useState('')


    let saveInputInLocalStorage = () => {
        
        if(todoInput != ''){
            localStorage.setItem('todoInput', todoInput)
            props.history.push('/dateAndTime')
        } else {
            alert('Please Enter Todo')
        }
        
    }

    return (
        <div className="adding-todo-section">

            <input type="text" onChange={(e) => setTodoInput(e.target.value)} className="add-todo-input"
            placeholder="Enter Todo..." /> <br />

            <input type="button" value="Pick Date & Time" className="pickDateAndTime-btn" onClick={saveInputInLocalStorage}/>
        </div>
    )
}

export default AddToDo
