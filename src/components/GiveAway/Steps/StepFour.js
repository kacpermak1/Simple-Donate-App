import React, { Component } from 'react';
class StepFour extends Component {

    state = {
        
        errors: []
    }

    handleSubmit = () => {
        let err = [];

        if (this.props.street.length < 2) {
            err.push('Incorrect street name')
        } else if (this.props.city.length < 2) {
            err.push('Incorrect city name')
        } else if (this.props.mobile.length < 9) {
            err.push('Mobile number must contain at least 9 digits')
        } else if (!this.props.date) {
            err.push('Provide the correct date DD.MM.YYYY')
        } else if (!this.props.time.match('^[0-9]{2}:[0-9]{2}$')) {
            err.push('Provide the correct time e.g. 10:30')
        };

        if (err.length > 0) { this.setState({ errors: err }) } else {
            this.props.nextStep()
        }
    }

    render() {

        let errList;

        if(this.state.errors.length>0){errList = <ul className="errorsList">{this.state.errors.map((e,i) =><li key={i}>{e}</li>)}</ul>}else{errList = null};
        
        return (
            <div className="singleStep container">
                <h3>Step 4/4</h3>
                <h2>Enter your address and date for the courier</h2>
                <form id="stepFourForm">
                    <div>
                        <p>Pickup Address:</p>
                        <div>
                            <label>Street:</label>
                            <input type="text" name="street" value={this.props.street} onChange={this.props.streetChange} />
                        </div>
                        <div>
                            <label>City:</label>
                            <input type="text" name="city" value={this.props.city} onChange={this.props.cityChange} />
                        </div>
                        <div>
                            <label>Postcode:</label>
                            <input type="text" name="postcode" value={this.props.postcode} onChange={this.props.postcodeChange} />
                        </div>
                        <div>
                            <label>Mobile:</label>
                            <input type="number" name="phoneNumber" value={this.props.mobile} onChange={this.props.mobileChange} />
                        </div>
                    </div>
                    <div>
                        <p>Date and time:</p>
                        <div>
                            <label>Date:</label>
                            <input type='date' name="date" id="date" value={this.props.date} onChange={this.props.dateChange} />
                        </div>
                        <div>
                            <label>Time:</label>
                            <input type="time" value={this.props.time} onChange={this.props.timeChange} /> 
                        </div>
                        <div id="textareaStepFour">
                            <label>Note for courier</label>
                            <textarea value={this.props.message} onChange={this.props.messageChange} />
                        </div>
                        {errList}
                    </div>
                </form>
                <div className="buttonsBottom"><button onClick={this.props.prevStep}>Back</button><button onClick={this.handleSubmit}>Next</button></div>
            </div>
        )
    }
}

export default StepFour;