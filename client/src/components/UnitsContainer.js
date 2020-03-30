import React from 'react';
import UnitsList from './UnitsList';
import UnitShow from './UnitShow';
import { Route } from 'react-router-dom';
import NewResidencyForm from './NewResidencyForm';
import { Jumbotron, Col, Row } from 'react-bootstrap';

const UnitsContainer = ({ history, units, usersWithoutResidency, addResidency, deleteResidency }) => {
    
    return(
        <Jumbotron id="unit-container">
            {/* {console.log(units)} */}
            <Row>
                <Col md="auto">
                    <UnitsList units={units} history={history} />
                </Col>

                <Route path={`/units/:unitId`} render={routerProps => 
                    <UnitShow 
                        {...routerProps} 
                        units={units} 
                        deleteResidency={deleteResidency}
                        addResidency={addResidency}
                        usersWithoutResidency={usersWithoutResidency}/>}/>
                    
            </Row>
        </Jumbotron>
    )
}

export default UnitsContainer;