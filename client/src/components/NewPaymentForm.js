import React from 'react';
import FormErrors from './FormErrors';

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
    
    render() {
        return(
            <div>
                <FormErrors errors={this.props.errors}/>
                <form onSubmit={this.submitHandler}>
                    {/* {console.log(this.props.user)} */}
                    <h3>New Payment</h3>
                    <label htmlFor="amount">Amount: </label>
                    <input
                        onChange={this.changeHandler} 
                        type="text"
                        id="amount"
                        name="amount"
                        placeholder="100.00"/><br/>

                    <input type="submit" value="Submit Payment"/>
                </form>
            </div>
        )
    }
}

export default NewPaymentForm