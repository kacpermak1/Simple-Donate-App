import React, { Component } from 'react';
import LoginNav from './loginNav';
import Nav from '../Login/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const displayStyle = {
    display: "flex",
}
class MobileMenu extends Component {

    state = {
        windowWidth: window.innerWidth,
        clickCounter: 0
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
    handleClick = () => {
        this.setState({ clickCounter: this.state.clickCounter + 1 })
    }

    render() {
        let navMain;
        let burgerAnimate;
        let animate;
        let navOut;
        if (this.state.clickCounter > 0) {
            navOut = {
                display: "flex",
                animationName: "mobileMenuOut",
                animationDuration: "0.5s",
                opacity: "0",
                zIndex: "-1"
            }
        } else { navOut = { display: "none" } }

        if (this.state.clickCounter) {
            burgerAnimate = { animationName: "burgerRotate", animationDuration: "0.5s" }; animate = { animationName: "burgerRotateBack", animationDuration: "0.5s" };
        } else { burgerAnimate = null; animate = null }

        if (this.state.windowWidth <= 640) { navMain = <><div className="mobileBar"><div className="tshirt"></div><FontAwesomeIcon icon={faBars} onClick={this.handleClick} style={this.state.clickCounter % 2 ? burgerAnimate : animate} className="hamburgerIcon"/></div><div style={this.state.clickCounter % 2 ? displayStyle : navOut} className="mobileNav"><FontAwesomeIcon onClick={this.handleClick} icon={faChevronRight} /><LoginNav windowWidth={this.state.windowWidth} /><Nav windowWidth={this.state.windowWidth} /></div></> } else (navMain = <><LoginNav windowWidth={this.state.windowWidth} /><Nav windowWidth={this.state.windowWidth} /></>)

        return navMain
    }
}

export default MobileMenu;