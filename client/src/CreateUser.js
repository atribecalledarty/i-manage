import React from 'react';

class CreateUser extends React.Component {
    state = {
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        password: ""
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <div>
                <form>
                    <label for="username">Username: </label>
                    <input 
                        onChange={this.onChange} 
                        type="text" id="username" 
                        name="username" 
                        placeholder="harry_potter"
                    /><br/>

                    <label for="first_name">First Name: </label>
                    <input 
                        onChange={this.onChange} 
                        type="text" 
                        id="first_name" 
                        name="first_name" 
                        placeholder="Harry"
                    /><br/>

                    <label for="last_name">Last Name: </label>
                    <input 
                        onChange={this.onChange} 
                        type="text" 
                        id="last_name" 
                        name="last_name" 
                        placeholder="Potter"
                    /><br/>

                    <label for="email">Email: </label>
                    <input 
                        onChange={this.onChange} 
                        type="text" 
                        id="email" 
                        name="email" 
                        placeholder="theboywholived22@owl.com"
                    /><br/>

                    <label for="phone_number">Phone Number: </label>
                    <input 
                        onChange={this.onChange} 
                        type="text" 
                        id="phone_number"
                        name="phone_number" 
                        placeholder="XXX-XXX-XXXX"
                    /><br/>

                    <label for="password">Password: </label>
                    <input 
                        onChange={this.onChange} 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="asdfasdf"
                    /><br/>

                    <input type="submit" value="Add User"/>
                </form>
            </div>
        )
    }
}

export default CreateUser;