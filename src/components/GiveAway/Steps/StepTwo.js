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
        <div className="select"><h4>-- Wybierz --</h4><div className="arrowDown"></div></div>
        
    </div>
    <div className="buttonsBottom"><button onClick={this.props.prevStep} style={style}>Wstecz</button><button onClick={this.props.nextStep}>Dalej</button></div>
</div>
        )
    }
}

export default StepTwo;