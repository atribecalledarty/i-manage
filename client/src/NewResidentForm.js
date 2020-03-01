import React from 'react';

class NewResidentForm extends React.Component {
    render() {
        return(
            <div>
                {console.log(this.props.usersWithoutResidency)}
            </div>
        )
    }
}

export default NewResidentForm;