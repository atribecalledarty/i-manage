import React from 'react';
import UsersList from './UsersList';
import { Link } from 'react-router-dom';

const UsersContainer = ({ users }) => {
    return(
        <div>
            {/* {console.log(users)} */}
            <UsersList users={users} />
            <Link to={`/users/new`}>Create New User</Link>
        </div>
    )

}

export default UsersContainer;