import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUnits } from './unitsAction';
import UnitsList from './UnitsList';
import UnitShow from './UnitShow';

class UnitsContainer extends Component {
    componentDidMount(){
        this.props.fetchUnits();
    }

    render() {
        return(
            <div>
                I am UnitsContainer component!
                {/* {console.log(this.props.units)} */}
                <UnitsList units={this.props.units} />
                <Route path={`${this.props.match.url}/:unitId`} component={UnitShow} />
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