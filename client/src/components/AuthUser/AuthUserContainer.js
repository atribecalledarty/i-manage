import React from 'react';
import { Route } from 'react-router-dom';
import AuthUserBalance from './AuthUserBalance';
import AuthUserAccount from './AuthUserAccount';
import { connect } from 'react-redux';
import { addPayment, deleteUser, logoutUser, clearErrors } from '../../utilities/dispatchActions';

class AuthUserContainer extends React.Component {
    render(){
        return(
            <div id="authUserContainer">
                <Route path={`/auth_user/:userId/balance`} render={routerProps =>
                    <AuthUserBalance 
                        {...routerProps}
                        users={this.props.users}
                        addPayment={this.props.addPayment}
                        clearErrors={this.props.clearErrors}
                        errors={this.props.errors}/>}/>
                <Route path={`/auth_user/:userId/account`} render={routerProps => 
                    <AuthUserAccount
                        {...routerProps}
                        users={this.props.users}
                        deleteUser={this.props.deleteUser}
                        logoutUser={this.props.logoutUser}
                        />}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
        errors: state.errors,
        user: state.user,
        isLoggedIn: state.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPayment: (amount, residencyId) => dispatch(addPayment(amount, residencyId)),
        deleteUser: userId => dispatch(deleteUser(userId)),
        logoutUser: () => dispatch(logoutUser()),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthUserContainer);