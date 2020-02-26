import React from 'react';

class CreateUser extends React.Component {
    displayUserInput = () => {
        return (
            <form>
                <label for="username">Username: </label>
                <input type="text" id="username" name="username"/><br/>

                <label for="username">Username: </label>
                <input type="text" id="first_name" name="first_name"/><br/>

                <label for="username">Username: </label>
                <input type="text" id="last_name" name="last_name"/><br/>

                <label for="username">Username: </label>
                <input type="text" id="email" name="email"/><br/>

                <label for="username">Username: </label>
                <input type="text" id="username" name="username"/><br/>

                <label for="username">Username: </label>
                <input type="text" id="phone_number" name="phone_number"/><br/>
                
                <label for="username">Username: </label>
                <input type="password" id="password" name="password"/><br/>
            </form>
        )
    }

    render() {
        return(
            <div>
                <a onClick={this.displayUserInput}>Add User</a>
            </div>
        )
    }
}