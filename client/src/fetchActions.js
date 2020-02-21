export const fetchUnits = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_RESOURCE' })
        fetch('http://localhost:3002/units')
            .then(resp => resp.json())
            .then(units => {
                console.log(units, 'in fetch request') 
                dispatch({ type: 'ADD_UNITS', units })
            })
    }    
}

export const fetchUsers = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_RESOURCE' })
        fetch('http://localhost:3002/users')
            .then(resp => resp.json())
            .then(users => {
                console.log(users, 'in fetch request') 
                dispatch({ type: 'ADD_USERS', users })
            })
    }    
}