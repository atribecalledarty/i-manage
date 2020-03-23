import React from 'react';
import { returnFormattedDate } from '../utilities/utilityFunctions'

const PaymentsShow = ({ payments }) => {
    const x = 2;

    return(
        <div>
            
            {console.log('in payments', typeof(x))}
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
                            {/* {console.log('in tablerow', typeof Number(payment.amount).toFixed(2))} */}
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