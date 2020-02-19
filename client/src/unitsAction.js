export const fetchUnits = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_UNITS' })
        fetch('http://localhost:3002/units')
            .then(resp => resp.json())
            .then(units => {
                console.log(units, 'in fetch request') 
                dispatch({ type: 'ADD_UNITS', units })
            })
    }    
}