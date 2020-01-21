import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

class MobileContact extends Component {
    render(){
        return(
            <footer className="mobileContact" id="contact">
                <div className="mobileContactIcon"></div>
                <div className="mobileContactTopText"><p>Contact Us</p><FontAwesomeIcon icon={faPhoneAlt}/><FontAwesomeIcon icon={faEnvelope}/></div>
                <div className="mobileContactBottomText">
                    <p>Privacy policy</p>
                    <p>Terms and Conditions</p>
                    <p>Instructions on how to pack your items</p>
                </div>
            </footer>
        )
    }
}

export default MobileContact;