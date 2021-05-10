import React,{useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import {useDispatch} from 'react-redux'

//component
import AddToDoInput from './AddToDoInput'
import AddToDoTimeAndDate from './AddToDoTimeAndDate'

import utils from '../utils'

function AddToDoHost() {

    const dispatch = useDispatch()

    useEffect(() => {

        let getData = async() => {
            let data = await utils.getAllData('http://localhost:8000/toDos')
            dispatch({type: 'ALL_TODOS', payload: data})
        }
        getData()

    }, [])

    

    return (
        <div>

            <Switch>
                <Route path="/dateAndTime" component={AddToDoTimeAndDate}></Route>
                <Route path="/" component={AddToDoInput}></Route>
            </Switch>

        </div>
    )
}

export default AddToDoHost
