import React from 'react';
// import { NavLink, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const NavBar = ({ isLoggedIn, user, logoutUser, history }) => {
    const clickHandler = () => {
        logoutUser();
        history.push('/');
    }

    const renderNav = () => {
        if (isLoggedIn && user.manager_status) {
            return (
                <>
                    <Nav onSelect={selectedKey => history.push(selectedKey)}>
                        <Nav.Link eventKey="/units">Units</Nav.Link>&nbsp;
                        <Nav.Link eventKey="/users">Users</Nav.Link>&nbsp;
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Button onClick={() => history.push(`/auth_user/${user.id}`)} 
                            size="sm" variant="link">{user.first_name} {user.last_name},</Button> 
                            <Button onClick={clickHandler} size="sm" variant="outline-secondary">Logout</Button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </>
            )
        } else if (isLoggedIn) {
            return (
                <>
                    <Nav onSelect={selectedKey => history.push(selectedKey)}>
                            <Nav.Link eventKey={`/auth_user/${user.id}/balance`}>Balance</Nav.Link>&nbsp;
                            <Nav.Link eventKey={`/auth_user/${user.id}/account`}>Account</Nav.Link>&nbsp;
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Button onClick={() => history.push(`/auth_user/${user.id}`)} 
                            size="sm" variant="link">{user.first_name} {user.last_name},</Button> 
                            <Button onClick={clickHandler} size="sm" variant="outline-secondary">Logout</Button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </>
            )
        } else {
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
    }
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand>Luna's Cabins</Navbar.Brand>
                {renderNav()}
            </Container>
        </Navbar>
    )
}

export default NavBar;