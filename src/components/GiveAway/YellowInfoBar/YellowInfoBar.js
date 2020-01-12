import React, { Component } from 'react';

class YellowInfoBar extends Component {
    render() {
        return (
            <div className="giveAwayInfoBar">
                <div className="container">
                    <h2>Ważne!</h2>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default YellowInfoBar;