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
                <h3>Krok 1/4</h3>
                <h2>Zaznacz co chcesz oddać:</h2>
                <div className="stepOneRadioInput">
                    <div className="radio">
                        <div className="radioCustomButton" onClick={this.props.radioChange} style={this.props.inputValue.indexOf('ubrania, które nadają się do ponownego użycia') > -1 ? selected : null}></div>
                        <p>ubrania, które nadają się do ponownego użycia</p>
                    </div>
                    <div className="radio">
                        <div className="radioCustomButton" onClick={this.props.radioChange} style={this.props.inputValue.indexOf('ubrania, do wyrzucenia') > -1 ? selected : null}></div>
                        <p>ubrania, do wyrzucenia</p>
                    </div>
                    <div className="radio">
                        <div className="radioCustomButton" onClick={this.props.radioChange} style={this.props.inputValue.indexOf('zabawki') > -1 ? selected : null}></div>
                        <p>zabawki</p>
                    </div>
                    <div className="radio">
                        <div className="radioCustomButton" onClick={this.props.radioChange} style={this.props.inputValue.indexOf('książki') > -1 ? selected : null}></div>
                        <p>książki</p>
                    </div>
                    <div className="radio">
                        <div className="radioCustomButton" onClick={this.props.radioChange} style={this.props.inputValue.indexOf('Inne') > -1 ? selected : null}></div>
                        <p>Inne</p>
                    </div>
                </div>
                <div className="buttonsBottom"><button disabled={buttonDisabled} onClick={this.props.nextStep}>Dalej</button></div>
            </div>

        )
    }
}

export default StepOne;

