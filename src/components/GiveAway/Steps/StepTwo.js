import React, { Component } from 'react';

class StepTwo extends Component {

    render() {

        let animateStyle = null;
        if (this.props.animate && this.props.animate % 2 === 0) {
            animateStyle = {
                animationName: "arrowDown",
                animationDuration: "0.4s"
            }
        } else if (this.props.animate && this.props.animate % 2 !== 0) {
            animateStyle = {
                animationName: "arrowUp", animationDuration: "0.4s", transform: "rotate(180deg)"
            }
        }

        let optionsSlide = null;
        if (this.props.animate && this.props.animate % 2 !== 0) { optionsSlide = "options" } else if (!this.props.animate) { optionsSlide = "displayNone" } else if (
            this.props.animate && this.props.animate % 2 === 0) { optionsSlide = "optionsOut" }


        let buttonDisabled;
        if (this.props.bags) { buttonDisabled = false } else { buttonDisabled = true };

        return (
            <div className="singleStep container">
                <h3>Step 2/4</h3>
                <h2>Select the number of 60l bags you have packed into:</h2>
                <div className="selectNumberOfBags">
                    <h2>Number of 60l bags:</h2>
                    <div className="selectMain">
                    <div onClick={this.props.selectClick} className="select"><h4>{this.props.bags ? this.props.bags : "— select —"}</h4><div className="arrowDown" style={animateStyle}></div></div>
                    <div className={optionsSlide}>
                        <div onClick={this.props.select}>1</div>
                        <div onClick={this.props.select}>2</div>
                        <div onClick={this.props.select}>3</div>
                        <div onClick={this.props.select}>4</div>
                        <div onClick={this.props.select}>5</div>
                    </div>
                    </div>
                </div>
                <div className="buttonsBottom"><button onClick={this.props.prevStep}>Back</button><button onClick={this.props.nextStep} disabled={buttonDisabled}>Next</button></div>
            </div>
        )
    }
}

export default StepTwo;