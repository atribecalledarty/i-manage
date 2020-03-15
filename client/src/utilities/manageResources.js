export default function manageResources (
    state = { 
        units: [],
        users: [], 
        loading: false, 
        errors: [], 
        isLoggedIn: false,
        user: {} 
    }, action) {

    switch(action.type) {
        case 'LOADING_RESOURCE':
            return {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users ],
                loading: true,
                isLoggedIn: state.isLoggedIn,
                user: state.user,
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
                isLoggedIn: state.isLoggedIn,
                user: state.user,
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
                isLoggedIn: state.isLoggedIn,
                user: state.user,
                errors: []
            }
        case 'ADD_ERRORS':
            return {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users ],
                loading: false,
                isLoggedIn: state.isLoggedIn,
                user: state.user,
                errors: [ ...action.user.errors ]
            }
        case 'LOGIN':
            return {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users ],
                loading: false,
                isLoggedIn: true,
                user: action.user,
                errors: [ ...action.user.errors ]
            }
        case 'LOGOUT':
            return {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users ],
                loading: false,
                isLoggedIn: false,
                user: {},
                errors: [ ...action.user.errors ]
            
            }
        default:
            return state;
    }
}