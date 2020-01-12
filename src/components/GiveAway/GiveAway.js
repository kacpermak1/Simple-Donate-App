import React, { Component } from 'react';
import GiveAwayHeader from './GiveAwayHeader/GiveAwayHeader';
import AllSteps from './Steps/AllSteps';
import Contact from '../Contact/Contact';

class GiveAway extends Component {

    render() {

        return (
            <>
            <GiveAwayHeader />
            <AllSteps />
            <Contact />
            </>
            
        )
    }
}

export default GiveAway;