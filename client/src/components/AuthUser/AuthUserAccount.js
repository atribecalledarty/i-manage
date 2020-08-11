import React from 'react';
import Button from 'react-bootstrap/Button';
import { returnFormattedDate } from '../../utilities/utilityFunctions'
import './AuthUserAccount.css';

const AuthUserAccount = ({ match, users, deleteUser, logoutUser }) => {
    const user = users.find(user => user.id === Number(match.params.userId));
    
    const clickHandler = () => {
        deleteUser(user.id);
        logoutUser();
    }

    return <div className="authUserAccount">
        {user && <>
            <h3>{user.first_name} {user.last_name} <Button size="sm" variant="outline-danger" onClick={clickHandler}>Delete Account</Button></h3>
            {user.residency ? <div className="authUserAccount__residency">
                    <i>Resident Since {returnFormattedDate(user.residency.start_date)}<br/>
                    Unit #{user.unit.unit_number}</i><br/><br/>
                </div> : <>
                    <i>Please have your manager assign you to a unit.</i><br/><br/>
                </>}
            <b>Email:</b> {user.email}<br/>
            <b>Phone:</b> {user.phone_number}<br/>
        </>}
    </div> 
}

export default AuthUserAccount;