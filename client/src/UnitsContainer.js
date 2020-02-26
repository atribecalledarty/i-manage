import React from 'react';
import UnitsList from './UnitsList';
import UnitShow from './UnitShow';
import { Route } from 'react-router-dom';
import CreateUser from './CreateUser';

const UnitsContainer = ({ match, units }) => {
    return(
        <div>
            {/* I am UnitsContainer component! */}
            {/* {console.log(this.props.units)} */}
            <UnitsList units={units} />
            <Route path={`${match.url}/:unitId`} 
                render={routerProps => <UnitShow {...routerProps} units={units}/>}/>
        </div>
    )
}

export default UnitsContainer;