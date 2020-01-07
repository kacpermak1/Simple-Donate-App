import React, { Component } from 'react';

class Step extends Component{

    render(){
        return(
            <div>
                <div className="stepPicture"></div>
                <h3>{this.props.step}</h3>
                <div className="stepUnderline"></div>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default Step;