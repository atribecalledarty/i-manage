import React from 'react';
import UnitsList from './UnitsList';
import UnitShow from './UnitShow';
import { Route } from 'react-router-dom';
import { Jumbotron, Col, Row } from 'react-bootstrap';

class UnitsContainer extends React.Component {
    componentDidMount(){ //need this one when units have been loaded already, and onmount we need to redirect
        if (this.props.units[0] !== undefined && this.props.history.location.pathname === '/units') {
            this.props.history.push(`/units/${this.props.units[0].id}`)
        }
    }

    componentDidUpdate(){ //need both because initial loading of units will not have units loaded into props
        if (this.props.units[0] !== undefined && this.props.history.location.pathname === '/units') {
            this.props.history.push(`/units/${this.props.units[0].id}`)
        }
    }

    render() {
        return(
            <Jumbotron id="unit-container">
                {/* {console.log(units)} */}
                <Row>
                    <Col md="auto">
                        <UnitsList units={this.props.units} history={this.props.history} />
                    </Col>

                    <Route path={`/units/:unitId`} render={routerProps => 
                        <UnitShow 
                            {...routerProps} 
                            units={this.props.units} 
                            deleteResidency={this.props.deleteResidency}
                            addResidency={this.props.addResidency}
                            usersWithoutResidency={this.props.usersWithoutResidency}/>}/>
                        
                </Row>
            </Jumbotron>
        )
    }
}

export default UnitsContainer;