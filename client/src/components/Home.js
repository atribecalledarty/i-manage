import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const renderNav = () => {
        if (isLoggedIn && user.manager_status) {
            return (
                <div>
                    <Link to="/units">See Units</Link>&nbsp;
                    <Link to="/users">See Users</Link>
                </div>
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
            <h1>Welcome to Luna's Tavern</h1>
            <nav>
                {renderNav()}
            </nav>
        </div>
    )
}

export default Home;