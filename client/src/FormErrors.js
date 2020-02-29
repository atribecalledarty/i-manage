import React from 'react';

const FormErrors = ({ errors }) => {
    const displayErrors = () => {
        if (errors.length > 0) {
            return (errors.map(error => {
                <p>{error}</p>
            }))
        } else {
            return ''
        }
    }

    return (
        <div>
            {displayErrors()}
        </div>
    )
}

export default FormErrors;