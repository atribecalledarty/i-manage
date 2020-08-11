import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const NoUserNavBar = ({ history }) => {
    return <>
        <Navbar.Collapse className="justify-content-end">
            <Nav >
                <Button onClick={() => history.push('/login')} size="sm" variant="outline-primary">Sign In</Button>&nbsp;
                <Button onClick={() => history.push('/signup')} size="sm" variant="outline-secondary">Register</Button>
            </Nav>
        </Navbar.Collapse>
    </>
    
}

export default NoUserNavBar;