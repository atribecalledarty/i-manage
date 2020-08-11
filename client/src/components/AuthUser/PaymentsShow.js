import React from 'react';
import { returnFormattedDate } from '../../utilities/utilityFunctions';
import Table from 'react-bootstrap/Table';
import './PaymentsShow.css';

const PaymentsShow = ({ payments }) => {
    return <div className="paymentsShow">
        <h3>Transactions</h3>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {payments.slice(0).reverse().map(payment => <tr key={payment.id}>
                    <td>{returnFormattedDate(payment.transaction_date)}</td>
                    <td>${Number(payment.amount).toFixed(2)}</td>
                </tr>)}
            </tbody>
        </Table>
    </div>
}

export default PaymentsShow