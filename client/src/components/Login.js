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
        this.props.loginUser(this.state);
    }

    componentDidUpdate(){
        if (this.props.isLoggedIn) {
            this.props.history.push(`/auth_user/${this.props.user.id}`)
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