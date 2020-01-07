import React, { Component } from 'react';
import HeaderMain from './header/headerMain';
import ThreeColumns from './threeColumns/threeColumns';
import SimpleStepsSection from './simpleSteps/simpleStepsSection';
import AboutUsSection from './aboutUs/aboutUsSection';

class Home extends Component {
    render() {
        return (
            <>
                <HeaderMain />
                <ThreeColumns />
                <SimpleStepsSection />
                <AboutUsSection />
            </>
        )
    }
};

export default Home;

