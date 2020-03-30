import React, { Component } from 'react';
import FormErrors from './FormErrors';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
        this.props.loginUser(this.state);
    }

    componentDidUpdate(){
        if (this.props.isLoggedIn && this.props.user.manager_status) {
            this.props.history.push('/units')
        } else if (this.props.isLoggedIn) {
            this.props.history.push(`/auth_user/${this.props.user.id}/balance`)
        }
    }

    render() {
        return(
            <Jumbotron id="login-jumbo">
                {console.log(this.props.user)}
                <Form onSubmit={this.submitHandler}>
                    <FormErrors errors={this.props.errors} clearErrors={this.props.clearErrors}/>
                    
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
                {/* {console.log(this.state)} */}
                {/* <FormErrors errors={this.props.errors}/>
                <form onSubmit={this.submitHandler}>
                    <label htmlFor="email">Email&nbsp;</label>
                    <input type="text"
                        name="email" 
                        id="email" 
                        onChange={this.changeHandler} 
                        value={this.state.email}/>
                    <br />
                    
                    <label htmlFor="password">Password&nbsp;</label>
                    <input type="password" 
                        name="password" 
                        id="password" 
                        onChange={this.changeHandler} 
                        value={this.state.password}/>
                    <br/>

                    <input type="submit" value="Sign In"/>
                </form> */}
            </Jumbotron>
        )
    }
}

export default Login;