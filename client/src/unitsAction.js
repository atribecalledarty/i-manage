export const fetchUnits = () => {
    dispatch({ type: 'LOADING_UNITS' })
    fetch('localhost:3001/units')
        .then(resp => resp.json())
        .then(units => dispatch({ type: 'ADD_UNITS', units }))
}