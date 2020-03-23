import axios from 'axios';

const fetchAndLoadUnits = dispatch => {
    dispatch({ type: 'LOADING_UNITS' })
    fetch('http://localhost:3002/units')
            .then(resp => resp.json())
            .then(units => {
                // console.log(units, 'in fetch request') 
                dispatch({ type: 'ADD_UNITS', units })
            })
}

const fetchAndLoadUsers = dispatch => {
    dispatch({ type: 'LOADING_USERS' })
    fetch('http://localhost:3002/users')
        .then(resp => resp.json())
        .then(users => {
            // console.log(users, 'in fetch request') 
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

export const postNewUser = (state, isManager) => {
    return dispatch => {
        dispatch({ type: 'LOADING_USERS' })

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
            .then(json => {
                console.log(json);
                if (json.errors) {
                    dispatch({ type: 'ADD_ERRORS', errors: json.errors })
                } else {
                    // fetchAndLoadUsers(dispatch);
                    // fetchAndLoadUnits(dispatch);
                    dispatch({ type: 'ADD_USER', user: json.user })
                    if (!isManager) {
                        dispatch({ type: 'LOGIN', user: json.user })
                    }
                }
            })
    }
}

export const deleteUser = userId => {
    return dispatch => {
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
        axios.get('http://localhost:3002/logged_in',{
            withCredentials: true
        })
            .then(resp => {
                // console.log('in axios req', resp)
                if (resp.data.logged_in) {
                    dispatch({ type: 'LOGIN', user: resp.data.user })
                } else {
                    dispatch({ type: 'LOGOUT' })
                }
            })
    }
}

export const loginUser = user => {
    return dispatch => {
        axios.post('http://localhost:3002/login', { user }, {withCredentials: true})
            .then(resp => {
                // console.log(resp);
                if (resp.data.logged_in) {
                    dispatch({ type: 'LOGIN', user: resp.data.user })
                } else {
                    // console.log(resp.data.errors);
                    dispatch({ type: 'ADD_ERRORS', errors: resp.data.errors })
                }
            })
    }
}

export const logoutUser = () => {
    return dispatch => {
        axios.delete('http://localhost:3002/logout', {withCredentials: true})
            .then(() => {
                dispatch({ type: 'LOGOUT' })
            })
    }
}

export const addPayment = (amount, residency_id) => {
    return dispatch => {
        console.log('hi');
        axios.post('http://localhost:3002/payments', { amount, residency_id })
            .then(resp => {
                // console.log(resp)
                if (resp.data.errors) {
                    dispatch({ type: 'ADD_ERRORS', errors: resp.data.errors })
                } else {
                    fetchAndLoadUnits(dispatch);
                    fetchAndLoadUsers(dispatch);
                }
            })
    }
}