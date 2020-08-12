import React from 'react';
import NewPaymentForm from './NewPaymentForm';
import PaymentsShow from './PaymentsShow';
import './AuthUserBalance.css';

const AuthUserShowBalance = ({ user, addPayment }) => {
    return <div className="authUserBalance">
        {user?.residency ? <>
            <div className="authUserBalance__balance">
                Balance&nbsp;
                <span className="authUserBalance__amount">
                    <small>$</small>
                    <strong>{user.residency.balance}</strong>
                </span>
            </div>
            <NewPaymentForm user={user} addPayment={addPayment}/>
            {user.residency.payments?.length ? <PaymentsShow payments={user.residency.payments}/> : <p><i>No payments</i></p>}
        </> : <>
            <i>
                <h1>No Residency.</h1>
                <p>Please have your manager assign you to a unit.</p>
            </i>
        </>}
    </div>

}

export default AuthUserShowBalance