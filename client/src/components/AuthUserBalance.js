import React from 'react';
import { calculateBalance } from '../utilities/utilityFunctions';
import NewPaymentForm from './NewPaymentForm';
import PaymentsShow from './PaymentsShow';

const AuthUserShowBalance = ({ match, users, addPayment, errors, clearErrors }) => {
    const user = users.find(user => user.id === Number(match.params.userId));

    const renderPayments = () => {
        if (user.residency.payments !== undefined && user.residency.payments.length) {
            return (
                <PaymentsShow payments={user.residency.payments}/>
            )
        } else {
            return (
                <p><i>No payments</i></p>
            )
        }
    }
    const renderResidencyInfo = () => {
        if (user.residency !== undefined) {
            return (
                <>
                    Balance: <span id="balance">{calculateBalance(user.residency, user.unit.rent_cost_per_month)}</span>$
                    {console.log(addPayment)}
                    <NewPaymentForm 
                            user={user} 
                            users={users}
                            addPayment={addPayment}
                            clearErrors={clearErrors}
                            errors={errors}/>
                    <br/>
                    {renderPayments()}
                </>
            )
        } else {
            return (
                <>
                    <i><h1>No Residency.</h1>
                    <p>Please have your manager assign you to a unit.</p></i>
                </>
            )
        }
    }

    return (
            <>
                {renderResidencyInfo()}
            </>
            )

}

export default AuthUserShowBalance