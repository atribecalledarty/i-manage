import React from 'react';

class NewResidentForm extends React.Component {
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
        // window.location.href='/units';
    }

    render() {
        return(
            <div>
                {console.log(this.props.usersWithoutResidency)}
                <label htmlFor="user">Choose user:</label>
                <form onSubmit={this.submitHandler}>
                    <select onChange={this.changeHandler}>
                        {this.props.usersWithoutResidency.map(user => <option key={user.id} value={user.id}>{user.first_name} {user.last_name}</option>)}
                    </select><br/>
                    <input type="submit" value="Add User to Unit"/>
                </form>
            </div>
        )
    }
}

export default NewResidentForm;