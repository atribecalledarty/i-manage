export default function manageResources (
    state = { 
        units: [],
        users: [], 
        // loading_units: false, //we need both loading units and loading users because we need to make sure both have been loaded 
        // loading_users: false, //by separate ajax requests before updating some components..
        // loading_session: false, //added this loading to specify when loading a session status.
        errors: [], 
        isLoggedIn: false,
        user: undefined 
    }, action) {

    switch(action.type) {  
        case 'ADD_UNITS':
            console.log('in add units', {
                ...state,
                units: action.units,
            })
            return {
                ...state,
                units: action.units,
            }
        case 'ADD_USERS':
            console.log('in add users case', {
                ...state,
                users: action.users,
            });
            return {
                ...state,
                users: action.users,
            }
        case 'ADD_USER':
            console.log('in adduser case', {
                ...state,
                users: [ ...state.users, action.user ],
            })
            return {
                ...state,
                users: [ ...state.users, action.user ],
            }
        case 'ADD_ERRORS':
            console.log('in add errors case', {
                ...state,
                errors: [ ...action.errors ]
            })
            return {
                ...state,
                errors: [ ...action.errors ]
            }
        case 'CLEAR_ERRORS':
            console.log('in clear errors case', {
                ...state,
                errors: []
            })
            return {
                ...state,
                errors: []
            }
        case 'LOGIN':
            console.log('in login reduce case', {
                ...state,
                isLoggedIn: true,
                user: action.user,
            })
            return {
                ...state,
                isLoggedIn: true,
                user: action.user,
            }
        case 'LOGOUT':
            console.log('in logout reduce case', {
                ...state,
                isLoggedIn: false,
                user: undefined,
            })
            return {
                ...state,
                isLoggedIn: false,
                user: undefined,
            }
        case 'ADJUST_BALANCE':
            // amount, residency_id
            return {
                ...state,
                user: {
                    ...state.user,
                    residency: {
                        ...state.user.residency,
                        balance: state.user.residency.balance - action.payment.amount,
                        payments: [...state.user.residency.payments, action.payment]
                    }
                }
            }

        default:
            return state;
    }
}