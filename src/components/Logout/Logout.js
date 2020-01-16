import React, { Component } from 'react';
import LoginNav from './../header/loginNav';
import Nav from './../Login/Nav';
import { Link } from 'react-router-dom';

class Logout extends Component {

    render() {
        return (
            <section className="loginSection">
                <div className="headerLogin">
                    <div className="headerLoginRight">
                        <LoginNav />
                        <Nav />
                    </div>
                </div>
                <div className="logout">
                    <h2>Wylogowanie nastąpiło<br/>pomyślnie!</h2>
                    <div className="decoration"></div>
                    <Link to='/'>Strona główna</Link>
                </div>
            </section>
        )
    }
}

export default Logout;