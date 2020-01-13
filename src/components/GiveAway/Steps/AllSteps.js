import React, { Component } from 'react';
import YellowInfoBar from '../YellowInfoBar/YellowInfoBar';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

class AllSteps extends Component{

    state={
        stepNumber:1,
        stepOneInput: "",
        numberOfBags: 0,
        stepTwoSelectClicked: false
    }

    stepOneHandleRadioChange = (e) => {
        this.setState({stepOneInput:e.target.parentNode.textContent})
    }
    stepTwoHandleSelect = (e) => {
        this.setState({numberOfBags:Number(e.target.innerText),stepTwoSelectClicked:false })
    }
    stepTwoHandleClickSelect = () => {
        this.setState({stepTwoSelectClicked: this.state.stepTwoSelectClicked ? false : true})
    }
    handleNextStepButton = () => {
        this.setState({stepNumber:this.state.stepNumber + 1})
    }
    handlePreviousStepButton = () => {
        this.setState({stepNumber:this.state.stepNumber - 1})
    }

    
    render(){

        const {stepNumber, stepTwoSelectClicked, numberOfBags, stepOneInput} = this.state;
        let renderStep;
        let topText;

        if(stepNumber === 1){renderStep = <StepOne radioChange={this.stepOneHandleRadioChange} inputValue={stepOneInput} nextStep={this.handleNextStepButton}/>; topText="Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."};
        if(stepNumber === 2){renderStep = <StepTwo select={this.stepTwoHandleSelect} bags={numberOfBags} selectClick={this.stepTwoHandleClickSelect} isClicked={stepTwoSelectClicked} prevStep={this.handlePreviousStepButton} nextStep={this.handleNextStepButton}/>; topText="Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ."}

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