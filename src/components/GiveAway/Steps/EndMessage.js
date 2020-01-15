import React, { Component } from 'react';

class EndMessage extends Component{

    render(){
        return(
            <div className="singleStep">
                <div className="endMessage">
                <p>Dziękujemy za przesłanie formularza<br/> Na maila prześlemy wszelkie<br/> informacje o odbiorze.</p>
                <div className="decoration"></div>
                </div>
            </div>
        )
    }

}

export default EndMessage;