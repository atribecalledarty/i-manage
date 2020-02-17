export const fetchUnits = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_UNITS' })
        fetch('http://localhost:3002/units')
            .then(resp => resp.json())
            .then(units => {
                console.log(units) 
                dispatch({ type: 'ADD_UNITS', units })
            })
    }    
}