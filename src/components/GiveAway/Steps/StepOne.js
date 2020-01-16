import React, { Component } from 'react';

class StepOne extends Component {

    render() {

        let buttonDisabled;
        if (this.props.inputValue) { buttonDisabled = false } else { buttonDisabled = true };

        return (
            <div className="singleStep container">
                <h3>Krok 1/4</h3>
                <h2>Zaznacz co chcesz oddać:</h2>
                <form>
                    <div className="radio">
                        <label>
                            <input onChange={this.props.radioChange} type="radio" name="stepOne" value="1" checked={this.props.inputValue === "ubrania, które nadają się do ponownego użycia" ? true : false} />
                            ubrania, które nadają się do ponownego użycia
                            </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input onChange={this.props.radioChange} type="radio" name="stepOne" value="2" checked={this.props.inputValue === "ubrania, do wyrzucenia" ? true : false} />
                            ubrania, do wyrzucenia
                            </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input onChange={this.props.radioChange} type="radio" name="stepOne" value="3" checked={this.props.inputValue === "zabawki" ? true : false} />
                            zabawki
                            </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input onChange={this.props.radioChange} type="radio" name="stepOne" value="4" checked={this.props.inputValue === "książki" ? true : false} />
                            książki
                            </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input onChange={this.props.radioChange} type="radio" name="stepOne" value="5" checked={this.props.inputValue === "Inne" ? true : false} />
                            Inne
                            </label>
                    </div>
                </form>
                <div className="buttonsBottom"><button disabled={buttonDisabled} onClick={this.props.nextStep}>Dalej</button></div>
            </div>

        )
    }
}

export default StepOne;

