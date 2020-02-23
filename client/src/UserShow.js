import React from 'react';
import returnFormattedDate from './returnFormattedDate';

const UserShow = ({ match, users }) => {
    const user = users.find(user => user.id === Number(match.params.userId))

    return (
        <div>
            {console.log(user)}
            <h3>{user.first_name} {user.last_name}</h3>
            <p>
                {user.email}<br/>
                {user.phone_number}
            </p>
            <p>
                Resident since {returnFormattedDate(user.residency.start_date)}<br/>
                Balance: ${user.residency.curr_balance}<br/>
                Unit {user.unit.unit_number}<br/>
            </p>
        </div>
    )
}

export default UserShow;