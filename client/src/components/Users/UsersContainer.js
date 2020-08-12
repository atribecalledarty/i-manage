import React from 'react';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';
import UserShow from './UserShow';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { postNewUser, deleteUser, clearErrors } from '../../utilities/dispatchActions';
import './UsersContainer.css'

class UsersContainer extends React.Component {
    render() {
        return <div className="usersContainer">
            <UsersList users={this.props.users} history={this.props.history}/>
            <Switch>
                <Route path={`/users/new`} render={routerProps => 
                    <NewUserForm 
                        {...routerProps} 
                        user={this.props.user}
                        postNewUser={this.props.postNewUser}/>}/>
                <Route path={`/users/:userId`} render={routerProps => 
                    <UserShow 
                        {...routerProps} 
                        users={this.props.users} 
                        deleteUser={this.props.deleteUser}/>}/>
            </Switch>
        </div>
    }
}

const mapState = state => ({
        user: state.user,
        users: state.users,
        errors: state.errors,
        isLoggedIn: state.isLoggedIn
})

export default connect(mapState, { postNewUser, deleteUser, clearErrors })(UsersContainer);