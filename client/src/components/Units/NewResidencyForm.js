import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class NewResidencyForm extends React.Component {
    state = {
        userId: undefined
    }

    changeHandler = event => {
        this.setState({
            userId: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.addResidency(this.state.userId, this.props.match.params.unitId);
        this.props.history.push(`/units/${this.props.match.params.unitId}`)
    }

    render() {
        return(
            <div id="new-residency-form">
                <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId="userId">
                        <Form.Control onChange={this.changeHandler} as="select" size="sm" custom>
                            <option selected defaultValue disabled hidden>Choose User</option>
                            {this.props.usersWithoutResidency.map(user => <option key={user.id} value={user.id}>{user.first_name} {user.last_name}</option>)}
                        </Form.Control>
                        <Form.Text className="text-muted">
                            To create new user, navigate to Users
                        </Form.Text>
                    </Form.Group>
                    <Button size="sm" type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default NewResidencyForm;