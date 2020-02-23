import React from 'react';

const UnitShow = ({ match, users }) => {
    const user = users.find(user => user.id === Number(match.params.userId))

    return (
        <div>
            UnitShow Component!
        </div>
    )
}

export default UnitShow;