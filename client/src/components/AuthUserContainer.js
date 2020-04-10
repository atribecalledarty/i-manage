import React from 'react';
import { Route } from 'react-router-dom';
import AuthUserBalance from './AuthUserBalance';
import AuthUserAccount from './AuthUserAccount';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { connect } from 'react-redux';
import { addPayment, deleteUser, logoutUser, clearErrors } from '../utilities/dispatchActions';

class AuthUserContainer extends React.Component {
    render(){
        return(
            <Jumbotron id="auth-user-jumbo">
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
            </Jumbotron>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
        errors: state.errors
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