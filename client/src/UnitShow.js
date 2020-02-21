import React from 'react';
import createDateFn from './CreateDate';

const UnitShow = ({ match, units }) => {
    // eslint-disable-next-line
    const unit = units.find(unit => unit.id == match.params.unitId)
    const resident = unit.resident;
    const residency = unit.residency;

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

            <p>
                {/* {console.log(residency.start_date.typeof)} */}
                {/* {residency.created_at.strftime("%m/%d/%Y")} */}
                {/* {console.log(start_date)} */}
                {/* {console.log($.datepicker.formatDate('yy-mm-dd', mydate))} */}
                {/* {console.log(new Date(start_date))} */}
                Start Date {createDateFn(residency.start_date)}<br/>

                Balance ${residency.curr_balance}
            </p>

        </div>  
    )
}

export default UnitShow;