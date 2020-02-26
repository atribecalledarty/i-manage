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

    render() {
        return(
            <div>
                <form>
                    <label for="username">Username: </label>
                    <input type="text" id="username" name="username" placeholder="harry_potter"/><br/>

                    <label for="first_name">First Name: </label>
                    <input type="text" id="first_name" name="first_name" placeholder="Harry"/><br/>

                    <label for="last_name">Last Name: </label>
                    <input type="text" id="last_name" name="last_name" placeholder="Potter"/><br/>

                    <label for="email">Email: </label>
                    <input type="text" id="email" name="email" placeholder="theboywholived22@owl.com"/><br/>

                    <label for="phone_number">Phone Number: </label>
                    <input type="text" id="phone_number" name="phone_number" placeholder="XXX-XXX-XXXX"/><br/>

                    <label for="password">Password: </label>
                    <input type="password" id="password" name="password" placeholder="asdfasdf"/><br/>
                </form>
            </div>
        )
    }
}

export default CreateUser;