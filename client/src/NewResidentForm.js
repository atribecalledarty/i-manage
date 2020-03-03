import React from 'react';

class NewResidentForm extends React.Component {

    render() {
        return(
            <div>
                {console.log(this.props.usersWithoutResidency)}
                <label htmlFor="user">Choose user:</label>
                <form>
                    <select>
                        {this.props.usersWithoutResidency.map(user => <option value={user.id}>{user.first_name} {user.last_name}</option>)}
                    </select>
                </form>
            </div>
        )
    }
}

export default NewResidentForm;