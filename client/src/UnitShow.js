import React from 'react';

// class UnitShow extends React.Component {
//     render() {
//         return(
//             <div>
//                 {/* {console.log(this.props.unit, "first console log")} */}
//                 {/* {console.log(this.props.unit.id)} */}
//                 <h2>{this.props.unit.id}</h2>
//             </div>
//         )
//     }
// }

const UnitShow = ({ match, units }) => {
    const unit = units.find(unit => unit.id == match.params.unitId)

    return (
        <div>
            {/* {console.log(match.params.unitId)}
            {console.log(units[0].id)}
            {console.log(units.find(unit => unit.id == match.params.unitId))} */}
            <h3>Unit {unit.unit_number}</h3>
            <p></p>

        </div>  
    )
}

export default UnitShow;