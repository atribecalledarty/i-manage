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
            console.log('in add units', {
                ...state,
                units: action.units,
                users: [ ...state.users ],
                loading: false,
                isLoggedIn: state.isLoggedIn,
                user: state.user,
                errors: []
            })
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
            console.log('in add users case', {
                ...state,
                units: [ ...state.units ],
                users: action.users,
                loading: false,
                isLoggedIn: state.isLoggedIn,
                user: state.user,
                errors: []
            });
            return {
                ...state,
                units: [ ...state.units ],
                users: action.users,
                loading: false,
                isLoggedIn: state.isLoggedIn,
                user: state.user,
                errors: []
            }
        case 'ADD_USER':
            return {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users, action.user ], 
                loading: false,
                isLoggedIn: state.isLoggedIn,
                user: state.user,
                errors: []
            }
        case 'ADD_ERRORS':
            console.log('in add errors case', {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users ],
                loading: false,
                isLoggedIn: state.isLoggedIn,
                user: state.user,
                errors: [ ...action.errors ]
            })
            return {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users ],
                loading: false,
                isLoggedIn: state.isLoggedIn,
                user: state.user,
                errors: [ ...action.errors ]
            }
        case 'LOGIN':
            console.log('in login reduce case', {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users ],
                loading: false,
                isLoggedIn: true,
                user: action.user,
                errors: [ ]
            })
            return {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users ],
                loading: false,
                isLoggedIn: true,
                user: action.user,
                errors: [ ]
            }
        case 'LOGOUT':
            console.log('in logout reduce case', {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users ],
                loading: false,
                isLoggedIn: false,
                user: {},
                errors: [ ]
            })
            return {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users ],
                loading: false,
                isLoggedIn: false,
                user: {},
                errors: [ ]
            }
        default:
            return state;
    }
}