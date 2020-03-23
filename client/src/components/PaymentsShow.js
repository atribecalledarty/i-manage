import React from 'react';
import { returnFormattedDate } from '../utilities/utilityFunctions'

const PaymentsShow = ({ payments }) => {

    return(
        <div>
            <h5>Payments</h5>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                {payments.slice(0).reverse().map(payment => {
                    return (
                        <tr key={payment.id}>
                            <td>{returnFormattedDate(payment.transaction_date)}</td>
                            <td>${Number(payment.amount).toFixed(2)}</td>
                        </tr>
                    )    
                })}
                </tbody>
            </table>
        </div>
    )
}

export default PaymentsShow