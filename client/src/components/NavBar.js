import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ isLoggedIn, user, logoutUser, history }) => {
    const clickHandler = () => {
        logoutUser();
        history.push('/');
    }

    const renderNav = () => {
        if (isLoggedIn && user.manager_status) {
            return (
                <div>
                    <Link to="/units">See Units</Link>&nbsp;
                    <Link to="/users">See Users</Link>
                </div>
            )
        } else if (isLoggedIn) {
            return (
                <button onClick={clickHandler}>Logout</button>
            )
        } else {
            return (
                <div>   
                    <Link to="/login">Login</Link>&nbsp;
                    <Link to="/signup">Register</Link>
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