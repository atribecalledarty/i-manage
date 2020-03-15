import React from 'react';
import FormErrors from './FormErrors';

class NewUserForm extends React.Component {
    state = {
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        password: ""
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.addUser(this.state);
    }

    redirect = () => {
        console.log('in redirect', this.props.isLoggedIn, this.props.user.id)
        if (this.props.isLoggedIn) {
            this.props.history.push(`/users/${this.props.user.id}`)
        }
    }

    componentDidUpdate(){
        this.redirect();
    }

    render() {
        return(
            <div>
                <FormErrors errors={this.props.errors}/>
                <form onSubmit={this.submitHandler}>
                    <h3>New User</h3>
                    <label htmlFor="username">Username: </label>
                    <input 
                        onChange={this.changeHandler} 
                        type="text" id="username" 
                        name="username" 
                        placeholder="harry_potter"
                    /><br/>

                    <label htmlFor="first_name">First Name: </label>
                    <input 
                        onChange={this.changeHandler} 
                        type="text" 
                        id="first_name" 
                        name="first_name" 
                        placeholder="Harry"
                    /><br/>

                    <label htmlFor="last_name">Last Name: </label>
                    <input 
                        onChange={this.changeHandler} 
                        type="text" 
                        id="last_name" 
                        name="last_name" 
                        placeholder="Potter"
                    /><br/>

                    <label htmlFor="email">Email: </label>
                    <input 
                        onChange={this.changeHandler} 
                        type="text" 
                        id="email" 
                        name="email" 
                        placeholder="theboywholived22@owl.com"
                    /><br/>

                    <label htmlFor="phone_number">Phone Number: </label>
                    <input 
                        onChange={this.changeHandler} 
                        type="text" 
                        id="phone_number"
                        name="phone_number" 
                        placeholder="XXX-XXX-XXXX"
                    /><br/>

                    <label htmlFor="password">Password: </label>
                    <input 
                        onChange={this.changeHandler} 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="asdfasdf"
                    /><br/>

                    <input type="submit" value="Create Account"/>
                </form>
            </div>
        )
    }
}

export default NewUserForm;