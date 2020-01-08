import React, { Component } from 'react';
import AllSteps from './AllSteps';
import { Link } from 'react-router-dom'

class SimpleStepsSection extends Component {

    render() {
        return (
            <section className="stepsSection" id="steps">
                    <h2>Wystarczą 4 proste kroki</h2>
                    <div className="decoration"></div>
                    <AllSteps />
                    <Link to="/login"><p><span>Oddaj</span> rzeczy</p></Link>
            </section>
        )
    }
}

export default SimpleStepsSection;