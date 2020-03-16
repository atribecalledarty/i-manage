import React from 'react';
import UnitsList from './UnitsList';
import UnitShow from './UnitShow';
import { Route } from 'react-router-dom';
import NewResidencyForm from './NewResidencyForm';

const UnitsContainer = ({ units, usersWithoutResidency, addResidency, deleteResidency }) => {
    
    return(
        <div>
            {/* {console.log(units)} */}
            <UnitsList units={units} />
            <Route path={`/units/:unitId`} 
                render={routerProps => <UnitShow {...routerProps} units={units} deleteResidency={deleteResidency}/>}/>
                
            <Route path={`/units/:unitId/residents/new`} render={routerProps => 
                <NewResidencyForm 
                    {...routerProps} 
                    addResidency={addResidency}
                    usersWithoutResidency={usersWithoutResidency}/>}/>
        </div>
    )
}

export default UnitsContainer;