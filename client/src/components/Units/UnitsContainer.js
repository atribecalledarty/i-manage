import React from 'react';
import UnitsList from './UnitsList';
import UnitShow from './UnitShow';
import { Route } from 'react-router-dom';
import { Jumbotron, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addResidency, deleteResidency } from '../../utilities/dispatchActions';

class UnitsContainer extends React.Component {
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
                            users={this.props.users}
                            deleteResidency={this.props.deleteResidency}
                            addResidency={this.props.addResidency}/>}/>
                        
                </Row>
            </Jumbotron>
        )
    }
}

const mapStateToProps = state => {
    return {
        units: state.units,
        users: state.users,
        isLoggedIn: state.isLoggedIn,
        user: state.user
    }
}

const mapDispatchToProps = { addResidency, deleteResidency }

export default connect(mapStateToProps, mapDispatchToProps)(UnitsContainer);