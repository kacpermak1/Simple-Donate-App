import React, { Component } from 'react';
import LoginNav from '../../header/loginNav'
import Nav from '../../Login/Nav'
import GiveAwayTitle from './GiveAwayTitle';
import MobileMenu from '../../header/MobileMenu';

class GiveAwayHeader extends Component {

    render() {
        return (
            <div className="giveAwayHeader" id="top">
                <div className="headerImage">
                </div>
                <div className="headerRight">
                    {this.props.windowWidth <= 640 ? <MobileMenu windowWidth={this.props.windowWidth} navigationType={<Nav windowWidth={this.props.windowWidth} />}/> : <>
                    <LoginNav />
                    <Nav />
                    <GiveAwayTitle />
                    </>}
                </div>
            </div>
        )
    }
}

export default GiveAwayHeader;