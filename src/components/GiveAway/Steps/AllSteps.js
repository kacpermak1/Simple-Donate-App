import React, { Component } from 'react';
import YellowInfoBar from '../YellowInfoBar/YellowInfoBar';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import Summary from './Summary';
import EndMessage from './EndMessage';
import GiveAwayTop from '../../Mobile/GiveAwayTop';
class AllSteps extends Component {

    state = {
        stepNumber: 1,
        animateSlide: 0,
        stepOneInput: "",
        numberOfBags: 0,
        selectCity: "",
        whoToHelpList: [],
        optionalOrganisation: "",
        street: "",
        city: "",
        postCode: "",
        mobile: "",
        date: "",
        time: "",
        courierMessage: ""
    }

    stepOneHandleRadioChange = (e) => {
        this.setState({ stepOneInput: e.target.parentNode.textContent });
    }
    stepTwoHandleSelect = (e) => {
        this.setState({ numberOfBags: Number(e.target.innerText), animateSlide: this.state.animateSlide + 1 })
    }
    stepTwoHandleClickSelect = (e) => {
        this.setState({ animateSlide: this.state.animateSlide + 1 });
    }
    stepThreeCitySelect = (e) => {
        this.setState({ selectCity: e.target.innerText, animateSlide: this.state.animateSlide + 1 })
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
        this.setState({ stepNumber: this.state.stepNumber + 1, animateSlide: 0 })
    }
    handlePreviousStepButton = () => {
        this.setState({ stepNumber: this.state.stepNumber - 1, animateSlide: 0 })
    }
    handleStreetChange = (e) => {
        this.setState({ street: e.target.value })
    }
    handleCityChange = (e) => {
        this.setState({ city: e.target.value })
    }
    handlePostCodeChange = (e) => {
        this.setState({ postCode: e.target.value })
    }
    handleMobileChange = (e) => {
        this.setState({ mobile: e.target.value })
    }
    handleDateChange = (e) => {
        this.setState({ date: e.target.value })
    }
    handleTimeChange = (e) => {
        this.setState({ time: e.target.value })
    }
    handleMessageChange = (e) => {
        this.setState({ courierMessage: e.target.value })
    }

    handleSubmit = (e) => {

        const { numberOfBags, stepOneInput, selectCity, whoToHelpList, optionalOrganisation, street, city, postCode, mobile, date, time, courierMessage } = this.state;

        const object = {
            bags: numberOfBags,
            whatItems: stepOneInput,
            location: selectCity,
            toRecieveHelp: whoToHelpList,
            optionalOrganisation: optionalOrganisation,
            addressAndTime: {
                street: street,
                city: city,
                postcode: postCode,
                mobile: mobile,
                date: date,
                time: time,
                message: courierMessage
            }
        }

        this.props.firebase.db.collection("users")
            .add({
                email: sessionStorage.getItem('email'),
                request: object
            })
            .then(function (doc) {
                console.log("Document ID: ", doc.id);
            })
            .catch(function (error) {
                console.error("Error: ", error);
            });

        this.setState({ stepNumber: 6, numberOfBags: 0, stepOneInput: "", selectCity: "", whoToHelpList: [], optionalOrganisation: "", street: "", city: "", postCode: "", mobile: "", date: "", time: "", courierMessage: "" });
    }

    render() {

        const { stepNumber, numberOfBags, stepOneInput, selectCity, whoToHelpList, optionalOrganisation, street, city, postCode, mobile, date, time, courierMessage, animateSlide } = this.state;
        let renderStep;
        let topText;

        if (stepNumber === 1) { renderStep = <StepOne radioChange={this.stepOneHandleRadioChange} inputValue={stepOneInput} nextStep={this.handleNextStepButton} />; topText = "Complete the details of your items. Thanks to this, we will know who is best to pass them on to." };
        if (stepNumber === 2) { renderStep = <StepTwo select={this.stepTwoHandleSelect} animate={animateSlide} bags={numberOfBags} selectClick={this.stepTwoHandleClickSelect} prevStep={this.handlePreviousStepButton} nextStep={this.handleNextStepButton} />; topText = "Pack all the items in 60l bags. You can find detailed instructions on how to properly pack things HERE." }
        if (stepNumber === 3) { renderStep = <StepThree select={this.stepThreeCitySelect} animate={animateSlide} inputChange={this.handleOptionalOrganisationInputChange} inputVal={optionalOrganisation} multiChoiceList={whoToHelpList} multipleChoice={this.stepThreeHandleMultiChoice} city={selectCity} selectClick={this.stepTwoHandleClickSelect} prevStep={this.handlePreviousStepButton} nextStep={this.handleNextStepButton} />; topText = "If you know the exact organization you want to help, you can enter its name on the bottom input of this form." };
        if (stepNumber === 4) { renderStep = <StepFour street={street} streetChange={this.handleStreetChange} city={city} postcode={postCode} postcodeChange={this.handlePostCodeChange} mobile={mobile} mobileChange={this.handleMobileChange} time={time} timeChange={this.handleTimeChange} message={courierMessage} messageChange={this.handleMessageChange} date={date} dateChange={this.handleDateChange} cityChange={this.handleCityChange} prevStep={this.handlePreviousStepButton} nextStep={this.handleNextStepButton} />; topText = "Enter where and when would you like the courier to pick up your donation." };
        if (stepNumber === 5) { renderStep = <Summary submit={this.handleSubmit} prevStep={this.handlePreviousStepButton} stepOne={stepOneInput} bags={numberOfBags} location={selectCity} whoToHelpList={whoToHelpList} optional={optionalOrganisation} time={time} message={courierMessage} date={date} mobile={mobile} postcode={postCode} city={city} street={street} /> };
        if (stepNumber === 6) { renderStep = <EndMessage /> };

        return (
            <>
                {(this.props.windowWidth <= 640) && <GiveAwayTop stepNumber={this.state.stepNumber}/>}
                {(stepNumber >= 1 && stepNumber <= 4) && <YellowInfoBar text={topText} windowWidth={this.props.windowWidth} />}
                <section className="allStepsSection">
                    {renderStep}
                </section>
            </>

        )
    }
}

export default AllSteps;