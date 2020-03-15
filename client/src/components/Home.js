import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    clickHandler = () => {
        this.props.logoutUser();
    }

    componentDidUpdate() {
        console.log('in home component, loading => ', this.props.loading)
        // if (this.props.isLoggedIn && !this.props.loading) {
        //     this.props.history.push(`/auth_user/${this.props.user.id}`)
        // }
    }
    // componentDidUpdate(){
    //     if (this.props.isLoggedIn) {
    //         this.props.history.push(`/auth_user/${this.props.user.id}`)
    //     }
    // }

    renderNav = () => {
        if (this.props.isLoggedIn && this.props.user.manager_status) {
            return (
                <div>
                    <Link to="/units">See Units</Link>&nbsp;
                    <Link to="/users">See Users</Link>
                </div>
            )
        } else if (this.props.isLoggedIn) {
            return (
                <button onClick={this.clickHandler}>Logout</button>
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

    render() {
        return (
            <div>
                <h1>Welcome to Luna's Tavern</h1>
                <nav>
                    {this.renderNav()}
                </nav>
            </div>
        )
    }
}

export default Home;