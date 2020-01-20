import React, { Component } from 'react';
import LoginNav from './loginNav';
import Nav from './nav';
import Title from './title';
import MobileMenu from './MobileMenu';

const style = {
    height: "56vh"
}

class HeaderMain extends Component {

    state = {
        clickCounter: 0
    }

    handleClick = () => {
        this.setState({ clickCounter: this.state.clickCounter + 1 })
    }

    render() {

        const session = sessionStorage.getItem('email');

        return (
            <div className="headerMain" id="home" style={(!session && this.props.windowWidth <= 640) ? style : null}>
                <div className="headerImage">
                </div>
                <div className="headerRight">
                    {this.props.windowWidth <= 640 ? <MobileMenu click={this.state.clickCounter} windowWidth={this.props.windowWidth} navigationType={<Nav click={this.handleClick} windowWidth={this.props.windowWidth}/>} /> : <><LoginNav windowWidth={this.props.windowWidth} /><Nav windowWidth={this.props.windowWidth} /></>}
                    <Title windowWidth={this.props.windowWidth} data={this.props.data}/>
                </div>
            </div>
        )
    }
}

export default HeaderMain;