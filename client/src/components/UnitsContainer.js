import React from 'react';
import UnitsList from './UnitsList';
import UnitShow from './UnitShow';
import { Route } from 'react-router-dom';
import NewResidencyForm from './NewResidencyForm';
import { Jumbotron, Col, Row } from 'react-bootstrap';

const UnitsContainer = ({ units, usersWithoutResidency, addResidency, deleteResidency }) => {
    
    return(
        <Jumbotron id="units-container">
            {/* {console.log(units)} */}
            <Row>
                <Col md="auto">
                    <UnitsList units={units} />
                </Col> 
                <Route path={`/units/:unitId`} render={routerProps => 
                    <UnitShow 
                        {...routerProps} 
                        units={units} 
                        deleteResidency={deleteResidency}/>}/>
                    
                <Route path={`/units/:unitId/residents/new`} render={routerProps => 
                    <NewResidencyForm 
                        {...routerProps} 
                        addResidency={addResidency}
                        usersWithoutResidency={usersWithoutResidency}/>}/>
            </Row>
        </Jumbotron>
    )
}

export default UnitsContainer;