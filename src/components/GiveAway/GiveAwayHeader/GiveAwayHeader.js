import React, { Component } from 'react';
import LoginNav from '../../header/loginNav'
import Nav from '../../Login/Nav'
import GiveAwayTitle from './GiveAwayTitle';

class GiveAwayHeader extends Component {

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
            <div className="giveAwayHeader" id="top">
                <div className="headerImage">
                </div>
                <div className="headerRight">
                    <LoginNav windowWidth={this.state.windowWidth} />
                    <Nav windowWidth={this.state.windowWidth} />
                    <GiveAwayTitle />
                </div>
            </div>
        )
    }
}

export default GiveAwayHeader;