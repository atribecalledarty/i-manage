export function returnFormattedDate (date_string){
    const year = date_string.substring(0,4);
    const month = date_string.substring(5,7);
    const day = date_string.substring(8,10);
    return `${month}/${day}/${year}`
}

export function calculateBalance(residency, rentCost) {
    const totalPayments = residency.payments.reduce((total, payment) => total + payment.amount, 0)
    // (Date.today.year - self.start_date.year) * 12 + Date.today.month - self.start_date.month - (Date.today.day >= self.start_date.day ? 0 : 1)

    const year = Number(residency.start_date.substring(0,4));
    const month = Number(residency.start_date.substring(5,7));
    const day = Number(residency.start_date.substring(8,10));
    // console.log(year, month, day);

    const t = new Date();
    const monthsPassed =  (t.getFullYear() - year) * 12 + (t.getMonth() + 1) - month - (t.getDate() >= day ? 0 : 1)
    
    const outstandingBalance = ( monthsPassed * rentCost ) - totalPayments;
    return outstandingBalance;
}