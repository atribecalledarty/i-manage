export function returnFormattedDate (date_string){
    const year = date_string.substring(0,4);
    const month = date_string.substring(5,7);
    const day = date_string.substring(8,10);
    return `${month}/${day}/${year}`
}

export function calculateBalance(residency, rentCost) {
    const totalPayments = residency.payments.reduce((total, payment) => total + Number(payment.amount), 0)

    const year = Number(residency.start_date.substring(0,4));
    const month = Number(residency.start_date.substring(5,7));
    const day = Number(residency.start_date.substring(8,10));

    const t = new Date();
    const monthsPassed =  (t.getFullYear() - year) * 12 + (t.getMonth() + 1) - month - (t.getDate() >= day ? 0 : 1)
    
    const outstandingBalance = ( monthsPassed * rentCost ) - totalPayments;
    return outstandingBalance.toFixed(2);
}