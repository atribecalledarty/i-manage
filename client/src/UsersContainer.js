import React from 'react';
import UsersList from './UsersList';
import UserShow from './UserShow';
import { Route, Switch, Link } from 'react-router-dom';
import CreateUser from './CreateUser';

const UsersContainer = ({ match, users, addUser, deleteUser }) => {
    return(
        <div>
            {/* {console.log(this.props.users)} */}
            <UsersList users={users} />
            <Link to={`/users/new`}>Create New User</Link>
            <Switch>
                <Route path={`${match.url}/new`} render={() => <CreateUser addUser={addUser}/>}/>
                <Route path={`${match.url}/:userId`} 
                    render={routerProps => <UserShow {...routerProps} users={users} deleteUser={deleteUser}/>}/>
            </Switch>
        </div>
    )

}

export default UsersContainer;