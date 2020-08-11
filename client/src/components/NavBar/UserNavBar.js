import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const UserNavBar = ({ user, history, logoutUser }) => {
    return <>
        <Nav onSelect={selectedKey => history.push(selectedKey)}>
            <Nav.Link eventKey={`/auth_user/balance`}>Balance</Nav.Link>&nbsp;
            <Nav.Link eventKey={`/auth_user/account`}>Account</Nav.Link>&nbsp;
        </Nav>
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                <Button onClick={() => history.push(`/auth_user/balance`)} 
                size="sm" variant="link">{user.first_name} {user.last_name},</Button> 
                <Button onClick={() => logoutUser(history)} size="sm" variant="outline-secondary">Logout</Button>
            </Navbar.Text>
        </Navbar.Collapse>
    </>

}

export default UserNavBar;