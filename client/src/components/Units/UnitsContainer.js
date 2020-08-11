import React from 'react';
import UnitsList from './UnitsList';
import UnitShow from './UnitShow';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { addResidency, deleteResidency } from '../../utilities/dispatchActions';
import './UnitsContainer.css';

class UnitsContainer extends React.Component {
    render() {
        return <div className="unitsContainer">
            <UnitsList units={this.props.units} history={this.props.history} />
            <Route path={`/units/:unitId`} render={routerProps => 
                <UnitShow 
                    {...routerProps} 
                    units={this.props.units} 
                    users={this.props.users}
                    deleteResidency={this.props.deleteResidency}
                    addResidency={this.props.addResidency}/>}/>
        </div>
    }
}

const mapStateToProps = state => ({
    units: state.units,
    users: state.users,
})

const mapDispatchToProps = { addResidency, deleteResidency }

export default connect(mapStateToProps, mapDispatchToProps)(UnitsContainer);