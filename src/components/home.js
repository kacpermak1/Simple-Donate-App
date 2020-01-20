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
        data:[]
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange); 
       setTimeout(()=>{this.getData()},500) ;
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange)
    }

    handleWindowSizeChange = () => {
        this.setState({ windowWidth: window.innerWidth })
    }

    getData = () => {
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

        return (
            <>
                <HeaderMain windowWidth={this.state.windowWidth} data={this.state.data}/>
                <ThreeColumns />
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

