import React from 'react';
import { Route } from 'react-router-dom';
import AuthUserBalance from './AuthUserBalance';
import AuthUserAccount from './AuthUserAccount';
import Jumbotron from 'react-bootstrap/Jumbotron';

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

export default AuthUserContainer;