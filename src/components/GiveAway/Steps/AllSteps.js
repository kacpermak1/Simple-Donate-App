import React, { Component } from 'react';
import YellowInfoBar from '../YellowInfoBar/YellowInfoBar';

class AllSteps extends Component{

    state={
        stepNumber:1,
        infoText:"Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."
    }

    
    render(){

        const {stepNumber, infoText} = this.state;

        return(
            <>
            <YellowInfoBar text={infoText} />
            <section className="allStepsSection">
        
            </section>
            </>

        )
    }
}

export default AllSteps;