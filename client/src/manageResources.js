export default function manageResources (state = { units: [], users: [], loading: false }, action) {

    switch(action.type) {
        case 'LOADING_RESOURCE':
            return {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users ],
                loading: true
            }
        case 'ADD_UNITS':
            return {
                ...state,
                units: action.units,
                users: [ ...state.users ],
                loading: false
            }
        case 'ADD_USERS':
            return {
                ...state,
                units: [ ...state.units ],
                users: action.users,
                loading: false
            }
        default:
            return state;
    }
}