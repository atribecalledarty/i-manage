export const fetchUnits = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_RESOURCE' })
        fetch('http://localhost:3002/units')
            .then(resp => resp.json())
            .then(units => {
                // console.log(units, 'in fetch request') 
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
                // console.log(users, 'in fetch request') 
                dispatch({ type: 'ADD_USERS', users })
            })
    }    
}

export const postNewUser = (state) => {
    return dispatch => {
        dispatch({ type: 'LOADING_RESOURCE' })

        const body = JSON.stringify(state);
        fetch('http://localhost:3002/users', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body
        })
            .then(resp => resp.json())
            .then(user => {
                console.log(user);
                if (user.errors) {
                    dispatch({ type: 'ADD_ERRORS', user })
                } else {
                    dispatch({ type: 'ADD_NEW_USER', user })
                }
            })
    }
}

export const deleteUser = userId => {
    return dispatch => {
        dispatch({ type: 'LOADING_RESOURCE' })
        // const body = JSON.stringify(userId);
        fetch(`http://localhost:3002/users/${userId}`, {
            method: "DELETE"
        })
            .then(resp => resp.json())
            .then(user => {
                console.log(user);
                dispatch({ type: 'DELETE_USER', user})
            })

    }
}