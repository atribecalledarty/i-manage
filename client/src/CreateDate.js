export default function createDateFromJson (date_string){
    const year = date_string(0,3);
    const month = date_string(5,6);
    const day = date_string(8,9);
    return `${month}/${day}/${year}`
}