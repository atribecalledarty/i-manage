export default function manageResources (
    state = { 
        units: [],
        users: [], 
        loading_units: false, //we need both loading units and loading users because we need to make sure both have been loaded 
        loading_users: false, //by separate ajax requests before updating some components..
        loading_session: false, //added this loading to specify when loading a session status.
        errors: [], 
        isLoggedIn: false,
        user: {} 
    }, action) {

    switch(action.type) {
        case 'LOADING_UNITS':
            console.log('in loading units',
                {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users ],
                loading_units: true,
                loading_users: state.loading_users,
                loading_session: state.loading_session,
                isLoggedIn: state.isLoggedIn,
                user: state.user,
                errors: []
            })
            return {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users ],
                loading_units: true,
                loading_users: state.loading_users,
                loading_session: state.loading_session,
                isLoggedIn: state.isLoggedIn,
                user: state.user,
                errors: []
            }
        case 'LOADING_USERS':
            return {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users ],
                loading_units: state.loading_units,
                loading_users: true,
                loading_session: state.loading_session,
                isLoggedIn: state.isLoggedIn,
                user: state.user,
                errors: []
            }    
        case 'ADD_UNITS':
            console.log('in add units', {
                ...state,
                units: action.units,
                users: [ ...state.users ],
                loading_units: false,
                loading_users: state.loading_users,
                loading_session: state.loading_session,
                isLoggedIn: state.isLoggedIn,
                user: state.user,
                errors: []
            })
            return {
                ...state,
                units: action.units,
                users: [ ...state.users ],
                loading_units: false,
                loading_users: state.loading_users,
                loading_session: state.loading_session,
                isLoggedIn: state.isLoggedIn,
                user: state.user,
                errors: []
            }
        case 'ADD_USERS':
            console.log('in add users case', {
                ...state,
                units: [ ...state.units ],
                users: action.users,
                loading_units: state.loading_units,
                loading_users: false,
                loading_session: state.loading_session,
                isLoggedIn: state.isLoggedIn,
                user: state.user,
                errors: []
            });
            return {
                ...state,
                units: [ ...state.units ],
                users: action.users,
                loading_units: state.loading_units,
                loading_users: false,
                loading_session: state.loading_session,
                isLoggedIn: state.isLoggedIn,
                user: state.user,
                errors: []
            }
        case 'ADD_USER':
            console.log('in adduser case', {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users, action.user ],
                loading_units: state.loading_units,
                loading_users: false,
                loading_session: state.loading_session,
                isLoggedIn: state.isLoggedIn,
                user: state.user,
                errors: []
            })
            return {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users, action.user ],
                loading_units: state.loading_units,
                loading_users: false,
                loading_session: state.loading_session,
                isLoggedIn: state.isLoggedIn,
                user: state.user,
                errors: []
            }
        case 'ADD_ERRORS':
            console.log('in add errors case', {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users ],
                loading_units: state.loading_units,
                loading_users: state.loading_users,
                loading_session: state.loading_session,
                isLoggedIn: state.isLoggedIn,
                user: state.user,
                errors: [ ...action.errors ]
            })
            return {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users ],
                loading_units: state.loading_units,
                loading_users: state.loading_users,
                loading_session: state.loading_session,
                isLoggedIn: state.isLoggedIn,
                user: state.user,
                errors: [ ...action.errors ]
            }
        case 'CLEAR_ERRORS':
            console.log('in clear errors case', {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users ],
                loading_units: state.loading_units,
                loading_users: state.loading_users,
                loading_session: state.loading_session,
                isLoggedIn: state.isLoggedIn,
                user: state.user,
                errors: []
            })
            return {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users ],
                loading_units: state.loading_units,
                loading_users: state.loading_users,
                loading_session: state.loading_session,
                isLoggedIn: state.isLoggedIn,
                user: state.user,
                errors: []
            }
        case 'LOGIN':
            console.log('in login reduce case', {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users ],
                loading_units: state.loading_units,
                loading_users: state.loading_users,
                loading_session: false,
                isLoggedIn: true,
                user: action.user,
                errors: [ ]
            })
            return {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users ],
                loading_units: state.loading_units,
                loading_users: state.loading_users,
                loading_session: false,
                isLoggedIn: true,
                user: action.user,
                errors: [ ]
            }
        case 'LOGOUT':
            console.log('in logout reduce case', {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users ],
                loading_units: state.loading_units,
                loading_users: state.loading_users,
                loading_session: false,
                isLoggedIn: false,
                user: {},
                errors: [ ]
            })
            return {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users ],
                loading_units: state.loading_units,
                loading_users: state.loading_users,
                loading_session: false,
                isLoggedIn: false,
                user: {},
                errors: [ ]
            }
        case 'LOADING_SESSION':
            console.log('in loading session reduce case', {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users ],
                loading_units: state.loading_units,
                loading_users: state.loading_users,
                loading_session: true,
                isLoggedIn: state.isLoggedIn,
                user: {},
                errors: [ ]
            })
            return {
                ...state,
                units: [ ...state.units ],
                users: [ ...state.users ],
                loading_units: state.loading_units,
                loading_users: state.loading_users,
                loading_session: true,
                isLoggedIn: state.isLoggedIn,
                user: {},
                errors: [ ]
            }
        default:
            return state;
    }
}