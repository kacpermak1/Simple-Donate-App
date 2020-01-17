import React, { Component } from 'react';
import HeaderMain from './header/headerMain';
import ThreeColumns from './ThreeColumns/ThreeColumns';
import SimpleStepsSection from './simpleSteps/SimpleStepsSection';
import AboutUsSection from './aboutUs/aboutUsSection';
import WhoWeHelp from './WhoWeHelp/WhoWheHelp';
import Contact from './Contact/Contact';

class Home extends Component {

    state = {
        windowWidth: window.innerWidth
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
                <HeaderMain />
                <ThreeColumns />
                <SimpleStepsSection />
                <AboutUsSection />
                <WhoWeHelp itemsPerPage={this.state.windowWidth <= 640? 2 : 3} />
                <Contact />
            </>
        )
    }
};

export default Home;

