import React, { Component } from 'react';
import GiveAwayHeader from './GiveAwayHeader/GiveAwayHeader';
import AllSteps from './Steps/AllSteps';
import Contact from '../Contact/Contact';
import { FirebaseContext, withFirebase } from './../Firebase';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

const Steps = compose(withRouter, withFirebase)(AllSteps);

class GiveAway extends Component {

    render() {

        return (
            <>
                <GiveAwayHeader />
                <FirebaseContext.Consumer>
                    {firebase => <Steps />}
                </FirebaseContext.Consumer>
                <Contact />
            </>

        )
    }
}

export default GiveAway;