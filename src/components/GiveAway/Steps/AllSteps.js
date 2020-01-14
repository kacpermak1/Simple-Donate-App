import React, { Component } from 'react';
import YellowInfoBar from '../YellowInfoBar/YellowInfoBar';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

class AllSteps extends Component {

    state = {
        stepNumber: 1,
        stepOneInput: "",
        numberOfBags: 0,
        stepTwoSelectClicked: false,
        selectCity: "",
        whoToHelpList: [],
        optionalOrganisation: "",
        street:"",
        city:"",
        postCode:"",
        mobile:"",
        date:"",
        time:"",
        courierMessage:""
    }

    stepOneHandleRadioChange = (e) => {
        this.setState({ stepOneInput: e.target.parentNode.textContent });
    }
    stepTwoHandleSelect = (e) => {
        this.setState({ numberOfBags: Number(e.target.innerText), stepTwoSelectClicked: false })
    }
    stepTwoHandleClickSelect = (e) => {
        this.setState({ stepTwoSelectClicked: this.state.stepTwoSelectClicked ? false : true });
    }
    stepThreeCitySelect = (e) => {
        this.setState({ selectCity: e.target.innerText, stepTwoSelectClicked: false })
    }
    stepThreeHandleMultiChoice = (e) => {
        let arr = this.state.whoToHelpList;
        let newArr = [];
        if (arr.indexOf(e.target.innerText) > -1) {
            newArr = arr.filter(item => item !== e.target.innerText);
            this.setState({ whoToHelpList: newArr });
        } else {
            let newArr = [...arr, e.target.innerText];
            this.setState({ whoToHelpList: newArr })
        }
    }
    handleOptionalOrganisationInputChange = (e) => {
        this.setState({ optionalOrganisation: e.target.value })
    }
    handleNextStepButton = () => {
        this.setState({ stepNumber: this.state.stepNumber + 1 })
    }
    handlePreviousStepButton = () => {
        this.setState({ stepNumber: this.state.stepNumber - 1 })
    }

    handleStreetChange = (e) => {
        this.setState({street:e.target.value})
    }
    handleCityChange = (e) => {
        this.setState({city:e.target.value})
    }
    handlePostCodeChange = (e) => {
        this.setState({postCode:e.target.value})
    }
    handleMobileChange = (e) => {
        this.setState({mobile:e.target.value})
    }
    handleDateChange = (e) => {
        this.setState({date:e.target.value})
    }
    handleTimeChange = (e) => {
        this.setState({time:e.target.value})
    }
    handleMessageChange = (e) => {
        this.setState({courierMessage:e.target.value})
    }


    render() {

        const { stepNumber, stepTwoSelectClicked, numberOfBags, stepOneInput, selectCity, whoToHelpList, optionalOrganisation, street ,city, postCode, mobile, date, time, courierMessage} = this.state;
        let renderStep;
        let topText;

        if (stepNumber === 1) { renderStep = <StepOne radioChange={this.stepOneHandleRadioChange} inputValue={stepOneInput} nextStep={this.handleNextStepButton} />; topText = "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać." };
        if (stepNumber === 2) { renderStep = <StepTwo select={this.stepTwoHandleSelect} bags={numberOfBags} selectClick={this.stepTwoHandleClickSelect} isClicked={stepTwoSelectClicked} prevStep={this.handlePreviousStepButton} nextStep={this.handleNextStepButton} />; topText = "Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ." }
        if (stepNumber === 3) { renderStep = <StepThree select={this.stepThreeCitySelect} inputChange={this.handleOptionalOrganisationInputChange} inputVal={optionalOrganisation} multiChoiceList={whoToHelpList} multipleChoice={this.stepThreeHandleMultiChoice} city={selectCity} selectClick={this.stepTwoHandleClickSelect} isClicked={stepTwoSelectClicked} prevStep={this.handlePreviousStepButton} nextStep={this.handleNextStepButton} />; topText = "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy." };
        if (stepNumber === 4) { renderStep = <StepFour street={street} streetChange={this.handleStreetChange} city={city} postcode={postCode} postcodeChange={this.handlePostCodeChange} mobile={mobile} mobileChange={this.handleMobileChange} time={time} timeChange={this.handleTimeChange} message={courierMessage} messageChange={this.handleMessageChange} date={date} dateChange={this.handleDateChange} cityChange={this.handleCityChange}prevStep={this.handlePreviousStepButton} nextStep={this.handleNextStepButton} />; topText = "Podaj adres oraz termin odbioru rzeczy."}
        return (
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