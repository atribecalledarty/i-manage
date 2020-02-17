import React, { Component } from 'react';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    render() {
        return(
            <div>
                <form>
                    <label for="email">Email </label>
                    <input type="text" name="email" id="email" />
                    <br />
                    
                    <label for="password">Password </label>
                    <input type="password" name="password" id="password" />
                    <br/>

                    <input type="submit" value="Sign In"/>
                </form>
            </div>
        )
    }
}

export default Login;