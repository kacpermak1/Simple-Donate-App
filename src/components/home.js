import React, { Component } from 'react';
import HeaderMain from './header/headerMain';
import ThreeColumns from './ThreeColumns/ThreeColumns';
import SimpleStepsSection from './simpleSteps/SimpleStepsSection';
import AboutUsSection from './aboutUs/aboutUsSection';
import WhoWeHelp from './WhoWeHelp/WhoWheHelp';
import Contact from './Contact/Contact';
import MobileContact from './Mobile/MobileContact';
import BeforeContact from './Mobile/BeforeContact';
import { withFirebase } from './Firebase';
class Home extends Component {

    state = {
        windowWidth: window.innerWidth,
        data:[],
        dataForDesktop:[]
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange); 
       this.timeOutLoggedIn = setTimeout(()=>{this.getDataForLoggedInStatistics()},700);
       this.timeOutLoggedOut = setTimeout(()=>{this.getDataForLoggedOutStatistics()},700);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange)
        clearTimeout(this.timeOutLoggedIn);
        clearTimeout(this.timeOutLoggedOut);
    }

    handleWindowSizeChange = () => {
        this.setState({ windowWidth: window.innerWidth })
    }

    getDataForLoggedOutStatistics = () => {
        let arr = [];
        this.props.firebase.db.collection("users")
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    arr.push(doc.data().request.bags);
                })
            })
        this.setState({ dataForDesktop: arr })
    }

    getDataForLoggedInStatistics = () => {
        let arr = [];
        let email = sessionStorage.getItem("email");
        this.props.firebase.db.collection("users").where("email", "==", email)
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    arr.push(doc.data().request.bags);
                })
            })
        this.setState({ data: arr })
    }

    render() {
        const isLoggedIn = sessionStorage.getItem("email");

        return (
            <>
                <HeaderMain windowWidth={this.state.windowWidth} data={this.state.data}/>
                <ThreeColumns data={isLoggedIn ? this.state.data : this.state.dataForDesktop} />
                <SimpleStepsSection />
                <AboutUsSection />
                <WhoWeHelp itemsPerPage={this.state.windowWidth <= 640 ? 2 : 3} />
                {(this.state.windowWidth <= 640) && <BeforeContact />}
                {this.state.windowWidth > 640 ? <Contact /> : <MobileContact />}
            </>
        )
    }
};

export default withFirebase(Home);

