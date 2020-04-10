import React from 'react';
import { ListGroup } from 'react-bootstrap';

const UsersList = ({ users, history }) => {
    const clickHandler = user => {
        history.push(`/users/${user.id}`)
    }

    const renderUsers = users.map(user =>
        <div key={user.id}> 
            <ListGroup.Item action onClick={() => clickHandler(user)}>{user.first_name} {user.last_name}</ListGroup.Item> 
        </div>
    );

    const buttonClickHandler = () => {
        history.push('/users/new')
    }
    
    return (
        <>
            <ListGroup>
                <ListGroup.Item action onClick={buttonClickHandler} variant="primary">
                    New User
                </ListGroup.Item>
                {renderUsers}
            </ListGroup>
        </>
    )
}

export default UsersList