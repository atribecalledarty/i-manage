import React from 'react';
import { returnFormattedDate } from '../utilities/utilityFunctions';
import Button from 'react-bootstrap/Button';

const UserShow = ({ match, users, deleteUser, history }) => {
    const user = users.find(user => user.id === Number(match.params.userId));

    const renderResidencyInfo = () => {
        if (user.residency !== undefined) {
            return (
                <>
                    <i>Resident since {returnFormattedDate(user.residency.start_date)}<br/>
                    Unit #{user.unit.unit_number}</i><br/><br/>
                </>
            )
        } else {
            return (
                <>
                    <i>Not yet assigned to unit. Please go to units to assign user to a unit.</i><br/><br/>
                </>
            )
        }
    }

    const renderUserInfo = () => {
        if (user !== undefined) {
            return (
                <>
                    <h3>{user.first_name} {user.last_name} <Button size="sm" variant="outline-danger" onClick={clickHandler}>Delete User</Button></h3>
                    {renderResidencyInfo()}
                    <b>Email:</b> {user.email}<br/>
                    <b>Phone number:</b> {user.phone_number}<br/>
                </>
            )
        }
    }

    const clickHandler = () => {
        deleteUser(user.id);
        history.push('/users')
    }   

    return (
        <div id="user-show">
            {renderUserInfo()}
        </div>
    )
}

export default UserShow;