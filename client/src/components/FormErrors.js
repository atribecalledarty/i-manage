import React from 'react';

class FormErrors extends React.Component {
    componentWillUnmount() {
        this.props.clearErrors();
    }
    
    displayErrors = () => {
        return (
            this.props.errors.map((error, i) => <li className='error' key={i}>{error}</li>)
        )
    }

    render() {
            return (
            <ul id="error-list">
                {this.displayErrors()}
            </ul>
        )
    }
}

export default FormErrors;