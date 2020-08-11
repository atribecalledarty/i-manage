import React from 'react';
import Button from 'react-bootstrap/Button';
import './Home.css';
import { connect } from 'react-redux';

class Home extends React.Component {
    render() {
        return <div className="home">
            <h1>Welcome to Luna's Cabins</h1>
            {this.props.user ? 
                <p>Hi {this.props.user.first_name}, Checkout your balance and payments!</p> :
                <p><span className="home__test">
                    Test users please sign in as Luna<br/>
                    username: itsluna@owl.com, password: nargles</span><br/>
                    Please <Button onClick={() => this.props.history.push('/login')} size="sm" variant="outline-primary">Login</Button> or 
                    &nbsp;<Button onClick={() => this.props.history.push('/signup')} size="sm" variant="outline-secondary">Register</Button> to continue!
                </p>}
        </div>
    }
}

const mapState = state => ({ isLoggedIn: state.isLoggedIn, user: state.user })

export default connect(mapState)(Home);