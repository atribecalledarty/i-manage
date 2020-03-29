import React from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { ListGroup } from 'react-bootstrap';

const UsersList = ({ users, history }) => {
    const clickHandler = user => {
        history.push(`/users/${user.id}`)
    }

    const renderUsers = users.map(user =>
        <div key={user.id}> 
            {/* <Link to={`/users/${user.id}`}>{user.first_name} {user.last_name}</Link>  */}
            <ListGroup.Item action onClick={() => clickHandler(user)}>{user.first_name} {user.last_name}</ListGroup.Item> 
        </div>
    );
    
    return (
        <Jumbotron>
            <ListGroup>
                {renderUsers}
            </ListGroup>
        </Jumbotron>
    )
}

export default UsersList