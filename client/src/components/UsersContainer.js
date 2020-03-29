import React from 'react';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';
import UserShow from './UserShow';
import { Link, Switch, Route } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const UsersContainer = ({ users, errors, user, addUser, isLoggedIn, deleteUser, history }) => {
    return(
        <div>
            {/* {console.log(users)} */}
            <Jumbotron>
                <Row>
                    <UsersList users={users} history={history}/>
                    <Col>
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
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    )

}

export default UsersContainer;