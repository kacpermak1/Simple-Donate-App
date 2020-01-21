import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const colorChange = {
    backgroundColor: "#FAD648"
}

class GiveAwayTop extends Component{
    render(){
        return(
            <>
            <div className="giveAwayMobileTop">
                <p>Give your unwanted items to people <br/>IN NEED</p>
                <p>You are only 4 steps away!</p>
            </div>
            <div className="mobileStepCounter">
                <div style={this.props.stepNumber >= 1 ? colorChange : null}>1</div>
                <div style={this.props.stepNumber >= 2 ? colorChange : null}>2</div>
                <div style={this.props.stepNumber >= 3 ? colorChange : null}>3</div>
                <div style={this.props.stepNumber >= 4 ? colorChange : null}>4</div>
                <div style={this.props.stepNumber >= 5 ? colorChange : null}><FontAwesomeIcon icon={faCheck}/></div>
            </div>
            </>
        )
    }
}

export default GiveAwayTop;