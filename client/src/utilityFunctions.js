export function returnFormattedDate (date_string){
    const year = date_string.substring(0,4);
    const month = date_string.substring(5,7);
    const day = date_string.substring(8,10);
    return `${month}/${day}/${year}`
}

export function calculateBalance(residency) {

}