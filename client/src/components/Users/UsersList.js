import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './UsersList.css'

function UsersList ({ users, history }) {
    return <ListGroup>
        <ListGroup.Item action onClick={() => history.push('/users/new')} variant="primary">
            New User
        </ListGroup.Item>
        {users.map((user, index) => <ListGroup.Item key={index} action onClick={() => history.push(`/users/${user.id}`)}>
                {user.first_name} {user.last_name}
            </ListGroup.Item>)}
    </ListGroup>
}

export default UsersList