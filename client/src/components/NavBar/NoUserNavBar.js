import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NoUserNavBar = ({ history }) => {
    return (
        <>
            <Navbar.Collapse className="justify-content-end">
                <Nav onSelect={selectedKey => history.push(selectedKey)}>
                    <Nav.Link eventKey="/login">Login</Nav.Link>&nbsp;
                    <Nav.Link eventKey="/signup">Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </>
    )
}

export default NoUserNavBar;