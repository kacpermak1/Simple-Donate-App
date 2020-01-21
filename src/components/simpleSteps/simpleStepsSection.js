import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Step from './OneStep';

class SimpleStepsSection extends Component {

    render() {

        const session = sessionStorage.getItem('email');
        let giveAwayLink;

        if (session) { giveAwayLink = <Link to="/giveaway#top"><p><span>Donate</span> Items</p></Link> } else { giveAwayLink = <Link to="/login"><p><span>Donate</span> Items</p></Link> }

        return (
            <section className="stepsSection" id="steps">
                <h2>You are only 4 steps away!</h2>
                <div className="decoration"></div>
                <div className="allSteps">
                    <div className="container">
                        <Step step={"Choose items"} text={"clothes, toys, equipment and more"} />
                        <Step step={"Pack them up"} text={"use bin bags"} />
                        <Step step={"Decide who you want to help"} text={"choose a trusted institution"} />
                        <Step step={"Order a courier"} text={"courier will arrive at a convenient time"} />
                    </div>
                </div>
                {giveAwayLink}
            </section>
        )
    }
}

export default SimpleStepsSection;