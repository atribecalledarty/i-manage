import React from 'react';
import FormErrors from './FormErrors';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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
        this.props.addUser(this.state, this.props.isManager);
    }

    redirect = () => {
        const user = this.props.users[-1]
        if (this.props.isLoggedIn && !this.props.user.manager_status) {
            this.props.history.push(`/auth_user/${this.props.user.id}/balance`)
        }
    }

    componentDidUpdate(prevProps){
        const user = this.props.users[this.props.users.length - 1]
        console.log('last user in new user form props', this.props.users)
        const prevUser = prevProps.users[prevProps.users.length - 1]
        console.log('in new user form ', user, prevUser)
        if (this.props.isLoggedIn && !this.props.user.manager_status) {
            this.props.history.push(`/auth_user/${this.props.user.id}/balance`)
        } else if (this.props.isLoggedIn && user !== undefined && user !== prevUser) {
            this.props.history.push(`/users/${user.id}`)
        }
    }

    render() {
        return(
            <Jumbotron id="new-user-jumbo">
                <Form onSubmit={this.submitHandler}>
                    <h5>Create New Account</h5>
                    <FormErrors errors={this.props.errors} clearErrors={this.props.clearErrors}/>
                    <Form.Row>
                        <Form.Group as={Col} controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={this.changeHandler} name="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.changeHandler} name="password" type="password" placeholder="Password" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="first_name">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control onChange={this.changeHandler} name="first_name" placeholder="Harry" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="last_name">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control onChange={this.changeHandler} name="last_name" placeholder="Potter" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={this.changeHandler} name="username" placeholder="Enter Username"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="phone_number">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control onChange={this.changeHandler} name="phone_number" placeholder="XXX-XXX-XXXX"/>
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Jumbotron>
        )
    }
}

export default NewUserForm;