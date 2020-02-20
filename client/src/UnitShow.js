import React from 'react';

const UnitShow = ({ match, units }) => {
    const unit = units.find(unit => unit.id == match.params.unitId)
    const resident = unit.resident

    return (
        <div>
            {console.log(unit)}
            <h3>Unit {unit.unit_number}</h3>
            <p>
                {unit.type_of_unit}<br/>
                {unit.sq_ft} sq ft<br/>
                ${unit.rent_cost_per_month}/month
            </p>

            <p>
                {resident.first_name} {resident.last_name}<br/>
                {resident.email}<br/>
                {resident.phone_number}
            </p>

        </div>  
    )
}

export default UnitShow;