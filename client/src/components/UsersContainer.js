import React from 'react';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';
import UserShow from './UserShow';
import { Link, Switch, Route } from 'react-router-dom';

const UsersContainer = ({ users, errors, user, addUser, isLoggedIn, deleteUser }) => {
    return(
        <div>
            {/* {console.log(users)} */}
            <UsersList users={users} />
            <Link to={`/users/new`}>Create New User</Link>
            <Switch>
                <Route path={`/users/new`} render={routerProps => 
                    <NewUserForm 
                        {...routerProps} 
                        errors={errors}
                        user={user} 
                        addUser={addUser}
                        isLoggedIn={isLoggedIn}
                        isManager={user.manager_status}/>}/>
                <Route path={`/users/:userId`} render={routerProps => 
                    <UserShow 
                        {...routerProps} 
                        users={users} 
                        deleteUser={deleteUser}/>}/>
                </Switch>
        </div>
    )

}

export default UsersContainer;