import React, { Component } from 'react';
class StepFour extends Component {

    state = {
        dateInputRender: 1,
        timeInputRender: 1,
        errors: []
    }

    onClick = () => {
        this.setState({ dateInputRender: 2 })
    }
    onClickTime = () => {
        this.setState({ timeInputRender: 2 })
    }
    handleSubmit = () => {
        let err = [];

        if (this.props.street.length < 2) {
            err.push('Podaj nazwę ulicy')
        } else if (this.props.city.length < 2) {
            err.push('Podaj nazwę miasta')
        } else if (!this.props.postcode.match('^[0-9]{2}-[0-9]{3}$')) {
            err.push('Podaj kod pocztowy w formacie XX-XXX')
        } else if (this.props.mobile.length !== 9) {
            err.push('Numer telefonu musi posiadać 9 cyfr')
        } else if (!this.props.date) {
            err.push('Podaj datę w formacie DD.MM.RRRR')
        } else if (!this.props.time.match('^[0-9]{2}:[0-9]{2}$')) {
            err.push('Podaj poprawną godzinę odbioru np. 10:30')
        };

        if (err.length > 0) { this.setState({ errors: err }) } else {
            this.props.nextStep()
        }
    }

    render() {

        let jsx;
        let timeJsx;
        let errList;

        if (this.state.dateInputRender === 1) { jsx = <input type='text' onSelect={this.onClick} name="date" id="date" value={this.props.date} onChange={this.props.dateChange} /> } else { jsx = <input type='date' name="date" id="date" value={this.props.date} onChange={this.props.dateChange} /> }
        if (this.state.timeInputRender === 1) { timeJsx = <input type="text" onSelect={this.onClickTime} value={this.props.time} onChange={this.props.timeChange} /> } else { timeJsx = <input type="time" value={this.props.time} onChange={this.props.timeChange} /> };
        if(this.state.errors.length>0){errList = <ul className="errorsList">{this.state.errors.map((e,i) =><li key={i}>{e}</li>)}</ul>}else{errList = null};
        
        return (
            <div className="singleStep container">
                <h3>Krok 4/4</h3>
                <h2>Podaj adres oraz termin odbioru rzeczy przez kuriera</h2>
                <form id="stepFourForm">
                    <div>
                        <p>Adres odbioru:</p>
                        <div>
                            <label>Ulica:</label>
                            <input type="text" name="street" value={this.props.street} onChange={this.props.streetChange} />
                        </div>
                        <div>
                            <label>Miasto:</label>
                            <input type="text" name="city" value={this.props.city} onChange={this.props.cityChange} />
                        </div>
                        <div>
                            <label>Kod pocztowy:</label>
                            <input type="text" name="postcode" value={this.props.postcode} onChange={this.props.postcodeChange} />
                        </div>
                        <div>
                            <label>Numer telefonu:</label>
                            <input type="number" name="phoneNumber" value={this.props.mobile} onChange={this.props.mobileChange} />
                        </div>
                    </div>
                    <div>
                        <p>Termin odbioru:</p>
                        <div>
                            <label>Data:</label>{jsx}
                        </div>
                        <div>
                            <label>Godzina:</label>{timeJsx}
                        </div>
                        <div id="textareaStepFour">
                            <label>Uwagi dla kuriera</label>
                            <textarea value={this.props.message} onChange={this.props.messageChange} />
                        </div>
                        {errList}
                    </div>
                </form>
                <div className="buttonsBottom"><button onClick={this.props.prevStep}>Wstecz</button><button onClick={this.handleSubmit}>Dalej</button></div>
            </div>
        )
    }
}

export default StepFour;