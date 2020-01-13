import React, { Component } from 'react';

class StepOne extends Component {

    render() {

        return (
            <div className="singleStep">
                <h3>Krok 1/4</h3>
                <h2>Zaznacz co chcesz oddać:</h2>
                <form>
                    <div className="radio">
                        <label>
                            <input onChange={this.props.radioChange} type="radio" name="stepOne" value="ubrania, które nadają się do ponownego użycia"/>
                            ubrania, które nadają się do ponownego użycia
                            </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input onChange={this.props.radioChange} type="radio" name="stepOne" value="ubrania, do wyrzucenia" />
                            ubrania, do wyrzucenia
                            </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input onChange={this.props.radioChange} type="radio" name="stepOne" value="zabawki" />
                            zabawki
                            </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input onChange={this.props.radioChange} type="radio" name="stepOne" value="książki" />
                            książki
                            </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input onChange={this.props.radioChange} type="radio" name="stepOne" value="Inne" />
                            Inne
                            </label>
                    </div>
                </form>
                <div className="buttonsBottom"><button onClick={this.props.nextStep}>Dalej</button></div>
            </div>

        )
    }
}

export default StepOne;

