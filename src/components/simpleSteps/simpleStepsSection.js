import React, { Component } from 'react';
import AllSteps from './AllSteps';
import {HashLink as Link} from 'react-router-hash-link';

class SimpleStepsSection extends Component {

    render() {

        const session = sessionStorage.getItem('email');
        let giveAwayLink;

        if(session){giveAwayLink = <Link to="/giveaway#top"><p><span>Oddaj</span> rzeczy</p></Link>}else{ giveAwayLink = <Link to="/login"><p><span>Oddaj</span> rzeczy</p></Link>}

        return (
            <section className="stepsSection" id="steps">
                    <h2>Wystarczą 4 proste kroki</h2>
                    <div className="decoration"></div>
                    <AllSteps />
                    {giveAwayLink}
            </section>
        )
    }
}

export default SimpleStepsSection;