import React, { Component } from 'react';
import LoginNav from './loginNav';
import Nav from './nav';
import Title from './title';

class HeaderMain extends Component {
    render() {
        return (
            <div className="headerMain" id="home">
                <div className="headerImage">
                </div>
                <div className="headerRight">
                    <LoginNav />
                    <Nav />
                    <Title />
                </div>
            </div>
        )
    }
}

export default HeaderMain;