import React from 'react';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';
import UserShow from './UserShow';
import { Link, Switch, Route } from 'react-router-dom';
import { Jumbotron, Col, Row, Button } from 'react-bootstrap';

const UsersContainer = ({ users, errors, user, addUser, isLoggedIn, deleteUser, history, clearErrors }) => {
    return(
        <div>
            {/* {console.log(users)} */}
            <Jumbotron id="user-container">
                <Row>
                    <Col md="auto">
                        <UsersList users={users} history={history}/>
                    </Col>
                    <Col>
                        <Switch>
                            <Route path={`/users/new`} render={routerProps => 
                                <NewUserForm 
                                    {...routerProps} 
                                    errors={errors}
                                    user={user}
                                    users={users} 
                                    addUser={addUser}
                                    isLoggedIn={isLoggedIn}
                                    isManager={user.manager_status}
                                    clearErrors={clearErrors}/>}/>
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