import React, { Component } from 'react';
import YellowInfoBar from '../YellowInfoBar/YellowInfoBar';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

class AllSteps extends Component{

    state={
        stepNumber:1,
        stepOneInput: "",
        numberOfBags: 1,
        stepTwoSelectClicked: false
    }

    stepOneHandleRadioChange = (e) => {
        this.setState({stepOneInput:e.target.value})
    }
    stepTwoHandleSelect = (e) => {
        this.setState({numberOfBags:e.target.value})
    }
    handleNextStepButton = () => {
        this.setState({stepNumber:this.state.stepNumber + 1})
    }
    handlePreviousStepButton = () => {
        this.setState({stepNumber:this.state.stepNumber - 1})
    }

    
    render(){

        const {stepNumber} = this.state;
        let renderStep;
        let topText;

        if(stepNumber === 1){renderStep = <StepOne radioChange={this.stepOneHandleRadioChange} nextStep={this.handleNextStepButton}/>; topText="Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."};
        if(stepNumber === 2){renderStep = <StepTwo select={this.stepTwoHandleSelect} prevStep={this.handlePreviousStepButton} nextStep={this.handleNextStepButton}/>; topText="Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ."}

        return(
            <>
            <YellowInfoBar text={topText} />
            <section className="allStepsSection">
            {renderStep}
            </section>
            </>

        )
    }
}

export default AllSteps;