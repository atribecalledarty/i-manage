import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Luna's Tavern</h1>
            <nav>
                <Link to="/units">See Units</Link>&nbsp;
                <Link to="/users">See Users</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Register</Link>
            </nav>
        </div>
    )
}

export default Home;