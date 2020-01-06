import React, { Component } from 'react';
import HeaderMain from './header/headerMain';
import ThreeColumns from './threeColumns/threeColumns';
import SimpleStepsSection from './simpleSteps/simpleStepsSection';

class Home extends Component {
    render() {
        return (
            <>
                <HeaderMain />
                <ThreeColumns />
                <SimpleStepsSection />
            </>
        )
    }
};

export default Home;

