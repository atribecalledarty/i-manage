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
                        users={this.props.users} 
                        addUser={this.props.addUser}
                        isLoggedIn={this.props.isLoggedIn}
                        isManager={this.props.user.manager_status}/>}/>
                <Route path={`/users/:userId`} render={routerProps => 
                    <UserShow 
                        {...routerProps} 
                        users={this.props.users} 
                        deleteUser={this.props.deleteUser}/>}/>
            </Switch>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        users: state.users,
        errors: state.errors,
        isLoggedIn: state.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addUser: (state, isManager) => dispatch(postNewUser(state, isManager)),
        deleteUser: userId => dispatch(deleteUser(userId)),
        clearErrors: () => dispatch(clearErrors())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);