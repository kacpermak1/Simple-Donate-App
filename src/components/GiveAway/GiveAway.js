import React, { Component } from 'react';
import GiveAwayHeader from './GiveAwayHeader/GiveAwayHeader';
import AllSteps from './Steps/AllSteps';
import Contact from '../Contact/Contact';
import { FirebaseContext, withFirebase } from './../Firebase';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import MobileContact from '../Mobile/MobileContact';

const Steps = compose(withRouter, withFirebase)(AllSteps);

class GiveAway extends Component {

    state = {
        windowWidth: window.innerWidth,
        stepToColor:1
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
            <>
                <GiveAwayHeader windowWidth={this.state.windowWidth} />
                <FirebaseContext.Consumer>
                    {firebase => <Steps windowWidth={this.state.windowWidth}/>}
                </FirebaseContext.Consumer>
                {this.state.windowWidth <= 640 ? <MobileContact/> : <Contact />}
            </>

        )
    }
}

export default GiveAway;