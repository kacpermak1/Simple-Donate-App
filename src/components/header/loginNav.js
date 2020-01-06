import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginNav extends Component {

    render() {
        return (
            <div className="loginNav">
                <Link to='/login'><div>Zaloguj</div></Link>
                <Link to='/register'><div>Załóz konto</div></Link>
            </div>
        )
    }
}

export default LoginNav;
