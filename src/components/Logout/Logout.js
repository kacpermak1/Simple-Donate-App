import React, { Component } from 'react';
import LoginNav from './../header/loginNav';
import Nav from './../Login/Nav';

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
                    <a href="\">Strona główna</a>
                </div>
            </section>
        )
    }
}

export default Logout;