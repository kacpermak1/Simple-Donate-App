import React, { Component } from 'react';
import LoginNav from '../../header/loginNav'
import Nav from '../../Login/Nav'
import GiveAwayTitle from './GiveAwayTitle';

class GiveAwayHeader extends Component {
    render() {
        return (
            <div className="giveAwayHeader" id="top">
                <div className="headerImage">
                </div>
                <div className="headerRight">
                    <LoginNav />
                    <Nav />
                    <GiveAwayTitle />
                </div>
            </div>
        )
    }
}

export default GiveAwayHeader;