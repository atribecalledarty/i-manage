import React from 'react';
import returnFormattedDate from './returnFormattedDate';
import { useHistory } from 'react-router-dom';

const UserShow = ({ match, users, deleteUser }) => {
    const user = users.find(user => user.id === Number(match.params.userId));
    const history = useHistory();

    const renderResidencyInfo = () => {
        if (user.residency !== undefined) {
            return (
                <p>
                    Resident since {returnFormattedDate(user.residency.start_date)}<br/>
                    Balance: ${user.residency.curr_balance}<br/>
                    Unit {user.unit.unit_number}<br/>
                </p>
            )
        }
    }

    const clickHandler = () => {
        deleteUser(user.id);
        history.goBack();
    }

    return (
        <div>
            {/* {console.log(user)} */}
            <h3>{user.first_name} {user.last_name}</h3>
            <button onClick={clickHandler}>Delete User</button>
            <p>
                {user.email}<br/>
                {user.phone_number}
            </p>
            {renderResidencyInfo()}
        </div>
    )
}

export default UserShow;