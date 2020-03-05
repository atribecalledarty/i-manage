export default function manageResources (state = { units: [], users: [], loading: false, errors: [] }, action) {

    switch(action.type) {
        case 'LOADING_RESOURCE':
            return {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users ],
                loading: true,
                errors: []
            }
        case 'ADD_UNITS':
            // console.log({
            //     ...state,
            //     units: action.units,
            //     users: [ ...state.users ],
            //     loading: false,
            //     errors: []
            // })
            return {
                ...state,
                units: action.units,
                users: [ ...state.users ],
                loading: false,
                errors: []
            }
        case 'ADD_USERS':
            // console.log({
            //     ...state,
            //     units: [ ...state.units ],
            //     users: action.users,
            //     loading: false,
            //     errors: []
            // })
            return {
                ...state,
                units: [ ...state.units ],
                users: action.users,
                loading: false,
                errors: []
            }
        case 'ADD_NEW_USER':
            return {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users, action.user ],
                loading: false,
                errors: []
            }
        case 'ADD_ERRORS':
            return {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users ],
                loading: false,
                errors: [ ...action.user.errors ]
            }
        case 'DELETE_USER':
            return {
                ...state,
                units: [ ...state.units ],
                users: state.users.filter(user => user.id !== action.user.id ),
                loading: false,
                errors: []

            }
        default:
            return state;
    }
}