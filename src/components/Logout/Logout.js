import React, { Component } from 'react';
import LoginNav from './../header/loginNav';
import Nav from './../Login/Nav';
import { Link } from 'react-router-dom';
import MobileManu from '../header/MobileMenu';

class Logout extends Component {

    state = {
        windowWidth: window.innerWidth
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange)
    }
    handleWindowSizeChange = () => {
        this.setState({ windowWidth: window.innerWidth })
    }

    render() {
        return (
            <section className="loginSection">
                <div className="headerLogin">
                    <div className="headerLoginRight">
                    {this.state.windowWidth <= 640 ? <MobileManu windowWidth={this.state.windowWidth} navigationType={<Nav windowWidth={this.state.windowWidth} />}/> : <><LoginNav /><Nav /></>}
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