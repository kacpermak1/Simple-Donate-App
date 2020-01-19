import React, { Component } from 'react';
import LoginNav from './loginNav';
import Nav from './nav';
import Title from './title';
import MobileMenu from './MobileMenu';

const style = {
    height:"56vh"
}

class HeaderMain extends Component {

    render() {

        const session = sessionStorage.getItem('email');
       
        return (
            <div className="headerMain" id="home" style={(!session && this.props.windowWidth <= 640)? style : null }>
                <div className="headerImage">
                </div>
                <div className="headerRight">
                    {this.props.windowWidth <= 640 ? <MobileMenu windowWidth={this.props.windowWidth} navigationType={<Nav windowWidth={this.props.windowWidth} />}/> : <><LoginNav windowWidth={this.props.windowWidth} /><Nav windowWidth={this.props.windowWidth} /></>}
                    <Title windowWidth={this.props.windowWidth} />
                </div>
            </div>
        )
    }
}

export default HeaderMain;