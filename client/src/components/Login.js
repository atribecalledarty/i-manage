import React, { Component } from 'react';
import FormErrors from './FormErrors';

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
        console.log('submitted form')
        this.props.loginUser(this.state)
        if (!this.props.errors) {
            console.log('in if statement')
            this.props.history.push('/home')
        }
    }

    render() {
        return(
            <div>
                {/* {console.log(this.state)} */}
                <FormErrors errors={this.props.errors}/>
                <form onSubmit={this.submitHandler}>
                    <label htmlFor="email">Email </label>
                    <input type="text"
                        name="email" 
                        id="email" 
                        onChange={this.changeHandler} 
                        value={this.state.email}/>
                    <br />
                    
                    <label htmlFor="password">Password </label>
                    <input type="password" 
                        name="password" 
                        id="password" 
                        onChange={this.changeHandler} 
                        value={this.state.password}/>
                    <br/>

                    <input type="submit" value="Sign In"/>
                </form>
            </div>
        )
    }
}

export default Login;