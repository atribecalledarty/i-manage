import React from 'react';
import FormErrors from './FormErrors';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap'

class NewPaymentForm extends React.Component {
    state = {
        amount: ""
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault();
        const userFromUsers = this.props.users.find(user => user.id === this.props.user.id) // I need to get user from users list because I need to get residency id..
        this.props.addPayment(this.state.amount, userFromUsers.residency.id);
    }

    displayErrors = () => {
        if (this.props.errors !== null) {
            return (
                <FormErrors errors={this.props.errors} clearErrors={this.props.clearErrors}/>
            )
        }
    }
    
    render() {
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    {/* {console.log(this.props.user)} */}
                    {/* <h5>New Payment</h5> */}
                    {/* <label htmlFor="amount">Amount: </label> */}
                    {this.displayErrors()}
                    <input
                        onChange={this.changeHandler} 
                        type="text"
                        id="amount"
                        name="amount"
                        placeholder="100.00"/>&nbsp;

                    <Button size="sm" variant="outline-primary" type="submit">Submit Payment</Button>
                </form>
            </div>
        )
    }
}

export default NewPaymentForm