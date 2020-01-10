import React, { Component } from 'react';
import AboutUsContent from './aboutUsContent'

class AboutUsSection extends Component {
    render() {
        return (
            <section className="aboutUs" id="aboutUs">
                <div className="container">
                    <AboutUsContent />
                    <div className="aboutUsImage"></div>
                </div>
            </section>
        )
    }
}

export default AboutUsSection;