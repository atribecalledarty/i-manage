import React, { Component } from 'react';

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

    render() {
        return(
            <div>
                {console.log(this.state)}
                <form>
                    <label for="email">Email </label>
                    <input type="text"
                        name="email" 
                        id="email" 
                        onChange={this.changeHandler} 
                        value={this.state.email}/>
                    <br />
                    
                    <label for="password">Password </label>
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