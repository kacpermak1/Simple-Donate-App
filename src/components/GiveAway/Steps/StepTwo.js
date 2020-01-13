import React, { Component } from 'react';

const style = {
    marginRight:"1.4rem"
}
const clickedStyle = {
    display:"flex"
}

class StepTwo extends Component{
    render(){
        return(
<div className="singleStep">
<h3>Krok 2/4</h3>
    <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
    <div className="selectNumberOfBags">
        <h2>Liczba 60l worków:</h2>
        <div onClick={this.props.selectClick} className="select"><h4>{this.props.bags ? this.props.bags : "— wybierz —"}</h4><div className={this.props.isClicked ? "arrowUp arrowDown" : "arrowDown"}></div></div>
        <div className="options" style={this.props.isClicked ? clickedStyle : null} >
            <div onClick={this.props.select}>1</div>
            <div onClick={this.props.select}>2</div>
            <div onClick={this.props.select}>3</div>
            <div onClick={this.props.select}>4</div>
            <div onClick={this.props.select}>5</div>
        </div>
    </div>
    <div className="buttonsBottom"><button onClick={this.props.prevStep} style={style}>Wstecz</button><button onClick={this.props.nextStep}>Dalej</button></div>
</div>
        )
    }
}

export default StepTwo;