import React, { Component } from 'react';
import HeaderMain from './header/headerMain';
import ThreeColumns from './ThreeColumns/ThreeColumns';
import SimpleStepsSection from './simpleSteps/SimpleStepsSection';
import AboutUsSection from './aboutUs/aboutUsSection';
import WhoWeHelp from './WhoWeHelp/WhoWheHelp';
import Contact from './Contact/Contact';

class Home extends Component {
    render() {
        return (
            <>
                <HeaderMain />
                <ThreeColumns />
                <SimpleStepsSection />
                <AboutUsSection />
                <WhoWeHelp />
                <Contact />
            </>
        )
    }
};

export default Home;

