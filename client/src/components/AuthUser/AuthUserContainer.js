import React from 'react';
import { Route } from 'react-router-dom';
import AuthUserBalance from './AuthUserBalance';
import AuthUserAccount from './AuthUserAccount';
import { connect } from 'react-redux';
import { addPayment, deleteUser, logoutUser } from '../../utilities/dispatchActions';

class AuthUserContainer extends React.Component {
    render() {
        return <div className="authUserContainer">
            <Route path={`/auth_user/:userId/balance`} render={routerProps =>
                <AuthUserBalance 
                    {...routerProps}
                    users={this.props.users}
                    addPayment={this.props.addPayment}/>}/>
            <Route path={`/auth_user/:userId/account`} render={routerProps => 
                <AuthUserAccount
                    {...routerProps}
                    users={this.props.users}
                    deleteUser={this.props.deleteUser}
                    logoutUser={this.props.logoutUser}
                    />}/>
        </div>
    }
}

const mapState = state => ({
        users: state.users,
        user: state.user
})

export default connect(mapState, { addPayment, deleteUser, logoutUser })(AuthUserContainer);