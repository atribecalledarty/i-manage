import React from 'react';

class AuthUserContainer extends React.Component {
    render(){
        return(
            <>
                <Route path={`/auth_user/:userId/balance`} render={routerProps =>
                    <AuthUserBalance 
                        {...routerProps}
                        users={this.props.users}
                        addPayment={this.props.addPayment}
                        errors={this.props.errors}/>}/>
                <Route />
            </>
        )
    }
}

export default AuthUserContainer;