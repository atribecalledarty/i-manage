import React from 'react';
import { Link } from 'react-router-dom';

const UsersList = ({ users }) => {

    const renderUsers = users.map(user =>
        <div key={user.id}> 
            <Link to={`/users/${user.id}`}>{user.first_name} {user.last_name}</Link> 
        </div>
    );
    
    return (
        <div>
            {renderUsers}
            <Link to={`/users/new`}>Create New User</Link>
        </div>
    )
}

export default UsersList