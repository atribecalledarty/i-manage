import React from 'react';

class CreateUser extends React.Component {
    displayUserInput = () => {
        
    }

    render() {
        return(
            <div>
                <a onClick={this.displayUserInput}>Add User</a>
            </div>
        )
    }
}