import React, { Component } from 'react';

class EndMessage extends Component {

    render() {
        return (
            <div className="singleStep container">
                <div className="endMessage">
                    <p>Thank you for submiting the form.<br />We will send all the information<br />about the pickup by email.</p>
                    <div className="decoration"></div>
                </div>
            </div>
        )
    }
}

export default EndMessage;