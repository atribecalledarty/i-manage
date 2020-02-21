import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './fetchActions';
import UnitsList from './UnitsList';
import UnitShow from './UnitShow';
import { Route } from 'react-router-dom';

class UnitsContainer extends Component {
    componentDidMount(){
        this.props.fetchUnits();
    }

    render() {
        return(
            <div>
                {/* I am UnitsContainer component! */}
                {/* {console.log(this.props.units)} */}
                <UnitsList units={this.props.units} />
                <Route path={`${this.props.match.url}/:unitId`} 
                    render={routerProps => <UnitShow {...routerProps} units={this.props.units}/>}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUnits: () => dispatch(fetchUnits())
    }
}

const mapStateToProps = state => {
    return {
        units: state.units
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnitsContainer);