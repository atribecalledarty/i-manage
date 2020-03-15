import axios from 'axios';

const fetchAndLoadUnits = dispatch => {
    dispatch({ type: 'LOADING_RESOURCE' })
    fetch('http://localhost:3002/units')
            .then(resp => resp.json())
            .then(units => {
                // console.log(units, 'in fetch request') 
                dispatch({ type: 'ADD_UNITS', units })
            })
}

const fetchAndLoadUsers = dispatch => {
    dispatch({ type: 'LOADING_RESOURCE' })
    fetch('http://localhost:3002/users')
        .then(resp => resp.json())
        .then(users => {
            console.log(users, 'in fetch request') 
            dispatch({ type: 'ADD_USERS', users })
        })
}

export const addUnits = () => {
    return dispatch => {
        fetchAndLoadUnits(dispatch);
    }    
}

export const addUsers = () => {
    return dispatch => {
        fetchAndLoadUsers(dispatch);
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
                    fetchAndLoadUsers(dispatch);
                    fetchAndLoadUnits(dispatch);
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
            .then(() => {
                fetchAndLoadUsers(dispatch);
                fetchAndLoadUnits(dispatch);        
            })
        }
}

export const addResidency = (userId, unitId) => {
    return dispatch => {
        dispatch({ type: 'LOADING_RESOURCE' })
        const body = JSON.stringify({ user_id: userId, unit_id: unitId })
        fetch(`http://localhost:3002/residencies`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body
        })
            .then(() => {
                fetchAndLoadUsers(dispatch);
                fetchAndLoadUnits(dispatch);        
            })    
    }
}

export const deleteResidency = (id) => {
    return dispatch => {
        dispatch({ type: 'LOADING_RESOURCE' })
        const body = JSON.stringify({ id })
        fetch(`http://localhost:3002/residencies/${id}`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body
        })
            .then(() => {
                fetchAndLoadUsers(dispatch);
                fetchAndLoadUnits(dispatch);        
            })    
    }
}

export const setLoginStatus = () => {
    return dispatch => {
        axios.get('http://localhost:3002/logged_in', {
            withCredentials: true
        })
            .then(resp => {
                if (resp.data.logged_in) {
                    dispatch({ type: 'LOGIN', action: resp })
                } else {
                    dispatch({ type: 'LOGOUT' })
                }
            })
    }
}