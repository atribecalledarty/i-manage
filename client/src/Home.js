import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Luna's Tavern</h1>
            <Link to="/units">See Units</Link>&nbsp;
            <Link to="/users">See Users</Link>
        </div>
    )
}

export default Home;