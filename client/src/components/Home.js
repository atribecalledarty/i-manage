import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Home extends React.Component {
    componentDidUpdate() {
        if (this.props.isLoggedIn && !this.props.loading_users && !this.props.loading_units) {
            this.props.history.push(`/auth_user/${this.props.user.id}/balance`)
        }
    }
    
    render() {
        return (
            <Jumbotron fluid>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1>Welcome to Luna's Cabins</h1>
                    <p>Please <Button onClick={() => this.props.history.push('/login')} size="sm" variant="outline-primary">Login</Button> or 
                    &nbsp;<Button onClick={() => this.props.history.push('/signup')} size="sm" variant="outline-secondary">Register</Button> to continue!</p>
                </Col>
            </Jumbotron>
        )
    }

    
}

export default Home;