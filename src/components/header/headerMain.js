import React, { Component } from 'react';
import LoginNav from './loginNav';
import Nav from './nav';
import Title from './title';
import MobileMenu from './MobileMenu';
import { compose } from 'recompose';
import { FirebaseContext, withFirebase } from '../Firebase';
import { withRouter } from 'react-router-dom';

const style = {
    height: "56vh"
}

class HeaderMain extends Component {

    render() {

        const TitleFire = compose(withFirebase, withRouter)(Title)

        const session = sessionStorage.getItem('email');

        return (
            <div className="headerMain" id="home" style={(!session && this.props.windowWidth <= 640) ? style : null}>
                <div className="headerImage">
                </div>
                <div className="headerRight">
                    {this.props.windowWidth <= 640 ? <MobileMenu windowWidth={this.props.windowWidth} navigationType={<Nav windowWidth={this.props.windowWidth} />} /> : <><LoginNav windowWidth={this.props.windowWidth} /><Nav windowWidth={this.props.windowWidth} /></>}
                    <FirebaseContext.Consumer>
                        {firebase => <TitleFire windowWidth={this.props.windowWidth} />}
                    </FirebaseContext.Consumer>
                </div>
            </div>
        )
    }
}

export default HeaderMain;