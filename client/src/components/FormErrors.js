import React from 'react';

const FormErrors = ({ errors }) => {
    const displayErrors = errors.map((error, i) => <li key={i}>{error}</li>)

    return (
        <div>
            {displayErrors}
        </div>
    )
}

export default FormErrors;