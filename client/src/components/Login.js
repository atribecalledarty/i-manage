import React, { Component } from 'react';
import FormErrors from './FormErrors';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.loginUser(this.state, this.props.history);
    }

    componentDidUpdate(){ 
        if (this.props.isLoggedIn) this.props.history.push(`/auth_user/${this.props.user.id}/balance`);
    }

    render() {
        return(
            <div className="login">
                <h1>Sign In</h1>
                <Form onSubmit={this.submitHandler}>
                    <FormErrors errors={this.props.errors} clearErrors={this.props.clearErrors}/>

                    <div className="login__userInfo">
                        Please sign in with manager account, Luna<br/>
                        username: itsluna@owl.com<br/>
                        password: nargles
                    </div>

                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={this.changeHandler} name="email" type="text" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.changeHandler} name="password" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Login;