import React from 'react';
import { Route } from 'react-router-dom';
import NewResidencyForm from './NewResidencyForm';
import './UnitShow.css';
import UnitShowResidency from './UnitShowResidency';

const UnitShow = ({ match, units, users, deleteResidency, addResidency }) => {
    const unit = units.find(unit => unit.id === Number(match.params.unitId))
    const usersWithoutResidency = users.filter(user => user.residency === undefined)

    return (
        <div className="unitShow">
            {unit && <>
                <h3 className="unitShow__header">Unit {unit.unit_number}</h3>
                <p className="unitShow__unitInfo">
                    <i>
                        {unit.type_of_unit}<br/>
                        {unit.sq_ft} sq ft<br/>
                        <small>$</small>{unit.rent_cost_per_month}/month
                    </i>
                </p>
                <UnitShowResidency match={match} unit={unit} deleteResidency={deleteResidency}/>
            </>}
            
            <Route path={`/units/:unitId/residents/new`} render={routerProps => 
                <NewResidencyForm 
                    {...routerProps} 
                    addResidency={addResidency}
                    usersWithoutResidency={usersWithoutResidency}/>}/>
        </div>  
    )
}

export default UnitShow;