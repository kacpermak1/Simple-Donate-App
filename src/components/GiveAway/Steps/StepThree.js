import React, { Component } from 'react';

const selected = {
    backgroundColor: "#FAD648"
}

class StepThree extends Component {

    render() {

        const clickedSelectStyle = {
            display: this.props.animate % 2 !== 0 ? "flex" : "none"
        }

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

        let buttonDisabled;
        if (this.props.multiChoiceList.length && this.props.city) { buttonDisabled = false } else if (this.props.inputVal && this.props.multiChoiceList.length) { buttonDisabled = false } else { buttonDisabled = true };

        return (

            <div className="singleStep container">
                <h3>Step 3/4</h3>
                <h2 style={{ marginBottom: "0" }}>Location</h2>
                <div className="selectCity">
                    <div onClick={this.props.selectClick} className="select"><h4>{this.props.city ? this.props.city : "— select —"}</h4><div className="arrowDown" style={animateStyle}></div></div>
                    <div className="options optionsIn" style={clickedSelectStyle} >
                        <div onClick={this.props.select}>London</div>
                        <div onClick={this.props.select}>Oxford</div>
                        <div onClick={this.props.select}>Milton Keynes</div>
                        <div onClick={this.props.select}>Manchester</div>
                        <div onClick={this.props.select}>Liverpool</div>
                    </div>
                </div>
                <div className="multiSelectStepThree">
                    <p>Who do you want to help?</p>
                    <div className="multiSelectTop">
                        <div onClick={this.props.multipleChoice} style={this.props.multiChoiceList.indexOf('Children') > -1 ? selected : null}>Children</div>
                        <div onClick={this.props.multipleChoice} style={this.props.multiChoiceList.indexOf('Single mothers') > -1 ? selected : null}>Single mothers</div>
                        <div onClick={this.props.multipleChoice} style={this.props.multiChoiceList.indexOf('Homeless') > -1 ? selected : null} >Homeless</div>
                    </div>
                    <div className="multiSelectBottom">
                        <div onClick={this.props.multipleChoice} style={this.props.multiChoiceList.indexOf('Disabled') > -1 ? selected : null}>Disabled</div>
                        <div onClick={this.props.multipleChoice} style={this.props.multiChoiceList.indexOf('Elderly people') > -1 ? selected : null}>Elderly people</div>
                    </div>
                </div>
                <div className="optionalOrganisation">
                    <p>Enter the name of a specific organization (optional)</p>
                    <input type="text" name="optionalOrganisation" onChange={this.props.inputChange} value={this.props.inputVal} style={{ border: "0.75px solid #3C3C3C", backgroundColor: "transparent" }} />
                </div>
                <div className="buttonsBottom"><button onClick={this.props.prevStep}>Back</button><button onClick={this.props.nextStep} disabled={buttonDisabled}>Next</button></div>
            </div>
        )
    }
}

export default StepThree;