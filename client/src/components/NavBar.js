import React from 'react';
import { NavLink, Link } from 'react-router-dom';
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
                <Navbar bg="light" variant="light">
                    <Container>
                    <Navbar.Brand href="" onClick={() => history.push("/")}>Luna's Cabins</Navbar.Brand>
                    <Nav onSelect={selectedKey => history.push(selectedKey)}>
                        <Nav.Link eventKey="/units">Units</Nav.Link>&nbsp;
                        <Nav.Link eventKey="/users">Users</Nav.Link>&nbsp;
                    
                        {/* <Nav.Link href="/units">Units</Nav.Link>
                        <Nav.Link href="/users">Users</Nav.Link> */}
                        {/* <Nav.Link href={`/auth_user/${user.id}`}>My Page</Nav.Link> */}
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Logged in as: <Button onClick={() => history.push(`/auth_user/${user.id}`)} 
                            size="sm" variant="link">{user.first_name} {user.last_name},</Button> 
                            <Button onClick={clickHandler} size="sm" variant="outline-secondary">Logout</Button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
                // <div>
                //     <Link to="/units">See Units</Link>&nbsp;
                //     <Link to="/users">See Users</Link>&nbsp;
                //     <Link to={`/auth_user/${user.id}`}>My Page</Link>&nbsp;
                //     <button onClick={clickHandler}>Logout</button>
                // </div>
            )
        } else if (isLoggedIn) {
            return (
                <button onClick={clickHandler}>Logout</button>
            )
        } else {
            return (
                <div>   
                    <NavLink to="/login">Login</NavLink>&nbsp;
                    <NavLink to="/signup">Register</NavLink>
                </div>
            )
        }
    }
    return (
        <div>
            <nav>
                {renderNav()}
            </nav>
        </div>
    )
}

export default NavBar;