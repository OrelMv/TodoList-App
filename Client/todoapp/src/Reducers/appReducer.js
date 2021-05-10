const appReducer = (state = {allTodos: [], currentTodo: {}}, action) => {
    switch(action.type){
        case 'ALL_TODOS':
            return {...state, allTodos: action.payload}
        
        default: 
            return {...state}
    }
}

export default appReducer
