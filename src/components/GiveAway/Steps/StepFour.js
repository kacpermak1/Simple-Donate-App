import React, { Component } from 'react';

const style = {
    marginRight: "1.4rem"
}

class StepFour extends Component {

    state={
        dateInputRender:1,
        timeInputRender:1
    }

    onClick = () => {
        this.setState({dateInputRender:2})
    }
    onClickTime = () => {
        this.setState({timeInputRender:2})
    }

    render() {

        let jsx;
        let timeJsx;

        if(this.state.dateInputRender===1){jsx = <input type='text' onSelect={this.onClick} name="date" id="date" value={this.props.date} onChange={this.props.dateChange} /> }else{jsx = <input type='date' name="date" id="date" value={this.props.date} onChange={this.props.dateChange}/>}
    if(this.state.timeInputRender ===1){timeJsx = <input type="text" onSelect={this.onClickTime} value={this.props.time} onChange={this.props.timeChange}/>}else {timeJsx = <input type="time" value={this.props.time} onChange={this.props.timeChange}/> };
        return (
            <div className="singleStep">
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
                            <label>Kod<br/> pocztowy:</label>
                            <input type="text" name="postcode" value={this.props.postcode} onChange={this.props.postcodeChange} />
                        </div>
                        <div>
                            <label>Numer<br/> telefonu:</label>
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
                            <label>Uwagi<br/> dla kuriera</label>
                            <textarea value={this.props.message} onChange={this.props.messageChange} />
                        </div>
                    </div>
                </form>
                <div className="buttonsBottom"><button onClick={this.props.prevStep} style={style}>Wstecz</button><button onClick={this.props.nextStep}>Dalej</button></div>
            </div>
        )
    }
}

export default StepFour;