import React from 'react';

const Unit = ({ unitInfo }) => {
    return (
        <li>
            {/* {console.log('in unit component')} */}
            {unitInfo.unit_number} ({unitInfo.type_of_unit}) - {unitInfo.resident.first_name} {unitInfo.resident.last_name}
        </li>
    )
}


export default Unit