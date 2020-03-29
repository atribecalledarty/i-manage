import React from 'react';

const FormErrors = ({ errors }) => {
    const displayErrors = errors.map((error, i) => <li className='error' key={i}>{error}</li>)

    return (
        <ul id="error-list">
            {displayErrors}
        </ul>
    )
}

export default FormErrors;