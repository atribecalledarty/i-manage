import React from 'react';
import { returnFormattedDate } from '../../utilities/utilityFunctions';
import Button from 'react-bootstrap/Button';
import './UserShow.css';

const UserShow = ({ match, users, deleteUser, history }) => {
    const user = users.find(user => user.id === Number(match.params.userId));

    const clickHandler = () => {
        deleteUser(user.id);
        history.push('/users')
    }   

    return <div className="userShow">
        {user && <>
            <h3>{user.first_name} {user.last_name} <Button size="sm" variant="outline-danger" onClick={clickHandler}>Delete User</Button></h3>
            <div className="userShow__residency">
                {user.residency ? <>
                    <i>Resident since {returnFormattedDate(user.residency.start_date)}<br/>
                    Unit #{user.unit.unit_number}</i>
                </> : <>
                    <i>Not yet assigned to unit. Please go to units to assign user to a unit.</i>
                </>}
            </div>
            <div className="userShow__info">
                <b>Email:</b> {user.email}<br/>
                <b>Phone number:</b> {user.phone_number}<br/>
            </div>
        </>}
    </div>
}

export default UserShow;