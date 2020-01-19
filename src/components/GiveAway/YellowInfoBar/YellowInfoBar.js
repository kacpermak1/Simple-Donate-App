import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

class YellowInfoBar extends Component {
    render() {
        return (
            <div className="giveAwayInfoBar">
                <div className="container">
                    {(this.props.windowWidth <= 640)&&<FontAwesomeIcon icon={faInfoCircle}/>}
                    <h2>Ważne!</h2>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default YellowInfoBar;