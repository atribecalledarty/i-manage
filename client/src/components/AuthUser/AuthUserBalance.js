import React from 'react';
import { calculateBalance } from '../../utilities/utilityFunctions';
import NewPaymentForm from './NewPaymentForm';
import PaymentsShow from './PaymentsShow';
import './AuthUserBalance.css';

const AuthUserShowBalance = ({ match, users, addPayment }) => {
    const user = users.find(user => user.id === Number(match.params.userId));

    return <div className="authUserBalance">
        {user?.residency ? <>
            <div className="authUserBalance__balance">
                Balance&nbsp;
                <span className="authUserBalance__amount">
                    <small>$</small>
                    <strong>{calculateBalance(user.residency, user.unit.rent_cost_per_month)}</strong>
                </span>
            </div>
            <NewPaymentForm user={user} users={users}addPayment={addPayment}/>
            {user.residency.payments ? <PaymentsShow payments={user.residency.payments}/> : <p><i>No payments</i></p>}
        </> : <>
            <i><h1>No Residency.</h1>
            <p>Please have your manager assign you to a unit.</p></i>
        </>}
    </div>

}

export default AuthUserShowBalance