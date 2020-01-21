import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class LoginNav extends Component {

    handleLogOut = (fire) => {
        sessionStorage.clear();
    }

    render() {

        const loggedInButtonStyle = {
            border: "0.75px solid #FAD648",
            padding: "8px 12px",
            color:"#000",
        }
        
        const borderNone = {
            border:"none"
        }

        const loggedOut =
            <>
                <div className="loginNav">
                    <Link to='/login'><div>Sign in</div></Link>
                    <Link to='/register'><div>Sign up</div></Link>
                </div>
            </>;

        const loggedIn =
            <>
                <div className="loginNav">
                    <h3>Hello {sessionStorage.getItem('email')}!</h3>
                    <Link to='/giveaway' style={this.props.windowWidth > 640 ? loggedInButtonStyle : null}><div>Donate items</div></Link>
                    <Link to='/logout' onClick={this.handleLogOut} style={borderNone}><div>Log Out</div></Link>
                </div>
            </>;

        if (sessionStorage.getItem('email') == null) {
            return loggedOut
        } else { return loggedIn }
    }
}

export default LoginNav;