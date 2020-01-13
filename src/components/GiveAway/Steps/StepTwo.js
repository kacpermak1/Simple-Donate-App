import React, { Component } from 'react';

const style = {
    marginRight:"1.4rem"
}

class StepTwo extends Component{
    render(){
        return(
<div className="singleStep">
<h3>Krok 2/4</h3>
    <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
    <div className="selectNumberOfBags">
        <h2>Liczba 60l worków:</h2>
        <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </div>
    <div className="buttonsBottom"><button onClick={this.props.prevStep} style={style}>Wstecz</button><button onClick={this.props.nextStep}>Dalej</button></div>
</div>
        )
    }
}

export default StepTwo;