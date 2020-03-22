import React from 'react';

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
        
    }
    
    render() {
        return(
            <div>
                <form>
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