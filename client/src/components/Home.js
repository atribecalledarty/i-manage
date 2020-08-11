import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import './Home.css';
import { connect } from 'react-redux';

class Home extends React.Component {
    componentDidUpdate() {
        if (this.props.isLoggedIn) this.props.history.push(`/auth_user/${this.props.user.id}/balance`);
    }
    
    render() {
        return (
            <Jumbotron className="home">
                    <h1>Welcome to Luna's Cabins</h1>
                    <p>Test users please sign in as Luna<br/>
                    username: itsluna@owl.com, password: nargles</p>
                    <p>Please <Button onClick={() => this.props.history.push('/login')} size="sm" variant="outline-primary">Login</Button> or 
                    &nbsp;<Button onClick={() => this.props.history.push('/signup')} size="sm" variant="outline-secondary">Register</Button> to continue!</p>
            </Jumbotron>
        )
    }
}

const mapState = state => ({ isLoggedIn: state.isLoggedIn, user: state.user })

export default connect(mapState)(Home);