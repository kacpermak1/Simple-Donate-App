import React, { Component } from 'react';

const selected = {
    backgroundColor: "#FAD648"
}

class StepOne extends Component {

    render() {

        let buttonDisabled;
        if (this.props.inputValue) { buttonDisabled = false } else { buttonDisabled = true };

        return (
            <div className="singleStep container">
                <h3>Step 1/4</h3>
                <h2>Select what kind of items you are donating:</h2>
                <div className="stepOneRadioInput">
                    <div className="radio">
                        <div className="radioCustomButton" onClick={this.props.radioChange} style={this.props.inputValue.indexOf('Clothes that can be reused') > -1 ? selected : null}></div>
                        <p>Clothes that can be reused</p>
                    </div>
                    <div className="radio">
                        <div className="radioCustomButton" onClick={this.props.radioChange} style={this.props.inputValue.indexOf('Clothes to throw away') > -1 ? selected : null}></div>
                        <p>Clothes to throw away</p>
                    </div>
                    <div className="radio">
                        <div className="radioCustomButton" onClick={this.props.radioChange} style={this.props.inputValue.indexOf('Toys') > -1 ? selected : null}></div>
                        <p>Toys</p>
                    </div>
                    <div className="radio">
                        <div className="radioCustomButton" onClick={this.props.radioChange} style={this.props.inputValue.indexOf('Books') > -1 ? selected : null}></div>
                        <p>Books</p>
                    </div>
                    <div className="radio">
                        <div className="radioCustomButton" onClick={this.props.radioChange} style={this.props.inputValue.indexOf('Other') > -1 ? selected : null}></div>
                        <p>Other</p>
                    </div>
                </div>
                <div className="buttonsBottom"><button disabled={buttonDisabled} onClick={this.props.nextStep}>Next</button></div>
            </div>

        )
    }
}

export default StepOne;

